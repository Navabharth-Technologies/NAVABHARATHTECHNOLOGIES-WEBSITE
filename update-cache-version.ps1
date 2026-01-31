# PowerShell script to update cache-busting version from v=2 to v=3

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Updating cache-busting version to v=3..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace v=2 with v=3 for all favicon references
    if ($content -match '\?v=2"') {
        $content = $content -replace '\?v=2"', '?v=3"'
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [UPDATED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name)"
    }
}

Write-Output ""
Write-Output "Cache-busting version updated to v=3!"

