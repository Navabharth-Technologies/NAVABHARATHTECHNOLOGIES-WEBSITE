document.addEventListener('DOMContentLoaded', async () => {
    const API = 'https://company-website-backend-91ia.onrender.com/api';

    // ── Load jobs from live API ──────────────────────────────────
    let allJobs = [];

    async function loadJobs() {
        const container = document.getElementById('jobs-container');
        container.innerHTML = '<div class="loading-state"><i class="fas fa-spinner fa-spin"></i> Loading roles...</div>';

        try {
            const res  = await fetch(`${API}/jobs`);
            const data = await res.json();
            allJobs = data.jobs || [];
        } catch {
            // Fallback: show hardcoded job if API unreachable
            allJobs = [
                {
                    id:          'dme-01',
                    title:       'Digital Marketing Executive',
                    team:        'Marketing',
                    location:    'Mysore, India',
                    type:        'Full-time',
                    experience:  '1-3 Years',
                    description: 'We are looking for a Digital Marketing Executive to develop, implement, track and optimize our digital marketing campaigns across all digital channels.'
                }
            ];
        }

        renderJobs(allJobs);
        initFilters(allJobs);
    }

    // ── Render Jobs ──────────────────────────────────────────────
    function renderJobs(jobsList) {
        const container = document.getElementById('jobs-container');
        container.innerHTML = '';

        if (jobsList.length === 0) {
            document.getElementById('no-jobs-message').classList.remove('hidden');
            return;
        }

        document.getElementById('no-jobs-message').classList.add('hidden');

        jobsList.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in-up';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <div class="job-meta">
                        <span><i class="fas fa-layer-group"></i> ${job.team}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                        <span><i class="fas fa-clock"></i> ${job.type}</span>
                        <span><i class="fas fa-briefcase"></i> ${job.experience}</span>
                    </div>
                    <p class="job-summary">${job.description}</p>
                    <button class="btn btn-primary" style="margin-top:15px; padding: 8px 20px;">Apply Now</button>
                </div>
            `;

            card.addEventListener('click', () => {
                // Check JWT token (new auth) or legacy loggedInUser (backwards compat)
                const isLoggedIn = localStorage.getItem('accessToken') || localStorage.getItem('loggedInUser');
                if (isLoggedIn) {
                    window.location.href = 'openings.html?jobId=' + job.id;
                } else {
                    localStorage.setItem('intendedJobId', job.id);
                    window.location.href = 'login.html';
                }
            });

            container.appendChild(card);
        });
    }

    // ── Filters ──────────────────────────────────────────────────
    function initFilters(jobsList) {
        const teamFilter = document.getElementById('team-filter');

        // Clear existing options except the first placeholder
        while (teamFilter.options.length > 1) teamFilter.remove(1);

        // Build unique team list from live API data only
        const teams = [...new Set(jobsList.map(job => job.team))].sort();
        teams.forEach(team => {
            const option = document.createElement('option');
            option.value       = team;
            option.textContent = team;
            teamFilter.appendChild(option);
        });

        teamFilter.addEventListener('change', () => {
            const selected = teamFilter.value;
            const filtered = selected
                ? allJobs.filter(job => job.team === selected)
                : allJobs;
            renderJobs(filtered);
        });
    }

    // ── Accordion ────────────────────────────────────────────────
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item     = header.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // ── Scroll Animations ────────────────────────────────────────
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    });

    // ── Init ─────────────────────────────────────────────────────
    await loadJobs();
});
