# PowerShell script to ensure favicon.ico is the FIRST favicon reference in all HTML files

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Reordering favicon references to put favicon.ico first..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Pattern to find the favicon section
    if ($content -match '<!-- Favicons[^>]*-->') {
        # Remove any existing favicon.ico references
        $content = $content -replace '\s*<link rel="(shortcut )?icon" href="/?favicon\.ico"[^>]*>\r?\n?', ''
        
        # Find the favicon comment and add .ico references right after it
        $faviconComment = '<!-- Favicons - Optimized for Search Engines -->'
        $replacement = @"
<!-- Favicons - Optimized for Search Engines -->
    <!-- favicon.ico for Google Search compatibility -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="shortcut icon" href="/favicon.ico">
"@
        
        $content = $content -replace [regex]::Escape($faviconComment), $replacement
        $modified = $true
    }
    
    if ($modified) {
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [UPDATED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name)"
    }
}

Write-Output ""
Write-Output "Favicon.ico is now the FIRST reference in all HTML files!"

