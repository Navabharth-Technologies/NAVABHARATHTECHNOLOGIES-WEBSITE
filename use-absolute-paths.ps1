# PowerShell script to update all favicon references to use absolute root paths (/)

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Updating favicon references to use absolute root paths..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # List of favicon filenames to ensure they have leading slash
    $favicons = @(
        'favicon-16x16.png',
        'favicon-32x32.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'site.webmanifest'
    )
    
    foreach ($icon in $favicons) {
        # Replace href="icon..." with href="/icon..." if not already pointing to root
        # We look for href="icon and replace with href="/icon
        $pattern = 'href="' + [regex]::Escape($icon)
        $replacement = 'href="/' + $icon
        
        if ($content -match $pattern) {
            $content = $content -replace $pattern, $replacement
            $modified = $true
        }
    }
    
    if ($modified) {
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [UPDATED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name) - already using root paths or not found"
    }
}

Write-Output ""
Write-Output "All favicon references now point to root directory!"

