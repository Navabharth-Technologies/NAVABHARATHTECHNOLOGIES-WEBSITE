import sys

# Read the file
with open(r'c:\Users\NBT\Desktop\NBT Website\script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line with "// Privacy Policy Page" in Kannada section (around line 1300)
# and insert privacy_title before privacy_sec1_title

# Line 1301 should be privacy_sec1_title, we need to insert before it
insert_line = 1301  # This is 1-indexed, so we need to insert at index 1300 (0-indexed)

# The line to insert
new_line = '        privacy_title: "ಗೌಪ್ಯತಾ ನೀತಿ",\n'

# Insert the line
lines.insert(insert_line, new_line)

# Write back to the file
with open(r'c:\Users\NBT\Desktop\NBT Website\script.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully added Kannada privacy_title translation")
