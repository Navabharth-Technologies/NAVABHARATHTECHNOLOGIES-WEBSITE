# PowerShell script to update cache-busting version from v=3 to v=4

$files = Get-ChildItem -Path "." -Filter "*.html" -File

Write-Output "Updating cache-busting version to v=4..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace v=3 with v=4 for all favicon references
    if ($content -match '\?v=3"') {
        $content = $content -replace '\?v=3"', '?v=4"'
        $content | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Output "  [UPDATED] $($file.Name)"
    } else {
        Write-Output "  [SKIP] $($file.Name)"
    }
}

Write-Output ""
Write-Output "Cache-busting version updated to v=4!"

