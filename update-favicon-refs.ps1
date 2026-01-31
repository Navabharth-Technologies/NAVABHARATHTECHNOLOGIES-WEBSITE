# PowerShell script to update all HTML files with cache-busting favicon parameters

$files = Get-ChildItem -Path "." -Filter "*.html" -File

$replacements = @{
    'favicon-16x16.png"' = 'favicon-16x16.png?v=2"'
    'favicon-32x32.png"' = 'favicon-32x32.png?v=2"'
    'android-chrome-192x192.png"' = 'android-chrome-192x192.png?v=2"'
    'android-chrome-512x512.png"' = 'android-chrome-512x512.png?v=2"'
    'apple-touch-icon.png"' = 'apple-touch-icon.png?v=2"'
    'site.webmanifest"' = 'site.webmanifest?v=2"'
    'favicon.ico"' = 'favicon.ico?v=2"'
}

Write-Output "Updating favicon references in HTML files..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    foreach ($old in $replacements.Keys) {
        $new = $replacements[$old]
        if ($content -match [regex]::Escape($old) -and $content -notmatch [regex]::Escape($new)) {
            $content = $content -replace [regex]::Escape($old), $new
            $modified = $true
        }
    }
    
    if ($modified) {
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [UPDATED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name) - already updated or no favicon refs"
    }
}

Write-Output ""
Write-Output "Favicon cache-busting update complete!"

