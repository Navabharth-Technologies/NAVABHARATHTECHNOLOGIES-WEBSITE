import json

# Data extracted from existing blog files
articles = [
  {
    "file": "blog-cloud-innovation.html",
    "title": "Cloud Computing: The Backbone of Modern Innovation",
    "desc": "Discover how cloud computing is driving digital transformation, enhancing agility, and enabling businesses to innovate faster than ever before.",
    "img": "assets/Cloud%20Computing.png",
    "cat": "Cloud & Infra",
    "date": "April 08, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-testing-approaches.html",
    "title": "Modern Software Testing: A Guide to Different Approaches",
    "desc": "Understand the differences between manual testing vs automation testing to choose the right strategy.",
    "img": "assets/testing%2011.png",
    "cat": "Software Dev",
    "date": "Feb 21, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-erp-crm-roi.html",
    "title": "Custom ERP and CRM Development ROI: A Guide for Business Owners",
    "desc": "Investing in custom ERP and CRM development can reduce operational waste, improve sales visibility, and unify data.",
    "img": "assets/roi.png",
    "cat": "Business",
    "date": "Feb 15, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-cloud-security.html",
    "title": "Cloud Security Challenges and How to Overcome Them",
    "desc": "Learn how to protect your digital infrastructure from evolving threats with proactive, layered defense strategies.",
    "img": "assets/quantum-leap-hero-v2.jpg",
    "cat": "Cybersecurity",
    "date": "Jan 29, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-web-development.html",
    "title": "The Future of Web Development: Trends to Watch in 2024",
    "desc": "Learn how fast-loading pages impact SEO performance, user experience, and conversion rates.",
    "img": "assets/page-speed-optimization.png",
    "cat": "Software Dev",
    "date": "Jan 07, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-freshers-job.html",
    "title": "10 Proven Techniques for Freshers to Get Their First Job Faster",
    "desc": "Discover 10 proven techniques and the exclusive 7-7-7 Fresher Hiring Formula to help you land your first job faster.",
    "img": "assets/fresher-career-guide.png",
    "cat": "Careers",
    "date": "Jan 03, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "file": "blog-chatbots.html",
    "title": "How Chatbots are Changing the Face of Customer Support",
    "desc": "Explore how automation handles quick responses while human agents provide the emotional intelligence needed for complex support.",
    "img": "assets/chatbot-strengths.png",
    "cat": "AI & Automation",
    "date": "Dec 15, 2025",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "type": "video",
    "file": "https://www.youtube.com/watch?v=6gRxsBuT9lc",
    "title": "Digital Marketing: Smarter Solutions for Better Future",
    "desc": "Explore how Navabharath Technologies is driving the future of digital marketing with smarter solutions.",
    "img": "https://i.ytimg.com/vi/6gRxsBuT9lc/maxresdefault.jpg",
    "cat": "Digital Marketing",
    "date": "March 20, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "type": "video",
    "file": "https://www.youtube.com/watch?v=lR3TbtfoL18",
    "title": "Celebrating Our CEO's Birthday | 2026",
    "desc": "A glimpse into the culture and celebrations at Navabharath Technologies.",
    "img": "https://i.ytimg.com/vi/lR3TbtfoL18/maxresdefault.jpg",
    "cat": "Culture",
    "date": "Jan 15, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  },
  {
    "type": "video",
    "file": "https://www.youtube.com/shorts/XaV4Qzz5qZs",
    "title": "Fix Slow Coding with VS Code 🔥",
    "desc": "Quick tech tips: How to speed up your development workflow using VS Code features.",
    "img": "https://i.ytimg.com/vi/XaV4Qzz5qZs/hqdefault.jpg",
    "cat": "Software Dev",
    "date": "April 10, 2026",
    "author": "TT",
    "author_name": "Tech Team"
  }
]

html_template = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resources — Navabharath Technologies</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="resources.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="icon" href="favicon.ico">
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- Header / Navbar -->
<header>
    <div class="container header-container">
        <div class="logo">
            <a href="index.html">
                <img src="assets/header-logo.png" alt="Navabharath Technologies" width="180" height="70"
                    loading="eager" fetchpriority="high">
            </a>
        </div>
        <div class="nav-menu" id="navMenu">
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html" data-translate="nav_home">Home</a></li>
                    <li><a href="index.html#about" data-translate="nav_about">About</a></li>
                    <li><a href="index.html#services" data-translate="nav_services">Services</a></li>
                    <li class="has-dropdown">
                        <a href="resources.html" class="active" data-translate="nav_resources">Resources <i
                                class="fas fa-chevron-down dropdown-arrow"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="resources.html#documentation"><i class="fas fa-book"></i> Documentation</a></li>
                            <li><a href="blog.html"><i class="fas fa-rss"></i> Blogs</a></li>
                            <li><a href="resources.html#video-tutorials"><i class="fas fa-play-circle"></i> Video Tutorials</a></li>
                            <li><a href="resources.html#downloads"><i class="fas fa-download"></i> Downloads</a></li>
                            <li><a href="resources.html#faq"><i class="fas fa-question-circle"></i> FAQ</a></li>
                            <li><a href="resources.html#developer-tools"><i class="fas fa-code"></i> Developer Tools</a></li>
                        </ul>
                    </li>
                    <li><a href="careers.html" data-translate="nav_careers">Careers</a></li>
                    <li><a href="index.html#contact" data-translate="nav_contact" class="btn-contact-cta">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<!-- HERO BANNER -->
<div class="hero-banner">
  <div class="hero-banner-bg"></div>
  <div class="hero-grid-overlay"></div>
  <div class="hero-banner-inner">
    <div class="hero-eyebrow"><div class="hero-eyebrow-dot"></div>Knowledge Hub</div>
    <h1 class="res-hero-title">Resource<span>s</span></h1>
    <p class="res-hero-subtitle">Expert-curated guides, technology trends, business solutions and practical strategies to accelerate your digital growth.</p>
  </div>
  <div class="hero-breadcrumb">
    <a href="index.html">Home</a><span class="sep">/</span><span class="current">Resources</span>
  </div>
</div>

<!-- FILTER BAR -->
<div class="filter-section">
  <div class="filter-inner">
    <div class="filter-tabs">
      <button class="filter-tab active">All Resources</button>
      <button class="filter-tab">Blog Posts</button>
      <button class="filter-tab">Videos</button>
      <button class="filter-tab">Tools</button>
      <button class="filter-tab">News</button>
    </div>
    <div class="filter-right">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search resources...">
      </div>
      <select class="sort-select">
        <option>Latest First</option>
        <option>Most Popular</option>
        <option>Oldest First</option>
      </select>
    </div>
  </div>
</div>

<!-- MAIN CONTENT -->
<div class="page-body">

  <!-- FEATURED -->
  <div class="reveal">
    <div class="featured-label">Featured Article</div>
    <div class="featured-card" onclick="location.href='blog-chatbots.html'">
      <div class="featured-img">
        <img src="assets/chatbot-vs-human-header.png" alt="Cybersecurity 2025">
        <div class="featured-img-overlay"></div>
        <div class="featured-cat-badge">Trending</div>
      </div>
      <div class="featured-content">
        <div class="featured-meta">
          <span class="meta-tag">AI & Automation</span>
          <div class="meta-dot"></div>
          <span class="meta-date">Dec 15, 2025</span>
          <div class="meta-dot"></div>
          <span class="meta-read">8 min read</span>
        </div>
        <h2 class="featured-title">How Chatbots are Changing the Face of Customer Support</h2>
        <p class="featured-desc">Explore the powerful roles of chatbots and human agents in shaping modern customer experiences. Balance automation with emotional intelligence to boost satisfaction.</p>
        <div class="featured-author">
          <div class="author-avatar">TT</div>
          <div>
            <div class="author-name">Tech Team</div>
            <div class="author-role">Navabharath Technologies</div>
          </div>
        </div>
        <button class="btn-read">Read Full Article <span class="arrow">&#8594;</span></button>
      </div>
    </div>
  </div>

  <!-- CATEGORIES -->
  <div class="categories-section reveal">
    <div class="sec-header">
      <div>
        <div class="sec-label">Browse by Category</div>
        <h2 class="sec-title">Explore Topics</h2>
      </div>
    </div>
    <div class="cat-grid">
      <div class="cat-card" id="documentation"><div class="cat-icon">&#128196;</div><div class="cat-name">Documentation</div><div class="cat-count">12 Resources</div></div>
      <div class="cat-card" onclick="location.href='blog.html'"><div class="cat-icon">&#128221;</div><div class="cat-name">Blog Posts</div><div class="cat-count">24 Articles</div></div>
      <div class="cat-card" id="video-tutorials"><div class="cat-icon">&#128249;</div><div class="cat-name">Video Tutorials</div><div class="cat-count">8 Videos</div></div>
      <div class="cat-card" id="downloads"><div class="cat-icon">&#128229;</div><div class="cat-name">Downloads</div><div class="cat-count">15 Files</div></div>
      <div class="cat-card" id="faq"><div class="cat-icon">&#10068;</div><div class="cat-name">FAQ</div><div class="cat-count">20 Q&amp;A</div></div>
      <div class="cat-card" id="developer-tools"><div class="cat-icon">&#128295;</div><div class="cat-name">Developer Tools</div><div class="cat-count">6 Tools</div></div>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats-mini reveal">
    <div class="stats-cell"><div class="stats-num">120<sup>+</sup></div><div class="stats-lbl">Articles Published</div></div>
    <div class="stats-cell"><div class="stats-num">50<sup>K</sup></div><div class="stats-lbl">Monthly Readers</div></div>
    <div class="stats-cell"><div class="stats-num">40<sup>+</sup></div><div class="stats-lbl">Expert Contributors</div></div>
    <div class="stats-cell"><div class="stats-num">6</div><div class="stats-lbl">Resource Categories</div></div>
  </div>

  <!-- LATEST ARTICLES -->
  <div class="reveal">
    <div class="sec-header">
      <div><div class="sec-label">Latest</div><h2 class="sec-title">Recent Articles</h2></div>
      <a href="blog.html" class="view-all">View All Articles &#8594;</a>
    </div>
    <div class="cards-grid">
      {{ARTICLES_GRID}}
    </div>
  </div>

  <!-- FREE TOOLS -->
  <div class="reveal">
    <div class="sec-header">
      <div><div class="sec-label">Free Resources</div><h2 class="sec-title">Tools &amp; Templates</h2></div>
      <a href="#" class="view-all">Browse All Tools &#8594;</a>
    </div>
    <div class="tools-grid">
      <div class="tool-card"><div class="tool-icon">&#129518;</div><div class="tool-content"><div class="tool-name">IT Budget Calculator</div><div class="tool-desc">Estimate your annual technology spend across infrastructure, security, and software with our interactive calculator.</div><span class="tool-tag">FREE TOOL</span></div></div>
      <div class="tool-card"><div class="tool-icon">&#128203;</div><div class="tool-content"><div class="tool-name">Digital Readiness Assessment</div><div class="tool-desc">Score your business digital maturity across 6 dimensions and get a personalized improvement roadmap.</div><span class="tool-tag">FREE ASSESSMENT</span></div></div>
      <div class="tool-card"><div class="tool-icon">&#128193;</div><div class="tool-content"><div class="tool-name">Project Brief Template Pack</div><div class="tool-desc">12 ready-to-use project brief templates for software, marketing, and infrastructure projects — download instantly.</div><span class="tool-tag">FREE DOWNLOAD</span></div></div>
      <div class="tool-card"><div class="tool-icon">&#128269;</div><div class="tool-content"><div class="tool-name">SEO Audit Checklist 2025</div><div class="tool-desc">A comprehensive 80-point checklist covering technical SEO, on-page, off-page, and Core Web Vitals in 2025.</div><span class="tool-tag">FREE CHECKLIST</span></div></div>
    </div>
  </div>

  <!-- NEWSLETTER -->
  <div class="newsletter-strip reveal">
    <div class="nl-text">
      <div class="nl-label">Stay Informed</div>
      <h3 class="nl-title">Get Insights Delivered Weekly</h3>
      <p class="nl-sub">Join 12,000+ professionals who read our newsletter every Thursday.</p>
    </div>
    <div class="nl-form">
      <input class="nl-input" type="email" placeholder="Enter your email address">
      <button class="nl-btn">Subscribe &#8594;</button>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer>
    <div class="container footer-container">
        <div class="footer-logo">
            <img src="assets/footer-logo.png" alt="Navabharath Technologies" loading="lazy">
        </div>
        <div class="footer-links">
            <h4 data-translate="footer_links_title">Company</h4>
            <ul>
                <li><a href="index.html" data-translate="nav_home">Home</a></li>
                <li><a href="index.html#about" data-translate="footer_about">About</a></li>
                <li><a href="index.html#services" data-translate="footer_services">Services</a></li>
                <li><a href="index.html#contact" data-translate="footer_contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4 data-translate="footer_support">Support</h4>
            <ul>
                <li><a href="terms.html" data-translate="footer_terms">Terms & Conditions</a></li>
                <li><a href="privacy.html" data-translate="footer_privacy">Privacy</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4 data-translate="footer_careers">Careers</h4>
            <ul>
                <li><a href="careers.html" data-translate="footer_join_team">Join Our Team</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <h4 data-translate="footer_social_title">Follow Us</h4>
            <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61584661233790"
                    aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i
                        class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/navabharath-technologies/" aria-label="LinkedIn"
                    target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/navabharathtechnologies?igsh=MWh3cmtjM2JrNWtpaw=="
                    aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i
                        class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@NavabharathTechnologies" aria-label="YouTube" target="_blank"
                    rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p data-translate="footer_copyright">&copy; 2026 Navabharath Technologies. All rights reserved.</p>
    </div>
    <button id="scrollTopBtn" class="scroll-top-btn" aria-label="Scroll to Top">
        <i class="fas fa-arrow-up"></i>
    </button>
</footer>

<script src="app.js" defer></script>
<script>
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
  (function animRing(){ rx+=(mx-rx)*0.14; ry+=(my-ry)*0.14; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing); })();
  document.querySelectorAll('a,button,.resource-card,.cat-card,.tool-card,.featured-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%,-50%) scale(2.5)'; ring.style.transform='translate(-50%,-50%) scale(1.5)'; ring.style.borderColor='rgba(42,91,191,0.5)'; });
    el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%,-50%) scale(1)'; ring.style.transform='translate(-50%,-50%) scale(1)'; ring.style.borderColor='rgba(42,91,191,0.35)'; });
  });
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.textContent.trim();
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update section title
      const secTitle = document.querySelector('.sec-title');
      const secLabel = document.querySelector('.sec-label');
      const viewAll = document.querySelector('.view-all');
      
      if (category === 'Videos') {
        secTitle.textContent = 'Recent Videos';
        secLabel.textContent = 'YouTube';
        viewAll.textContent = 'View YouTube Channel →';
        viewAll.href = 'https://www.youtube.com/@NavabharathTechnologies';
        viewAll.target = '_blank';
      } else if (category === 'Blog Posts') {
        secTitle.textContent = 'Recent Articles';
        secLabel.textContent = 'Latest';
        viewAll.textContent = 'View All Articles →';
        viewAll.href = 'blog.html';
        viewAll.target = '_self';
      } else {
        secTitle.textContent = 'Recent Resources';
        secLabel.textContent = 'Explore';
        viewAll.textContent = 'View All Resources →';
        viewAll.href = 'blog.html';
        viewAll.target = '_self';
      }

      const cards = document.querySelectorAll('.resource-card');
      cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardCat = card.getAttribute('data-category');
        
        if (category === 'All Resources') {
          card.style.display = 'flex';
        } else if (category === 'Videos') {
          card.style.display = cardType === 'video' ? 'flex' : 'none';
        } else if (category === 'Blog Posts') {
          card.style.display = cardType === 'article' ? 'flex' : 'none';
        } else {
          // General category filtering
          card.style.display = cardCat === category ? 'flex' : 'none';
        }
      });
    });
  });
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin:'0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 40) header.classList.add('header-scrolled');
    else header.classList.remove('header-scrolled');
  });
</script>
</body>
</html>"""

grid_html = ""
for i, art in enumerate(articles):
    delay = (i % 3) + 1
    badge_class = "badge-blog"
    cat = art['cat']
    if cat == "Cybersecurity": badge_class = "badge-blog"
    elif cat == "Cloud & Infra": badge_class = "badge-guide"
    elif cat == "Business": badge_class = "badge-case"
    elif art.get('type') == "video": badge_class = "badge-video"
    
    is_video = art.get('type') == "video"
    type_attr = "video" if is_video else "article"
    
    play_icon = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50px;height:50px;background:rgba(220,38,38,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:20px;box-shadow:0 0 20px rgba(0,0,0,0.3);z-index:2;"><i class="fas fa-play"></i></div>' if is_video else ''
    
    grid_html += f"""
      <div class="resource-card reveal reveal-delay-{delay}" data-type="{type_attr}" data-category="{cat}" onclick="window.open('{art['file']}', '_blank')">
        <div class="card-img">
          {play_icon}
          <img src="{art['img']}" alt="{art['title']}">
          <div class="card-img-overlay"></div>
          <span class="card-badge {badge_class}">{cat}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-date">{art['date']}</span>
            <div class="card-dot"></div>
            <span class="card-read">{'YouTube' if is_video else '6 min'}</span>
          </div>
          <h3 class="card-title">{art['title']}</h3>
          <p class="card-desc">{art['desc']}</p>
          <div class="card-footer-row">
            <div class="card-author-mini">
              <div class="author-mini-av">{art['author']}</div>
              <span class="author-mini-name">{art['author_name']}</span>
            </div>
            <span class="card-arrow">&#8594;</span>
          </div>
        </div>
      </div>"""

final_html = html_template.replace("{{ARTICLES_GRID}}", grid_html)

with open('resources.html', 'w', encoding='utf-8') as f:
    f.write(final_html)
print('resources.html updated with real articles')
