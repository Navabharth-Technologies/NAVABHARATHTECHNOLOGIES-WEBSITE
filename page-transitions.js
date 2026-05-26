// ========================================
// Smooth Page Transitions
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Get all internal links
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        // Only apply to internal navigation links (not hash links or external links)
        const href = link.getAttribute('href');

        // Skip hash links, external links, and mailto/tel links
        if (!href ||
            href.startsWith('#') ||
            href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            link.target === '_blank') {
            return;
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = href;

            // Add fade-out class
            document.body.classList.add('page-exit');

            // Navigate after animation completes
            setTimeout(() => {
                window.location.href = destination;
            }, 300); // Match the fadeOut animation duration
        });
    });
});
