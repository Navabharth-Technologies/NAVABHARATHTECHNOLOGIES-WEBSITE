<#
PowerShell script to crop `assets/logo-full.png` to the emblem (remove letters) and generate favicon files.
Requires ImageMagick (`magick`) available on PATH.

Usage:
  .\generate-favicons.ps1

If you want to adjust how much of the bottom (letters) is removed, change the $cropRatio (0.0-1.0).
#>

# Configuration
$src = 'assets\logo-full.png'
$workCrop = 'assets\logo-icon-crop.png'
$workSquare = 'assets\logo-icon-1024.png'

# Crop ratio: proportion of original height to keep from the top (0.0-1.0).
# Lower values remove more from the bottom (letters). Tweak if necessary.
$cropRatio = 0.65

# Output files
$sizes = @(512,192,180,96,48,32,16)

if (-not (Test-Path $src)) {
    Write-Error "Source not found: $src. Place the high-resolution logo at this path and re-run."
    exit 1
}

# Check ImageMagick
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Error "ImageMagick 'magick' command not found. Please install ImageMagick and ensure 'magick' is on PATH."
    exit 1
}

# Determine original dimensions
$identify = & magick identify -format "%w %h" $src 2>$null
if (-not $identify) {
    Write-Error "Failed to identify image dimensions."
    exit 1
}

$parts = $identify -split ' '
$width = [int]$parts[0]
$height = [int]$parts[1]

# Compute crop height to remove bottom letters
$cropHeight = [int]([math]::Round($height * $cropRatio))
Write-Output "Original: ${width}x${height}. Cropping to top ${cropHeight} pixels (ratio $cropRatio)."

# Crop from the top (gravity North) to remove letters at bottom
& magick $src -gravity North -crop ${width}x${cropHeight}+0+0 +repage $workCrop
if (-not (Test-Path $workCrop)) {
    Write-Error "Crop failed; aborting."
    exit 1
}

# Create a centered square of sufficient resolution (1024x1024)
& magick $workCrop -gravity center -resize 1024x1024^ -extent 1024x1024 $workSquare
if (-not (Test-Path $workSquare)) {
    Write-Error "Square conversion failed; aborting."
    exit 1
}

# Generate requested sizes
foreach ($s in $sizes) {
    $out = "assets\favicon-${s}x${s}.png"
    Write-Output "Generating $out"
    & magick $workSquare -resize ${s}x${s} $out
}

# Apple touch icon (180x180 already generated above as 180x180 if in sizes)
# Create multi-resolution ICO containing common sizes
Write-Output "Creating multi-resolution ICO"
& magick assets\favicon-16x16.png assets\favicon-32x32.png assets\favicon-48x48.png assets\favicon.ico

# Clean up temporary files
Remove-Item $workCrop -ErrorAction SilentlyContinue
Remove-Item $workSquare -ErrorAction SilentlyContinue

Write-Output "Favicons generated in assets\\"
Write-Output "Files created:"
Get-ChildItem assets\favicon-*.png, assets\favicon.ico | ForEach-Object { Write-Output " - $($_.FullName)" }
