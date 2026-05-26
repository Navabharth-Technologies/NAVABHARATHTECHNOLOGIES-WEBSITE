// ===================================
// DIGITAL MARKETING LANDING PAGE
// Interactive JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide Icons with a small delay and fallback
    function initIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    setTimeout(initIcons, 100);
    window.addEventListener('load', initIcons);

    // ===================================
    // PHONE INPUT VALIDATION
    // ===================================
    const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            this.value = this.value.replace(/\D/g, '');
        });
    });

    // ===================================
    // NAVIGATION
    // ===================================
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    let lastScrollTop = 0;
    let scrollThreshold = 5;

    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;
        if (navbar) {
            // Add 'scrolled' class when page is scrolled down
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Smart Scroll Logic: Hide on Scroll Down, Show on Scroll Up
            if (Math.abs(currentScroll - lastScrollTop) > scrollThreshold) {
                if (currentScroll > lastScrollTop && currentScroll > 100) {
                    // Scrolling Down -> Hide Navbar
                    navbar.classList.add('navbar-hidden');
                } else {
                    // Scrolling Up -> Show Navbar
                    navbar.classList.remove('navbar-hidden');
                }
                lastScrollTop = currentScroll;
            }
        }
    });

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // ===================================
    // ANIMATED COUNTERS
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let counterAnimated = false;
    const animateCounters = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterAnimated) {
                counterAnimated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 120;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + (stat.textContent.includes('%') ? '' : '+');
                        }
                    };
                    updateCounter();
                });
                animateCounters.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const statsSection = document.querySelector('.stats');
    if (statsSection) animateCounters.observe(statsSection);

    // ===================================
    // GRAVITY TAGS ANIMATION (Matter.js)
    // ===================================
    const gravityContainer = document.getElementById('gravity-container');

    function initGravityTags() {
        if (!gravityContainer || gravityContainer.dataset.initialized) return;
        if (typeof Matter === 'undefined') {
            setTimeout(initGravityTags, 500);
            return;
        }
        gravityContainer.dataset.initialized = 'true';
        const Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner,
            Bodies = Matter.Bodies, Composite = Matter.Composite, Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        const world = engine.world;
        gravityContainer.innerHTML = '';
        let width = gravityContainer.clientWidth || window.innerWidth;
        let height = gravityContainer.clientHeight || 400;

        const render = Render.create({
            element: gravityContainer,
            engine: engine,
            options: {
                width: width, height: height,
                background: 'transparent', wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });

        const tags = [
            { text: '#Strategy', color: '#fce7f3', textColor: '#be185d' },
            { text: '#Marketing', color: '#fbcfe8', textColor: '#9d174d' },
            { text: '#Development', color: '#bfdbfe', textColor: '#1e40af' },
            { text: '#Design', color: '#ffedd5', textColor: '#c2410c' },
            { text: '#SEO', color: '#e9d5ff', textColor: '#6b21a8' },
            { text: '#Content', color: '#ddd6fe', textColor: '#5b21b6' },
            { text: '#Social', color: '#fda4af', textColor: '#9f1239' },
            { text: '#PPC', color: '#cbd5e1', textColor: '#334155' },
            { text: '#Growth', color: '#fff1f2', textColor: '#9f1239' },
            { text: '#Analytics', color: '#e0f2fe', textColor: '#075985' },
            { text: '#Sales', color: '#dcfce7', textColor: '#166534' },
            { text: '#Conversion', color: '#f3e8ff', textColor: '#6b21a8' },
            { text: '#Traffic', color: '#ccfbf1', textColor: '#115e59' },
            { text: '#Branding', color: '#fae8ff', textColor: '#86198f' },
            { text: '#Creative', color: '#ffedd5', textColor: '#c2410c' }
        ];

        const isMobile = window.innerWidth <= 768;
        const baseWidth = isMobile ? 80 : 120;
        const baseHeight = isMobile ? 32 : 44;
        const fontSize = isMobile ? '12px' : '16px';

        function createPillTexture(text, bgColor, textColor, width, height) {
            const canvas = document.createElement('canvas');
            canvas.width = width * 2; canvas.height = height * 2;
            const ctx = canvas.getContext('2d');
            ctx.scale(2, 2);
            ctx.beginPath(); ctx.roundRect(0, 0, width, height, height / 2);
            ctx.fillStyle = bgColor; ctx.fill();
            ctx.fillStyle = textColor; ctx.font = `bold ${fontSize} Inter, sans-serif`;
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(text, width / 2, height / 2);
            return canvas.toDataURL();
        }

        const walls = [
            Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(-30, height / 2, 60, height * 2, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(width + 30, height / 2, 60, height * 2, { isStatic: true, render: { visible: false } })
        ];
        Composite.add(world, walls);

        tags.forEach(tag => {
            const bodyWidth = baseWidth + (tag.text.length * (isMobile ? 3 : 5));
            const bodyHeight = baseHeight;
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 50;
            const texture = createPillTexture(tag.text, tag.color, tag.textColor, bodyWidth, bodyHeight);
            const body = Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
                chamfer: { radius: bodyHeight / 2 }, restitution: 0.5,
                render: { sprite: { texture: texture, xScale: 0.5, yScale: 0.5 } }
            });
            Composite.add(world, body);
        });

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse, constraint: { stiffness: 0.2, render: { visible: false } }
        });

        // Allow page scrolling over the canvas by removing wheel listeners
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        Composite.add(world, mouseConstraint);
        render.mouse = mouse;
        Render.run(render);
        Runner.run(Runner.create(), engine);

        window.addEventListener('resize', () => {
            if (!gravityContainer) return;
            width = gravityContainer.clientWidth;
            height = gravityContainer.clientHeight;
            render.canvas.width = width; render.canvas.height = height;
            Matter.Body.setPosition(walls[0], { x: width / 2, y: height + 30 });
            Matter.Body.setPosition(walls[2], { x: width + 30, y: height / 2 });
        });
    }

    const gravityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initGravityTags();
                gravityObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    if (gravityContainer) gravityObserver.observe(gravityContainer);
    window.addEventListener('load', initGravityTags);

    // ===================================
    // AUDIT & CONTACT FORM HANDLING
    // ===================================
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyRWfG770hV_r9-5taZ4ZCQhKxdqY43IHW7OXuClVG7YIDeRg3EDBPAjY_l3UqK4PpvUA/exec';
    const thankYouModal = document.getElementById('thankYouModal');
    const closeBtn = document.getElementById('closeModalBtn');

    function triggerSuccessSequence() {
        if (!thankYouModal) return;
        thankYouModal.style.display = 'flex';
        setTimeout(() => {
            const card = thankYouModal.querySelector('.unique-modal-card');
            if (!card) return;
            card.classList.add('shattering');
            const rect = card.getBoundingClientRect();
            const shardContainer = document.createElement('div');
            shardContainer.className = 'shatter-container';
            thankYouModal.appendChild(shardContainer);
            for (let i = 0; i < 25; i++) {
                const shard = document.createElement('div');
                shard.className = 'glass-shard';
                const size = Math.random() * 80 + 40;
                shard.style.width = size + 'px'; shard.style.height = size + 'px';
                shard.style.left = (rect.left + Math.random() * rect.width - size / 2) + 'px';
                shard.style.top = (rect.top + Math.random() * rect.height - size / 2) + 'px';
                shard.style.clipPath = `polygon(${Math.random() * 100}% 0%, 100% ${Math.random() * 100}%, ${Math.random() * 100}% 100%)`;
                shardContainer.appendChild(shard);
                requestAnimationFrame(() => {
                    shard.style.transform = `translate(${(Math.random() - 0.5) * 1200}px, ${(Math.random() - 0.5) * 1200 + 500}px) rotate(${(Math.random() - 0.5) * 720}deg)`;
                    shard.style.opacity = '0';
                });
            }
            setTimeout(() => {
                thankYouModal.style.opacity = '0';
                thankYouModal.style.transition = 'opacity 0.5s ease';
                setTimeout(() => { window.location.href = 'index.html'; }, 500);
            }, 1200);
        }, 3000);
    }

    [document.getElementById('auditForm'), document.getElementById('contactForm')].forEach(form => {
        if (form) {
            form.addEventListener('submit', e => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.disabled = true; btn.innerHTML = "Processing...";
                fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
                    .then(() => {
                        triggerSuccessSequence();
                        btn.disabled = false; btn.innerHTML = originalText;
                        form.reset();
                    })
                    .catch(error => {
                        console.error('Error!', error.message);
                        btn.disabled = false; btn.innerHTML = originalText;
                    });
            });
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', () => { if (thankYouModal) thankYouModal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target === thankYouModal) thankYouModal.style.display = 'none'; });

    // ===================================
    // INTERACTIVE NEURAL AURA (CANVAS)
    // ===================================
    const canvas = document.getElementById('interactive-hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 200 };
        window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1; this.density = (Math.random() * 30) + 1;
                this.velocityX = (Math.random() * 2) - 1; this.velocityY = (Math.random() * 2) - 1;
            }
            update() {
                this.x += this.velocityX; this.y += this.velocityY;
                if (this.x > canvas.width || this.x < 0) this.velocityX *= -1;
                if (this.y > canvas.height || this.y < 0) this.velocityY *= -1;
                let dx = mouse.x - this.x; let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x += (dx / distance) * force * this.density; this.y += (dy / distance) * force * this.density;
                }
            }
            draw() { ctx.fillStyle = '#8B9EFF'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
        }

        function init() {
            particles = []; canvas.width = window.innerWidth; canvas.height = window.innerHeight;
            for (let i = 0; i < 100; i++) particles.push(new Particle());
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x; let dy = particles[a].y - particles[b].y;
                    let dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.strokeStyle = `rgba(139, 158, 255, ${(1 - dist / 150) * 0.3})`;
                        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        init(); animate(); window.addEventListener('resize', init);
    }

    // ===================================
    // UNIQUE FLUID CURSOR LOGIC
    // ===================================
    const customCursor = document.querySelector('.custom-cursor');
    const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 800;
    let mX = 0, mY = 0, cX = 0, cY = 0;
    window.addEventListener('mousemove', e => { mX = e.clientX; mY = e.clientY; });
    function animateCursor() {
        cX += (mX - cX) * 0.15; cY += (mY - cY) * 0.15;
        if (customCursor) { customCursor.style.left = cX + 'px'; customCursor.style.top = cY + 'px'; }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    window.addEventListener('scroll', () => {
        if (customCursor) {
            if (window.scrollY > (heroHeight - 100)) customCursor.classList.add('active');
            else customCursor.classList.remove('active');
        }
    });
    document.querySelectorAll('a, button, .service-card-wrapper, .industry-card').forEach(el => {
        el.addEventListener('mouseenter', () => customCursor && customCursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => customCursor && customCursor.classList.remove('hover'));
    });

    // ===================================
    // INTERACTION ENGINE
    // ===================================
    const magElements = document.querySelectorAll('.btn, .social-link');
    window.addEventListener('mousemove', e => {
        magElements.forEach(el => {
            const r = el.getBoundingClientRect();
            const cX = r.left + r.width / 2, cY = r.top + r.height / 2;
            const dx = e.clientX - cX, dy = e.clientY - cY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const f = (120 - dist) / 120;
                el.style.transform = `translate(${dx * f * 0.4}px, ${dy * f * 0.4}px)`;
            } else el.style.transform = `translate(0, 0)`;
        });
    });

    document.querySelectorAll('.hero-form, .service-card-wrapper, .industry-card').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            const rotateX = (r.height / 2 - y) / 15, rotateY = (x - r.width / 2) / 15;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        el.addEventListener('mouseleave', () => el.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`);
    });

    const shockContainer = document.getElementById('shockwave-container');
    window.addEventListener('mousedown', e => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple'; ripple.style.left = e.clientX + 'px'; ripple.style.top = e.clientY + 'px';
        if (shockContainer) {
            shockContainer.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
        }
    });

    // ===================================
    // LOCALIZED SNOW EFFECT
    // ===================================
    function initLocalizedSnow(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];

        class Snowflake {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speed = Math.random() * 1.5 + 0.5;
                this.velX = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.4 + 0.1;
            }
            update() {
                this.y += this.speed;
                this.x += this.velX + Math.sin(this.y / 60) * 0.3;
                if (this.y > canvas.height) { this.reset(); this.y = -10; }
                if (this.x > canvas.width) this.x = 0; if (this.x < 0) this.x = canvas.width;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
            }
        }

        function init() {
            particles = [];
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            for (let i = 0; i < 150; i++) {
                let p = new Snowflake();
                p.y = Math.random() * canvas.height;
                particles.push(p);
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        init(); animate();
        window.addEventListener('resize', init);
    }
    initLocalizedSnow('industries-snow-canvas');

    console.log('%c🚀 Digital Marketing Landing Page | Navabharath Technologies', 'font-size: 16px; font-weight: bold; color: #667eea;');
});

// ===================================
// URL CLEANER SYSTEM (Backend & Frontend Sync)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.protocol !== 'file:') {
        // 1. Clean Address Bar
        const currentPath = window.location.pathname;
        if (currentPath.endsWith('.html')) {
            let newPath = currentPath.slice(0, -5);
            if (newPath.endsWith('/index')) newPath = newPath.slice(0, -6) || '/';
            window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
        }
        // 2. Clean Links
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('.html') && !href.startsWith('http') && !href.startsWith('//')) {
                let newHref = href === 'index.html' ? '/' : href.replace('.html', '');
                if (href.startsWith('index.html#')) newHref = '/' + href.substring(10);
                link.setAttribute('href', newHref);
            }
        });
    }
});

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

/* ==========================================
   COOKIE CONSENT BANNER
   ========================================== */
/* ==========================================
   COOKIE CONSENT BANNER (DISABLED)
   ========================================== */
// (function () {
//     // Banner removed as per requirement: Show only on Home Page.
// })();
