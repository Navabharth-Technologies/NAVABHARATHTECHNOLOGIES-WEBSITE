# PowerShell script to add Kannada translation for privacy_title

$filePath = "c:\Users\NBT\Desktop\NBT Website\script.js"

# Read the file
$content = Get-Content -Path $filePath -Encoding UTF8 -Raw

# Find the position to insert the new line
# We need to insert after "// Privacy Policy Page" and before "privacy_sec1_title" in the Kannada section
# The pattern to search for in Kannada section
$pattern = '(\s+// Privacy Policy Page\r?\n)(\s+privacy_sec1_title: "1\. ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ")'

# The replacement with the new line inserted
$replacement = '$1        privacy_title: "ಗೌಪ್ಯತಾ ನೀತಿ",`r`n$2'

# Perform the replacement
$newContent = $content -replace $pattern, $replacement

# Write back to the file
$newContent | Set-Content -Path $filePath -Encoding UTF8 -NoNewline

Write-Host "Successfully added Kannada privacy_title translation"
