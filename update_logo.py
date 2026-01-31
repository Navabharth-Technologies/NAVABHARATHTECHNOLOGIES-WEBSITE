
import os

directory = r'c:\Users\NBT\Desktop\NBT Website'
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the logo src
        new_content = content.replace('src="assets/logo.png" alt="Navabharath Technologies"', 'src="assets/footer-logo.png" alt="Navabharath Technologies"')
        
        # Only write if changed
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No match in {filename}")
