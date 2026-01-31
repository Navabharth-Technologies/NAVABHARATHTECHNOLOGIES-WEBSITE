# PowerShell script to create favicon.ico from PNG files
# Creates a multi-resolution .ico file for better Google Search compatibility

Add-Type -AssemblyName System.Drawing

$sizes = @(16, 32, 48)
$outputFile = "favicon.ico"

Write-Output "Creating multi-resolution favicon.ico..."

try {
    # Load the cropped favicon as source
    if (Test-Path "favicon-cropped.png") {
        $sourceFile = "favicon-cropped.png"
    } else {
        $sourceFile = "favicon-source.png"
    }
    
    if (-not (Test-Path $sourceFile)) {
        Write-Error "Source file not found!"
        exit 1
    }
    
    $sourceImage = [System.Drawing.Image]::FromFile((Resolve-Path $sourceFile).Path)
    
    # Create temporary PNG files for each size
    $tempFiles = @()
    
    foreach ($size in $sizes) {
        $tempFile = "temp_${size}.png"
        $tempFiles += $tempFile
        
        Write-Output "Generating ${size}x${size} layer..."
        
        $bitmap = New-Object System.Drawing.Bitmap($size, $size)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.DrawImage($sourceImage, 0, 0, $size, $size)
        
        $bitmap.Save($tempFile, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $graphics.Dispose()
        $bitmap.Dispose()
    }
    
    $sourceImage.Dispose()
    
    # Use magick to create .ico if available, otherwise use .NET
    if (Get-Command magick -ErrorAction SilentlyContinue) {
        Write-Output "Using ImageMagick to create .ico file..."
        $fileList = $tempFiles -join " "
        & magick $tempFiles $outputFile
    } else {
        Write-Output "ImageMagick not found. Using largest size as .ico..."
        # Just copy the 48x48 as favicon.ico (better than nothing)
        Copy-Item "temp_48.png" $outputFile -Force
    }
    
    # Clean up temp files
    foreach ($tempFile in $tempFiles) {
        Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
    }
    
    if (Test-Path $outputFile) {
        Write-Output ""
        Write-Output "favicon.ico created successfully!"
        $fileSize = (Get-Item $outputFile).Length
        Write-Output "File size: $fileSize bytes"
    } else {
        Write-Error "Failed to create favicon.ico"
        exit 1
    }
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}

