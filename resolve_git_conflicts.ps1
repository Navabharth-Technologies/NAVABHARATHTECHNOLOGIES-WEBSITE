
param(
    [string[]]$Files
)

if ($null -eq $Files -or $Files.Count -eq 0) {
    Write-Host "Searching for conflicted files..."
    $Files = Get-ChildItem -Recurse -File | Where-Object { 
        Select-String -Path $_.FullName -Pattern '<<<<<<< HEAD' -Quiet
    } | Select-Object -ExpandProperty FullName
}

foreach ($file in $Files) {
    Write-Host "Processing $file..."
    $content = Get-Content $file -Raw
    
    # Regex to find conflict blocks
    # Note: Pattern matches:
    # <<<<<<< [^\r\n]* ...? ======= ...? >>>>>>> [^\r\n]*
    # We use non-greedy matching .*?
    
    $pattern = '(?s)(<<<<<<< [^\r\n]*\r?\n).*?(\r?\n=======\r?\n)(.*?)(\r?\n>>>>>>> [^\r\n]*)'
    
    if ($content -match '<<<<<<<') {
        # Perform replacement
        # We replace the whole block with group 3 ($3) which is the content after =======
        
        # We need a loop to handle multiple conflicts in one file
        $newContent = $content
        while ($newContent -match $pattern) {
             $newContent = [Regex]::Replace($newContent, $pattern, '$3')
        }
        
        Set-Content -Path $file -Value $newContent -Encoding UTF8
        Write-Host "Resolved conflicts in $file (Accepted Theirs)"
    } else {
        Write-Host "No conflict markers found in $file"
    }
}

