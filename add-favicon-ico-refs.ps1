# PowerShell script to add favicon.ico reference to all HTML files

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Adding favicon.ico reference to HTML files..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Check if favicon.ico is already referenced
    if ($content -notmatch 'favicon\.ico') {
        # Find the favicon section and add .ico reference
        if ($content -match '<!-- Favicons') {
            $replacement = @"
<!-- Favicons - Optimized for Search Engines -->
    <!-- favicon.ico for Google Search compatibility -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="shortcut icon" href="/favicon.ico">

    <link rel="icon"
"@
            $content = $content -replace '<!-- Favicons[^>]*-->\s*<link rel="icon"', $replacement
            $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
            Write-Output "  [UPDATED] $($file.Name)"
        } else {
            Write-Output "  [SKIP] $($file.Name) - no favicon section found"
        }
    } else {
        Write-Output "  [SKIP] $($file.Name) - already has favicon.ico"
    }
}

Write-Output ""
Write-Output "Favicon.ico references added!"

