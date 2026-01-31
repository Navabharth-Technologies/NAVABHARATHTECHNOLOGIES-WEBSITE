# PowerShell script to auto-crop transparent space and generate favicons
# This removes excess transparent padding to make the logo fill more of the icon space

Add-Type -AssemblyName System.Drawing

$sourceFile = "favicon-source.png"

if (-not (Test-Path $sourceFile)) {
    Write-Error "Source file not found!"
    exit 1
}

Write-Output "Auto-cropping favicon to remove excess transparent space..."

try {
    # Load source image
    $sourceImage = [System.Drawing.Bitmap]::FromFile((Resolve-Path $sourceFile).Path)
    $width = $sourceImage.Width
    $height = $sourceImage.Height
    
    Write-Output "Original size: ${width}x${height}"
    
    # Find the bounding box of non-transparent pixels
    $minX = $width
    $maxX = 0
    $minY = $height
    $maxY = 0
    
    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $sourceImage.GetPixel($x, $y)
            if ($pixel.A -gt 10) {  # Not fully transparent
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    $contentWidth = $maxX - $minX + 1
    $contentHeight = $maxY - $minY + 1
    
    Write-Output "Content bounds: ${minX},${minY} to ${maxX},${maxY}"
    Write-Output "Content size: ${contentWidth}x${contentHeight}"
    
    # Add 5% padding
    $padding = [Math]::Max($contentWidth, $contentHeight) * 0.05
    $minX = [Math]::Max(0, $minX - $padding)
    $minY = [Math]::Max(0, $minY - $padding)
    $maxX = [Math]::Min($width - 1, $maxX + $padding)
    $maxY = [Math]::Min($height - 1, $maxY + $padding)
    
    $cropWidth = [int]($maxX - $minX + 1)
    $cropHeight = [int]($maxY - $minY + 1)
    
    Write-Output "Cropped size (with padding): ${cropWidth}x${cropHeight}"
    
    # Create square canvas for the cropped content
    $size = [Math]::Max($cropWidth, $cropHeight)
    $croppedImage = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($croppedImage)
    
    $graphics.Clear([System.Drawing.Color]::Transparent)
    
    # Center the cropped content
    $offsetX = [int](($size - $cropWidth) / 2)
    $offsetY = [int](($size - $cropHeight) / 2)
    
    $srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)
    $destRect = New-Object System.Drawing.Rectangle($offsetX, $offsetY, $cropWidth, $cropHeight)
    
    $graphics.DrawImage($sourceImage, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Save cropped version
    $croppedImage.Save("favicon-cropped.png", [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graphics.Dispose()
    $croppedImage.Dispose()
    $sourceImage.Dispose()
    
    Write-Output "Saved cropped version as favicon-cropped.png"
    
    # Now generate all sizes from the cropped version
    $outputs = @{
        'favicon.png' = 512
        'favicon-16x16.png' = 16
        'favicon-32x32.png' = 32
        'android-chrome-192x192.png' = 192
        'android-chrome-512x512.png' = 512
        'apple-touch-icon.png' = 180
    }
    
    $croppedSource = [System.Drawing.Image]::FromFile((Resolve-Path "favicon-cropped.png").Path)
    
    foreach ($file in $outputs.Keys) {
        $targetSize = $outputs[$file]
        Write-Output "Generating $file (${targetSize}x${targetSize})"
        
        $newImage = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
        $g = [System.Drawing.Graphics]::FromImage($newImage)
        
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $g.Clear([System.Drawing.Color]::Transparent)
        $g.DrawImage($croppedSource, 0, 0, $targetSize, $targetSize)
        
        $newImage.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $g.Dispose()
        $newImage.Dispose()
    }
    
    $croppedSource.Dispose()
    
    Write-Output ""
    Write-Output "Favicons generated successfully with auto-crop!"
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

