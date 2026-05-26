import subprocess
import sys
import os

# Ensure Pillow is installed
try:
    import PIL
    print('Pillow already installed')
except Exception:
    print('Pillow not found, installing...')
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--user', 'Pillow'])

# Run the main script
script = os.path.join(os.path.dirname(__file__), 'make_favicon.py')
if not os.path.exists(script):
    print('make_favicon.py not found')
    sys.exit(1)

print('Running make_favicon.py')
ret = subprocess.call([sys.executable, script])
if ret != 0:
    print('make_favicon.py failed with code', ret)
    sys.exit(ret)
print('Done')
