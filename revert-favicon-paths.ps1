# PowerShell script to revert absolute paths for favicons
# Changes href="/favicon..." back to href="favicon..."

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Reverting favicon paths to relative..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # List of favicon filenames to check
    $favicons = @(
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'site.webmanifest'
    )
    
    foreach ($icon in $favicons) {
        # Check for absolute path usage: href="/icon..."
        $pattern = 'href="/' + [regex]::Escape($icon)
        $replacement = 'href="' + $icon
        
        if ($content -match $pattern) {
            $content = $content -replace $pattern, $replacement
            $modified = $true
        }
    }
    
    if ($modified) {
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [REVERTED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name)"
    }
}

Write-Output ""
Write-Output "Favicon paths reverted to relative!"

