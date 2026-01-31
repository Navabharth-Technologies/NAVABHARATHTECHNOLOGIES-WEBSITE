
$files = Get-ChildItem -Path "c:\Users\NBT\Desktop\NBT Website" -Filter *.html -Recurse

foreach ($file in $files) {
    # Read bytes to check for BOM
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    
    # Check for UTF-8 BOM (EF BB BF)
    if ($bytes.Count -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        Write-Host "Updating $($file.Name) (Removing BOM)"
        
        # Remove first 3 bytes
        $cleanBytes = $bytes[3..($bytes.Length - 1)]
        [System.IO.File]::WriteAllBytes($file.FullName, $cleanBytes)
    } else {
        Write-Host "Skipping $($file.Name) (No BOM found)"
    }
}
