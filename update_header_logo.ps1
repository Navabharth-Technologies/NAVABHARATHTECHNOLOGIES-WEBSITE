
$files = Get-ChildItem -Path "c:\Users\NBT\Desktop\NBT Website" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace standard logo
    # Targeting <a href="index.html" class="logo">...<img src="assets/logo.png" ...
    # We will just replace the src attribute where it matches the old logo in the header context if possible, 
    # but a simple replace on the unique src string is usually safe if that src is only used in the header.
    # However, 'assets/logo.png' might be used elsewhere (footer was already updated to footer-logo.png).
    # Footer used to be 'assets/logo.png' but I changed it to 'assets/footer-logo.png'.
    # So 'assets/logo.png' might now ONLY be in the header (or unused if I missed some).
    

    # Safe replacement for header logo
    # Matches: <div class="logo"> ... <img src="..."
    # We use a regex that looks for the logo container and the image tag within it
    
    if ($content -match '(?s)(<div class="logo">\s*<a[^>]*>\s*<img\s+src=")[^"]*(")') {
        $content = [Regex]::Replace($content, '(?s)(<div class="logo">\s*<a[^>]*>\s*<img\s+src=")[^"]*(")', '${1}assets/header-logo.png${2}')
        Write-Host "Updated $($file.Name) (header logo via class='logo')"
    }
    elseif ($content -match '(?s)(class="logo">\s*<img\s+src=")[^"]*(")') {
         # Fallback for digital-marketing.html style: <a href="..." class="logo"><img src="..."
         $content = [Regex]::Replace($content, '(?s)(class="logo">\s*<img\s+src=")[^"]*(")', '${1}assets/header-logo.png${2}')
         Write-Host "Updated $($file.Name) (header logo via class='logo' on anchor)"
    }


    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
