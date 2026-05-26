import glob, re, os

blogs = []
for f in glob.glob('blog-*.html'):
    try:
        content = open(f, 'r', encoding='utf-8').read()
        title = re.search(r'<title>(.*?)</title>', content)
        desc = re.search(r'<meta name="description" content="(.*?)"', content)
        h1 = re.search(r'<h1 class="blog-post-main-title">(.*?)</h1>', content)
        # Find the first image in the main content or assets
        img = re.search(r'class="blog-featured-image".*?src="(.*?)"', content, re.DOTALL)
        if not img:
            img = re.search(r'src="(assets/blog-.*?)"', content)
        
        blogs.append({
            "file": f,
            "title": h1.group(1).strip() if h1 else (title.group(1).strip() if title else "N/A"),
            "desc": desc.group(1).strip() if desc else "N/A",
            "img": img.group(1).strip() if img else "assets/hero-main-v1.webp"
        })
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("ARTICLES_JSON_START")
import json
print(json.dumps(blogs, indent=2))
print("ARTICLES_JSON_END")
