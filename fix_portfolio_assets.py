import os
import re

src_dir = r'd:\NAVABHARATHTECHNOLOGIES-WEBSITE-main\NAVABHARATHTECHNOLOGIES-WEBSITE-main\navabharath-portfolio\navabharath-portfolio\src'

def replace_assets(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # Do not double-prefix
    replacements = {
        '"/logo-wbg.png"': '"/navabharath-portfolio/logo-wbg.png"',
        '"/brand-cinematic-impact.mp4"': '"/navabharath-portfolio/brand-cinematic-impact.mp4"',
        '"/clients/': '"/navabharath-portfolio/clients/',
        '"/hero-bg.png"': '"/navabharath-portfolio/hero-bg.png"'
    }

    for old, new in replacements.items():
        # Only replace if it hasn't been prefixed already
        if new not in content:
            content = content.replace(old, new)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            replace_assets(os.path.join(root, file))

print("Asset paths updated successfully.")
