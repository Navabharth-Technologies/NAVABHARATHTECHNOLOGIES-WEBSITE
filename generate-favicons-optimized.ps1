# PowerShell script to optimize favicons for better visibility
# This script crops/zooms the favicon to make it appear larger in browser tabs

Add-Type -AssemblyName System.Drawing

$sourceFile = "favicon-source.png"
$tempOptimized = "favicon-optimized-temp.png"

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

Write-Output "Optimizing favicon for better visibility..."

try {
    # Load source image
    $sourceImage = [System.Drawing.Image]::FromFile((Resolve-Path $sourceFile).Path)
    
    # Calculate crop area to remove excess transparent space
    # We'll add 10% padding around the actual content for breathing room
    $padding = 0.95  # 95% of original size (5% padding total)
    
    # Create optimized base image (cropped/zoomed)
    $optimizedSize = 1024
    $newImage = New-Object System.Drawing.Bitmap($optimizedSize, $optimizedSize)
    $graphics = [System.Drawing.Graphics]::FromImage($newImage)
    
    # Set high quality rendering
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    # Clear with transparent background
    $graphics.Clear([System.Drawing.Color]::Transparent)
    
    # Calculate zoom effect - draw larger than canvas and center
    $zoomFactor = 1.15  # 15% larger
    $scaledSize = [int]($optimizedSize * $zoomFactor)
    $offset = [int](($optimizedSize - $scaledSize) / 2)
    
    # Draw zoomed image
    $graphics.DrawImage($sourceImage, $offset, $offset, $scaledSize, $scaledSize)
    
    # Save optimized version
    $newImage.Save($tempOptimized, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graphics.Dispose()
    $newImage.Dispose()
    $sourceImage.Dispose()
    
    Write-Output "Created optimized base image"
    
    # Now generate all sizes from the optimized version
    $optimizedImage = [System.Drawing.Image]::FromFile((Resolve-Path $tempOptimized).Path)
    
    foreach ($file in $outputs.Keys) {
        $size = $outputs[$file]
        Write-Output "Generating $file ($size x $size)"
        
        $resized = New-Object System.Drawing.Bitmap($size, $size)
        $g = [System.Drawing.Graphics]::FromImage($resized)
        
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $g.Clear([System.Drawing.Color]::Transparent)
        $g.DrawImage($optimizedImage, 0, 0, $size, $size)
        
        $resized.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $g.Dispose()
        $resized.Dispose()
    }
    
    $optimizedImage.Dispose()
    
    # Clean up temp file
    Remove-Item $tempOptimized -Force -ErrorAction SilentlyContinue
    
    Write-Output ""
    Write-Output "Optimized favicons generated successfully!"
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

