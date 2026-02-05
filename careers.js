document.addEventListener('DOMContentLoaded', () => {
    // 1. Job Data (Inlined to avoid CORS issues when opening locally)
    const jobs = [
        {
            "id": "tech-support",
            "title": "Tech Support Engineer",
            "team": "Support",
            "location": "Mysuru, India",
            "type": "Full-time",
            "remote": "On-site",
            "summary": "Provide exceptional technical assistance to our customers and internal teams.",
            "description": "We are looking for a Tech Support Engineer to troubleshoot and resolve technical issues for our clients. You will be the first line of defense in ensuring customer success.",
            "requirements": [
                "2+ years of experience in technical support or similar role",
                "Strong problem-solving and communication skills",
                "Familiarity with help desk software (Zendesk, Freshdesk)",
                "Basic understanding of networking and OS troubleshooting"
            ],
            "niceToHave": [
                "Experience with cloud services (AWS/Azure)",
                "Knowledge of SQL",
                "Certification in IT support (CompTIA A+)"
            ],
            "benefits": [
                "Competitive salary",
                "Shift allowances",
                "Health insurance",
                "Career growth opportunities"
            ]
        },
        {
            "id": "digital-marketing-executive",
            "title": "Digital Marketing Executive",
            "team": "Marketing",
            "location": "Mysuru, India",
            "type": "Full-time",
            "remote": "Hybrid",
            "summary": "Execute data-driven marketing campaigns to boost our online presence.",
            "description": "As a Digital Marketing Executive, you will assist in planning, executing, and optimizing our digital marketing efforts. You will work on social media, email campaigns, and SEO.",
            "requirements": [
                "1-3 years of experience in digital marketing",
                "Experience with social media management tools",
                "Basic SEO and SEM knowledge",
                "Good copywriting skills"
            ],
            "niceToHave": [
                "Google Analytics certification",
                "Experience with Canva or Photoshop",
                "Blog writing experience"
            ],
            "benefits": [
                "Performance incentives",
                "Flexible work environment",
                "Mentorship from senior leads",
                "Annual team retreat"
            ]
        }
    ];

    // Initialize Page
    renderJobs(jobs);
    initFilters(jobs);

    // 2. Render Jobs Function
    function renderJobs(jobsList) {
        const container = document.getElementById('jobs-container');
        container.innerHTML = '';

        if (jobsList.length === 0) {
            document.getElementById('no-jobs-message').classList.remove('hidden');
        } else {
            document.getElementById('no-jobs-message').classList.add('hidden');
        }

        jobsList.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in-up';
            card.innerHTML = `
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <div class="job-meta">
                        <span><i class="fas fa-layer-group"></i> ${job.team}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                        <span><i class="fas fa-clock"></i> ${job.type}</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 3. Initialize Filters
    function initFilters(jobsList) {
        const teamFilter = document.getElementById('team-filter');

        // Extract unique values from existing jobs
        const teams = [...new Set(jobsList.map(job => job.team))];

        // Add placeholder teams that don't have jobs yet
        const allTeams = [...teams, 'Web Developer', 'Software Engineer'];

        // Remove duplicates and sort
        const uniqueTeams = [...new Set(allTeams)].sort();

        // Populate selects
        uniqueTeams.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            teamFilter.appendChild(option);
        });

        // Add event listeners
        const filterJobs = () => {
            const selectedTeam = teamFilter.value;

            const filtered = jobsList.filter(job => {
                const matchTeam = selectedTeam === '' || job.team === selectedTeam;
                return matchTeam;
            });

            renderJobs(filtered);
        };

        teamFilter.addEventListener('change', filterJobs);
    }

    // 4. Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 5. Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    });

    // ============================================
    // 6. Career Application Form Handler
    // ============================================
    const careerForm = document.getElementById('careerApplicationForm');
    const resumeInput = document.getElementById('resume-upload');
    const fileUploadText = document.getElementById('file-upload-text');
    const fileInfo = document.getElementById('file-info');
    const submitBtn = document.getElementById('career-submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitLoader = document.getElementById('submit-loader');
    const successMessage = document.getElementById('career-success-message');
    const errorMessage = document.getElementById('career-error-message');

    // File upload display handler
    if (resumeInput) {
        resumeInput.addEventListener('change', (e) => {
            const file = e.target.files[0];

            if (file) {
                // Validate file size (5MB max)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    showError('File size exceeds 5MB limit. Please choose a smaller file.');
                    resumeInput.value = '';
                    fileInfo.classList.add('hidden');
                    fileUploadText.textContent = 'Upload Resume (PDF, DOC, DOCX)';
                    return;
                }

                // Validate file type
                const allowedTypes = [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ];

                if (!allowedTypes.includes(file.type)) {
                    showError('Invalid file type. Only PDF, DOC, and DOCX files are allowed.');
                    resumeInput.value = '';
                    fileInfo.classList.add('hidden');
                    fileUploadText.textContent = 'Upload Resume (PDF, DOC, DOCX)';
                    return;
                }

                // Display file info
                const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                fileUploadText.textContent = file.name;
                fileInfo.textContent = `${fileSizeMB} MB`;
                fileInfo.classList.remove('hidden');

                // Clear any previous errors
                hideError();
            }
        });
    }

    // Form submission handler
    if (careerForm) {
        careerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Hide previous messages
            hideSuccess();
            hideError();

            // Validate resume file
            const resumeFile = resumeInput.files[0];
            if (!resumeFile) {
                showError('Please upload your resume.');
                return;
            }

            // Validate file size
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (resumeFile.size > maxSize) {
                showError('File size exceeds 5MB limit.');
                return;
            }

            // Show loading state
            setLoadingState(true);

            try {
                // Create FormData object
                const formData = new FormData();
                formData.append('name', document.getElementById('career-name').value.trim());
                formData.append('email', document.getElementById('career-email').value.trim());
                formData.append('phone', document.getElementById('career-phone').value.trim());
                formData.append('jobRole', document.getElementById('career-job-role').value.trim());

                const experience = document.getElementById('career-experience').value.trim();
                if (experience) {
                    formData.append('experience', experience);
                }

                const message = document.getElementById('career-message').value.trim();
                if (message) {
                    formData.append('message', message);
                }

                formData.append('resume', resumeFile);

                // Send to backend
                const response = await fetch('https://company-website-backend-91ia.onrender.com/send-career-email', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Show success message
                    showSuccess();

                    // Reset form
                    careerForm.reset();
                    fileUploadText.textContent = 'Upload Resume (PDF, DOC, DOCX)';
                    fileInfo.classList.add('hidden');

                    // Scroll to success message
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    // Show error message
                    showError(data.message || 'Failed to submit application. Please try again.');
                }
            } catch (error) {
                console.error('Career form submission error:', error);
                showError('Network error. Please check your connection and try again.');
            } finally {
                setLoadingState(false);
            }
        });
    }

    // Helper functions for career form
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            submitLoader.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoader.classList.add('hidden');
        }
    }

    function showSuccess() {
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 10000); // Hide after 10 seconds
    }

    function hideSuccess() {
        successMessage.classList.add('hidden');
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function hideError() {
        errorMessage.classList.add('hidden');
    }
});

