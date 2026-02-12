 const websiteData = {
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
                    { label: "Campus Life", url: "#", hasDropdown: false },
                    { label: "News & Events", url: "#", hasDropdown: false },
                    { label: "Placement", url: "#", hasDropdown: false },
                    { label: "Apply Now", url: "#", hasDropdown: false }
                ],
                rightButtons: [
                    { label: "Fee Payment", url: "#" },
                    { label: "Campus Life", url: "#" }
                ]
            },

            gateway: {
                title: "All about Student accommodation & facilities",
                description: [
                    "We, at SRM Institute of Science and Technology (formerly known as SRM University), provide a wide choice in selecting the type or rooms in a hostel to suit every budget, with an aim of providing a decent stay and the best possible learning environment.<br>The quality of life is one of the most important factors considered by the students deciding to stay in the College/University hostels. By quality, it is not just the rooms but also the overall environment of the University campus. Ours is one of the greenest Campuses’ in the country with all the facilities that are expected from global Universities. The stay at our campus provides a wealth of experience by developing qualities such as camaraderie and social responsibility. Our students comprise a cosmopolitan mix from all parts of India as well as many countries across the globe. <br>The students staying at SRM hostels are provided with healthy and sumptuous food options at highly subsidized rates. They can choose to have North Indian or South Indian menu in the dining halls that are co-located. For the benefit of our international students, the hostels also offer a multi-cuisine dining facility providing Thai, Chinese and continental food.<br>Life on campus helps the students not only to study but also to socialize with the peers. Friendships formed on the campus last a lifetime. SRM provides a comfortable and safe housing to all its students. The students housed in the campus are encouraged to use the gymnasium, playground, and all indoor gaming facilities."
                ],
                
            },

            directorMessage: {
                title: "Director's Message",
                director: {
                    name: "Name",
                    position: "Designation",
                    image: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
                    phone: "9876543210"
                },
                message: [
                    "As per our Founder Chancellor’s wish, the mission of our directorate  is to provide a safe, supportive, and comfortable living environment that fosters academic success and personal growth of every SRMISTian.<br>We encourage you to take care of the hostel facilities and report any concerns or needs for improvements.  Should you have any personal, academic, or social concerns, our hostel staff, including Wardens and support personnel, are always available to assist.<br>We also encourage students to participate in the various cultural, recreational, and educational activities hosted by the Directorate throughout the year.<br>“A hostel is not a place: It is a state of mind- open, adventurous and full of possibilities”"
                ],
                quickLinks: [
                        { label: "Meet Our Staff", url: "./staff.html", newTab:false},
                        { label: "Hostel Rules", url: "./assets/pdf/rules.pdf",newTab:true},
                ]
            },
            whyChooseSRM: {
                title: "Why Choose SRM?",
                reasons: [
                    { icon: "fa-check-circle", text: "Centralized placement team with dedicated coordinators", column: 1 },
                    { icon: "fa-check-circle", text: "Strong alumni network across Fortune 500 companies", column: 1 },
                    { icon: "fa-check-circle", text: "Proven track record of successful placements", column: 1 },
                    { icon: "fa-check-circle", text: "Personalized mentoring and career guidance", column: 1 }
                ]
            },

            testimonials: {
                items: [
                    {
                        id: 1,
                        name: "Kushagra Singh",
                        degree: "B. Tech - CSE",
                        company: "Senior consultant in Microsoft Analyst in Infilure",
                        text: "SRM has helped me in amplify my skills in various directions. The ambient culture of SRM helped me become well of various student learns and startups which eventually helped me to become a good team player."
                    },
                    {
                        id: 2,
                        name: "Priya Sharma",
                        degree: "B. Tech - ECE",
                        company: "Software Engineer at Google",
                        text: "The placement cell at SRM provided excellent training and preparation for interviews. The faculty's constant support and industry exposure through workshops helped me secure my dream job."
                    },
                    {
                        id: 3,
                        name: "Rahul Verma",
                        degree: "MBA",
                        company: "Business Analyst at Deloitte",
                        text: "SRM Institute has been instrumental in shaping my career. The comprehensive curriculum, combined with practical exposure through internships and live projects, prepared me well for the corporate world."
                    },
                    {
                        id: 4,
                        name: "Anjali Reddy",
                        degree: "B. Tech - IT",
                        company: "Data Scientist at Amazon",
                        text: "The technical skills and soft skills training I received at SRM were exceptional. The placement team worked tirelessly to bring top companies to campus."
                    },
                    {
                        id: 5,
                        name: "Vikram Patel",
                        degree: "B. Tech - Mechanical",
                        company: "Design Engineer at Tata Motors",
                        text: "SRM's focus on practical learning and industry collaboration gave me a competitive edge. The state-of-the-art laboratories and experienced faculty helped me develop both theoretical knowledge and practical skills."
                    }
                ]
            },

            reachUs: {
                title: "Reach Us",
                address: {
                    line1: "SRM Institute of Science and Technology",
                    line2:"SRM Nagar,   " ,
                    line3: "Chennai - Trichy Hwy,Dist,",
                    line4: "Irungalur, Tamil Nadu 621105",
                    email: "placementsrmtrchy@srmist.edu.in"
                },
                image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400"
            },

            journey: {
                title: "Where Could Your Journey At University Take You?",
                buttons: [
                    { icon: "fa-graduation-cap", label: "Academics", url: "#" },
                    { icon: "fa-flask", label: "Research", url: "#" },
                    { icon: "fa-briefcase", label: "Placements", url: "#" }
                ]
            }
        };

        // ============================================
        // FUNCTION-BASED WEBSITE BUILDER
        // ============================================

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
                if (item.hasDropdown) {
                    navHtml += `
                        <div class="nav-dropdown">
                            <a href="${item.url}" class="nav-link">${item.label} <i class="fas fa-chevron-down"></i></a>
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
                    <a href="tel:${websiteData.siteConfig.contactPhone}" class="contact-link">${websiteData.siteConfig.contactPhone}</a>
                    <a href="mailto:${websiteData.siteConfig.helpdeskEmail}" class="contact-link">${websiteData.siteConfig.helpdeskEmail}</a>
                </div>
            `;
            mobileMenuContent.innerHTML = mobileHtml;
        }

        // Build Gateway Section
        function buildGateway(data) {
            const section = document.getElementById('gatewaySection');
            let html = `<h2 class="section-title">${data.title}</h2>`;
            html += `<div class="gateway-content">`;

            data.description.forEach(para => {
                html += `<p>${para}</p>`;
            });
            html +="</div>"
            section.innerHTML = html;
        }

        // Build Director's Message
        function buildDirectorMessage(data) {
            const section = document.getElementById('directorSection');
            const { title, director, message, quickLinks } = data;

            let html = `<div class="director-content">`;
            html += `
                <div class="director-image">
                    <img src="${director.image}" alt="${director.name}">
                    <h3>${director.name}</h3>
                    <p>${director.position}</p>
                    <p>Phone: ${director.phone}</p>
                </div>
                <div>
                <h2 class="Director-title">${title}</h2>
                <div class="director-text">
            `;

            message.forEach(para => {
                html += `<p>${para}</p>`;
            });
            html += `</div></div>`;
            html += `<div class="director-links">`;
            quickLinks.forEach(link => {
                if(link.newTab){
                    html += `<a href="${link.url}" target='_blank'><i class="fas fa-arrow-right"></i> ${link.label}</a>`;
                }
                else{
                    html += `<a href="${link.url}"><i class="fas fa-arrow-right"></i> ${link.label}</a>`;
                }
            });

            html += `</div></div>`;
            section.innerHTML = html;
        }

    
        // Build Why Choose SRM
        function buildWhyChooseSRM(data) {
            const section = document.getElementById('whySRMSection');
            const { title, reasons } = data;

            let html = `<h2 class="section-title">${title}</h2>`;
            html += `<div class="why-srm-grid">`;

            html += `<div class="why-srm-column">`;
            reasons.filter(r => r.column === 1).forEach(reason => {
                html += `
                    <div class="why-item">
                        <i class="fas ${reason.icon}"></i>
                        <p>${reason.text}</p>
                    </div>
                `;
            });
            html += `</div>`;

            html += `<div class="why-srm-column">`;
            reasons.filter(r => r.column === 2).forEach(reason => {
                html += `
                    <div class="why-item">
                        <i class="fas ${reason.icon}"></i>
                        <p>${reason.text}</p>
                    </div>
                `;
            });
            html += `</div>`;

            html += `</div>`;
            section.innerHTML = html;
        }

        // Build Testimonials
        function buildTestimonials(data) {
            const wrapper = document.getElementById('testimonialsWrapper');
            let html = '';

            data.items.forEach(testimonial => {
                html += `
                    <div class="swiper-slide">
                        <div class="testimonial-card">
                            <div class="quote-icon">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <h3>${testimonial.name}, ${testimonial.degree}</h3>
                            <p class="testimonial-company">${testimonial.company}</p>
                            <p class="testimonial-text">${testimonial.text}</p>
                        </div>
                    </div>
                `;
            });

            wrapper.innerHTML = html;
            initializeTestimonialSwiper();
        }

        // Build Reach Us
        function buildReachUs(data) {
            const section = document.getElementById('reachUsSection');
            const { title, address, image } = data;

            let html = `<h2 class="section-title">${title}</h2>`;
            html += `<div class="reach-us-content">`;
            html += `
                <div class="reach-us-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4646.449168462569!2d78.7559478!3d10.956244600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e1!3m2!1sen!2sin!4v1769586923391!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="reach-us-info">
                    <h3>Address</h3>
                    <p>
                        ${address.line1}<br>
                        ${address.line2}<br>
                        ${address.line3}<br>
                        ${address.line4}<br>
                        ${address.email}
                    </p>
                </div>
            `;
            html += `</div>`;
            section.innerHTML = html;
        }

        // Build Journey Section
        function buildJourney(data) {
            const section = document.getElementById('journeySection');
            const { title, buttons } = data;

            let html = `<h2 class="section-title">${title}</h2>`;
            html += `<div class="journey-buttons">`;

            buttons.forEach(btn => {
                html += `<button class="journey-btn"><i class="fas ${btn.icon}"></i> ${btn.label}</button>`;
            });

            html += `</div>`;
            section.innerHTML = html;
        }

        // Initialize Recruiter Slider
        

        // Initialize Testimonial Swiper
        function initializeTestimonialSwiper() {
            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                speed: 800
            });
        }

        // Initialize Counter Animations
        function initializeCounterAnimations() {
            function animateCounter(element, target, duration) {
                const start = 0;
                const numericTarget = parseFloat(target.replace('+', ''));
                const hasPlus = target.includes('+');
                const increment = numericTarget / (duration / 16);
                let current = start;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericTarget) {
                        element.textContent = hasPlus ? `${Math.floor(numericTarget)}+` : Math.floor(numericTarget);
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 16);
            }

            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                        const number = entry.target.querySelector('.stats-count');
                        if (number) {
                            const targetValue = number.getAttribute('data-target');
                            animateCounter(number, targetValue, 2000);
                            entry.target.classList.add('animated');
                        }
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.stats-card').forEach(stat => {
                statsObserver.observe(stat);
            });
        }

        // Initialize Scroll Animations
        function initializeScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
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

        // ============================================
        // MAIN INITIALIZATION
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            // Set site configuration
            document.getElementById('siteLogo').src = websiteData.siteConfig.logo;
            document.title = websiteData.siteConfig.title;

            // Build all sections
            buildTopBanner(websiteData.topBanner);
            buildNavigation(websiteData.navigation);
            buildGateway(websiteData.gateway);
            buildDirectorMessage(websiteData.directorMessage);
            buildWhyChooseSRM(websiteData.whyChooseSRM);
            buildTestimonials(websiteData.testimonials);
            buildReachUs(websiteData.reachUs);
            buildJourney(websiteData.journey);

            // Initialize features
            initializeMobileMenu();
            initializeScrollAnimations();
            initializeCounterAnimations();
            initializeAdditionalFeatures();

            console.log('SRM Career Centre - Website loaded successfully!');
        });