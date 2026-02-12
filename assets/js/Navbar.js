    let myData =document.getElementById("myData");
    myData.innerHTML=`
                    <div class="top-banner" id="topBanner"></div>                
                    <!-- Navbar -->
                    <nav class="navbar">
                        <div class="nav-container">
                            <div class="nav-brand">
                                <img id="siteLogo" class="logo" src="" alt="SRM Logo">
                            </div>
                            <div class="nav-menu" id="navMenu"></div>
                            <div class="nav-buttons" id="navButtons"></div>
                            <div class="mobile-menu-toggle" id="mobileMenuToggle">
                                <i class="fas fa-bars"></i>
                            </div>
                        </div>
                    </nav>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu">
                        <div class="mobile-menu-header">
                            <div class="nav-brand" style="margin: 10px;">
                                <img  class="logo" src="./assets/images/srm-1920w.webp" alt="SRM Logo">
                            </div>
                            <div class="mobile-menu-close" id="mobileMenuClose">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="mobile-menu-content" id="mobileMenuContent"></div>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu">
                        <div class="mobile-menu-header">
                            <h3>Menu</h3>
                            <div class="mobile-menu-close" id="mobileMenuClose">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="mobile-menu-content" id="mobileMenuContent"></div>
                    </div>`;
    const websiteNavData = {
            siteConfig: {
                title: "SRM Career Centre - Global Skills for Global Placements",
                description: "SRM Institute of Science and Technology Career Centre",
                logo: "./assets/images/srm-1920w.webp",
                contactEmail: "placementsrmtrchy@srmist.edu.in",
                contactPhone: "1800 202 4565",
                helpdeskEmail: "helpdesk@ist.srmtrichy.edu.in"
            },

            topBanner: {
                message: "Admissions open for 2026",
                applyLink: "#",
                secondaryNav: [
                    { label: "Students", url: "#" },
                    { label: "Faculty & Staff", url: "#" },
                    { label: "Examinations", url: "#" },
                    { label: "Parents", url: "#" },
                    { label: "Alumni", url: "#" },
                    { label: "News letter", url: "#" }
                ]
            },

            navigation: {
                mainNav: [
                    { label: "About us", url: "#", hasDropdown: false },
                    { label: "Academics", url: "#", hasDropdown: true },
                    { label: "Research", url: "#", hasDropdown: false },
                    {
                        label: "Campus Life",
                        hasDropdown: true,
                        dropdown: [
                            { label: "Accommodation", url: "index.html" },  
                            { label: "Girls Hostel", url: "girls_hostel.html" },
                            { label: "Boys Hostel", url: "boys_hostel.html" },
                            { label: "International Hostel", url: "international_hostel.html" },
                            { label: "How to Apply", url: "#" },
                            { label: "Dining & Eateries", url: "#" },
                            { label: "Safety & Security", url: "#" },
                            { label: "Contact us", url: "#" }
                        ]
                    },
                    { label: "News & Events", url: "#", hasDropdown: false },
                    { label: "Placement", url: "index.html", hasDropdown: false },
                    { label: "Apply Now", url: "#", hasDropdown: false }
                ],
                rightButtons: [
                    { label: "Fee Payment", url: "#" },
                    { label: "Campus Life", url: "#" }
                ]
            }
        };
        // Build Top Banner
        function buildTopBanner(data) {
            const banner = document.getElementById('topBanner');
            const { message, applyLink, secondaryNav } = data;

            let html = `
                <center class="top-bar">
                    <span>${message} <a href="${applyLink}" class="apply-link">Apply Now</a></span>
                    <div class="secondary-nav-container">
            `;

            secondaryNav.forEach(item => {
                html += `<a href="${item.url}">${item.label}</a>`;
            });

            html += `</div></center>`;
            banner.innerHTML = html;
        }

        // Build Navigation
        function buildNavigation(data) {
            const navMenu = document.getElementById('navMenu');
            const navButtons = document.getElementById('navButtons');
            const mobileMenuContent = document.getElementById('mobileMenuContent');

            // Desktop Navigation
            let navHtml = '';
            data.mainNav.forEach(item => {

                if (item.hasDropdown && item.dropdown) {

                    navHtml += `
                        <div class="nav-dropdown">
                            <a href="${item.url || '#'}" class="nav-link">
                                ${item.label} <i class="fas fa-chevron-down"></i>
                            </a>
                            <div class="dropdown-menu">
                    `;

                    item.dropdown.forEach(sub => {
                        navHtml += `<a href="${sub.url}" class="dropdown-link">${sub.label}</a>`;
                    });

                    navHtml += `
                            </div>
                        </div>
                    `;

                } else {
                    navHtml += `<a href="${item.url}" class="nav-link">${item.label}</a>`;
                }
            });
            navMenu.innerHTML = navHtml;

            // Navigation Buttons
            let buttonsHtml = '';
            data.rightButtons.forEach(btn => {
                buttonsHtml += `<button class="nav-btn">${btn.label}</button>`;
            });
            navButtons.innerHTML = buttonsHtml;

            // Mobile Menu
            let mobileHtml = '';
            data.mainNav.forEach(item => {
                mobileHtml += `<a href="${item.url}" class="mobile-nav-link">${item.label}</a>`;
            });

            mobileHtml += `
                <div class="mobile-contact">
                    <h3>Get in touch</h3>
                    <a href="tel:${websiteNavData.siteConfig.contactPhone}" class="contact-link">${websiteNavData.siteConfig.contactPhone}</a>
                    <a href="mailto:${websiteNavData.siteConfig.helpdeskEmail}" class="contact-link">${websiteNavData.siteConfig.helpdeskEmail}</a>
                </div>
            `;
            mobileMenuContent.innerHTML = mobileHtml;
        }

         // Initialize Mobile Menu
        function initializeMobileMenu() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuClose = document.getElementById('mobileMenuClose');

            if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
                mobileMenuToggle.addEventListener('click', () => {
                    mobileMenu.classList.add('active');
                });

                mobileMenuClose.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });

                document.addEventListener('click', (e) => {
                    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                        mobileMenu.classList.remove('active');
                    }
                });
            }
        }

        // Initialize Additional Features
        function initializeAdditionalFeatures() {
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                } else {
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Set site configuration
            document.getElementById('siteLogo').src = websiteNavData.siteConfig.logo;
            document.title = websiteNavData.siteConfig.title;

            // Build all sections
            buildTopBanner(websiteNavData.topBanner);
            buildNavigation(websiteNavData.navigation);
            initializeMobileMenu()

            console.log('SRM Career Centre - Website loaded successfully!');
        });