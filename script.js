 const menuToggle = document.querySelector('.menu-toggle');
        const pageContainer = document.querySelector('.page-container');
        const allLinks = document.querySelectorAll('.nav-link, .project-card');
        const sidebarLinks = document.querySelectorAll('.nav-link');
        const projectFrame = document.getElementById('project-frame');
        const homeSection = document.querySelector('.home-section');

        // Logic for sidebar toggle
        menuToggle.addEventListener('click', () => {
            pageContainer.classList.toggle('sidebar-hidden');
            menuToggle.classList.toggle('is-active');
        });

        // Function to set the active link
        const setActiveLink = (targetUrl) => {
            sidebarLinks.forEach(link => {
                if (link.getAttribute('href') === targetUrl) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };
        // Function to open a page/project
        const openPage = (url) => {
             if (url === '#home') {
                homeSection.style.display = 'block';
                projectFrame.style.display = 'none';
                projectFrame.src = '';
            } else {
                homeSection.style.display = 'none';
                projectFrame.style.display = 'block';
                projectFrame.src = url;
            }
            setActiveLink(url);
        };

        // Add click listeners to all sidebar links and project cards
        allLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetUrl = link.getAttribute('href');
                openPage(targetUrl);
            });
        });