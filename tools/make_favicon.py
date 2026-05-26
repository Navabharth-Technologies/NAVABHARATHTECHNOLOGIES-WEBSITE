from PIL import Image
import sys
import os

# Configuration
src = os.path.join('assets', 'logo-full.png')
out = os.path.join('assets', 'favicon.png')
crop_ratio = 0.65  # keep top 65% to remove letters at bottom
size = 512

if not os.path.exists(src):
    print(f"Source not found: {src}")
    sys.exit(1)

print(f"Loading {src}...")
img = Image.open(src).convert('RGBA')
width, height = img.size
crop_h = int(round(height * crop_ratio))
print(f"Original size: {width}x{height}, crop height: {crop_h}")

# Crop top portion
cropped = img.crop((0, 0, width, crop_h))
# Make square canvas
canvas = Image.new('RGBA', (max(cropped.width, cropped.height), max(cropped.width, cropped.height)), (0,0,0,0))
# Center the cropped image on canvas
x = (canvas.width - cropped.width) // 2
y = (canvas.height - cropped.height) // 2
canvas.paste(cropped, (x,y), cropped)

# Resize to desired size
icon = canvas.resize((size, size), Image.LANCZOS)
icon.save(out, format='PNG')
print(f"Saved {out} ({size}x{size})")
