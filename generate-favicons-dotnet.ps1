# PowerShell script to generate favicons using .NET classes
# No external dependencies required

Add-Type -AssemblyName System.Drawing

$sourceFile = "favicon-source.png"

# Output files with sizes
$outputs = @{
    'favicon.png' = 512
    'favicon-16x16.png' = 16
    'favicon-32x32.png' = 32
    'android-chrome-192x192.png' = 192
    'android-chrome-512x512.png' = 512
    'apple-touch-icon.png' = 180
}

if (-not (Test-Path $sourceFile)) {
    Write-Error "Source file not found!"
    exit 1
}

Write-Output "Generating favicons from $sourceFile..."

try {
    # Load source image
    $sourceImage = [System.Drawing.Image]::FromFile((Resolve-Path $sourceFile).Path)
    
    foreach ($file in $outputs.Keys) {
        $size = $outputs[$file]
        Write-Output "Generating $file ($size x $size)"
        
        # Create new bitmap with transparency
        $newImage = New-Object System.Drawing.Bitmap($size, $size)
        $graphics = [System.Drawing.Graphics]::FromImage($newImage)
        
        # Set high quality rendering
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Clear with transparent background
        $graphics.Clear([System.Drawing.Color]::Transparent)
        
        # Draw resized image
        $graphics.DrawImage($sourceImage, 0, 0, $size, $size)
        
        # Save as PNG
        $newImage.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Cleanup
        $graphics.Dispose()
        $newImage.Dispose()
    }
    
    $sourceImage.Dispose()
    
    Write-Output ""
    Write-Output "Favicons generated successfully!"
    Write-Output "Files created:"
    foreach ($file in $outputs.Keys) {
        if (Test-Path $file) {
            Write-Output "  [OK] $file"
        }
    }
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}

