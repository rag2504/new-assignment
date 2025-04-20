
        // Select DOM elements
        const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('mobile-overlay');
        const navbar = document.querySelector('.navbar');
        
        // Toggle mobile menu function
        function toggleMenu() {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
        
        // Event listeners
        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on a link (for mobile)
        const mobileLinks = navLinks.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
        
        // Shrink navbar on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Fix for iOS Safari 100vh issue and improved mobile menu rendering
        function setMobileHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            
            // Adjust mobile menu height for better iOS compatibility
            if (window.innerWidth <= 1000) {
                navLinks.style.height = `${window.innerHeight}px`;
            } else {
                navLinks.style.height = '';
            }
        }
        
        // Set initial height
        setMobileHeight();
        
        // Reset on resize and orientation change
        window.addEventListener('resize', setMobileHeight);
        window.addEventListener('orientationchange', setMobileHeight);
        
        // Add active class to current page link
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                    link.style.color = 'var(--secondary)';
                    link.style.backgroundColor = 'var(--secondary-light)';
                }
            });
        });
         // Enhanced animation on scroll effect
        document.addEventListener('DOMContentLoaded', () => {
            const serviceCards = document.querySelectorAll('.service-card');
            const actionButtons = document.querySelectorAll('.action-button');
            
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Add animation when scrolling
            function checkElements() {
                serviceCards.forEach((card, index) => {
                    if (isInViewport(card)) {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    }
                });
                
                actionButtons.forEach((button, index) => {
                    if (isInViewport(button)) {
                        setTimeout(() => {
                            button.style.opacity = '1';
                            button.style.transform = 'translateY(0)';
                        }, index * 100 + 600);
                    }
                });
            }
            
            // Initialize elements with starting styles
            serviceCards.forEach((card) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            actionButtons.forEach((button) => {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Check on scroll and on load
            window.addEventListener('scroll', checkElements);
            window.addEventListener('load', checkElements);
            
            // Trigger initial check
            setTimeout(checkElements, 100);
        });
