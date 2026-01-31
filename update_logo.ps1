
$files = Get-ChildItem -Path "c:\Users\NBT\Desktop\NBT Website" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match 'src="assets/logo.png" alt="Navabharath Technologies"') {
        $newContent = $content -replace 'src="assets/logo.png" alt="Navabharath Technologies"', 'src="assets/footer-logo.png" alt="Navabharath Technologies"'
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    } else {
        Write-Host "No match in $($file.Name)"
    }
}
