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
        
        # Replace the portfolio link
        new_content = content.replace(
            'href="https://portfolio.navabharathtechnologies.com"',
            'href="navabharath-portfolio"'
        )
        # Also remove target="_blank" if it's there for the portfolio link
        new_content = new_content.replace(
            'href="navabharath-portfolio" target="_blank"',
            'href="navabharath-portfolio"'
        )
        
        if original_content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
            updated_count += 1

print(f"Total updated: {updated_count}")
