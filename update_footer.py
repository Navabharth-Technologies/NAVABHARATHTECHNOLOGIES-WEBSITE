import os
import re

dir_path = r'd:\NAVABHARATHTECHNOLOGIES-WEBSITE-main\NAVABHARATHTECHNOLOGIES-WEBSITE-main'

updated_count = 0
for filename in os.listdir(dir_path):
    if filename.endswith('.html'):
        filepath = os.path.join(dir_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            with open(filepath, 'r', encoding='latin-1') as f:
                content = f.read()
            
        original_content = content
        
        # First, remove the previously inserted portfolio links on the same line
        content = re.sub(
            r'(<li><a href="[^"]*#services"[^>]*>Services</a></li>)[ \t]*<li><a href="https://portfolio\.navabharathtechnologies\.com"[^>]*>Portfolio</a></li>',
            r'\1',
            content
        )
        
        # Then, do a proper replacement with newline and indentation
        # Match newline, then indentation, then the Services link
        new_content = re.sub(
            r'(\r?\n)([ \t]*)(<li><a href="[^"]*#services"[^>]*>Services</a></li>)',
            r'\1\2\3\1\2<li><a href="https://portfolio.navabharathtechnologies.com" target="_blank">Portfolio</a></li>',
            content
        )
        
        if original_content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
            updated_count += 1

print(f"Total updated: {updated_count}")
