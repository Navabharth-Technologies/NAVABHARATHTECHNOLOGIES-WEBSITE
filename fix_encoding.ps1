# PowerShell script to fix script.js encoding
# This reads the file and re-saves it with UTF-8 encoding (no BOM)

$scriptPath = "c:\Users\NBT\Desktop\NBT Website\script.js"
$backupPath = "c:\Users\NBT\Desktop\NBT Website\script.js.backup"

Write-Host "Creating backup of script.js..."
Copy-Item -Path $scriptPath -Destination $backupPath -Force

Write-Host "Reading script.js content..."
# Read the file content with UTF-8 encoding
$content = Get-Content -Path $scriptPath -Raw -Encoding UTF8

Write-Host "Re-saving script.js with UTF-8 encoding (no BOM)..."
# Create UTF-8 encoding without BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

# Write the content back with proper UTF-8 encoding
[System.IO.File]::WriteAllText($scriptPath, $content, $utf8NoBom)

Write-Host "Done! script.js has been re-saved with UTF-8 encoding."
Write-Host "Backup saved as: $backupPath"
Write-Host ""
Write-Host "Please test the Kannada language in your browser now."
