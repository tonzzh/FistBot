document.addEventListener('DOMContentLoaded', () => {
    // Accordion Functionality with ARIA support and resize handler
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.toggle('active');
            
            header.setAttribute('aria-expanded', isActive ? 'true' : 'false');

            if (isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });

    // Resize recalculation for open accordions
    window.addEventListener('resize', () => {
        accordionHeaders.forEach(header => {
            if (header.classList.contains('active')) {
                const content = header.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }, { passive: true });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Mobile Sticky CTA Scroll Visibility ---
    const mobileStickyCta = document.getElementById('mobile-sticky-cta');
    const heroBtn = document.querySelector('.hero .btn-primary');
    const offerSection = document.getElementById('oferta');

    if (mobileStickyCta) {
        const handleScroll = () => {
            // Only execute sticky CTA logic on mobile/tablet screens (992px or less)
            if (window.innerWidth > 992) {
                mobileStickyCta.style.transform = 'translateY(105%)';
                return;
            }

            if (!heroBtn || !offerSection) return;

            const heroBtnPosition = heroBtn.getBoundingClientRect().bottom + window.scrollY;
            const offerSectionPosition = offerSection.getBoundingClientRect().top + window.scrollY;
            const currentScroll = window.scrollY;

            // Show sticky CTA after scrolling past Hero Button, hide when reaching Offer section
            if (currentScroll > heroBtnPosition && currentScroll < (offerSectionPosition - 300)) {
                mobileStickyCta.style.transform = 'translateY(0)';
            } else {
                mobileStickyCta.style.transform = 'translateY(105%)';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        // Run once on load
        handleScroll();
    }

    // --- Scroll Progress Bar ---
    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            progressBar.style.width = percentage + '%';
        }, { passive: true });
    }


    // --- Cookie Consent Banner & Dynamic Tracking Script Loader ---
    
    // Check if the user is in the European Region (GDPR Zone)
    const isEuropeanRegion = () => {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (tz) {
                const euRegions = [
                    'Europe/', 'Atlantic/Azores', 'Atlantic/Canary', 
                    'Atlantic/Madeira', 'Asia/Nicosia', 'Asia/Famagusta'
                ];
                return euRegions.some(region => tz.startsWith(region));
            }
        } catch (e) {
            console.error('Error detecting timezone:', e);
        }
        return false;
    };

    // Load Meta Pixel tracking script dynamically
    const loadTrackingScripts = () => {
        // Pixel is loaded statically in index.html as per standard installation.
        console.log('Meta Pixel is loaded statically in index.html');
    };

    const cookieBanner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-cookie-accept');
    const btnReject = document.getElementById('btn-cookie-reject');

    if (cookieBanner && btnAccept && btnReject) {
        const consent = localStorage.getItem('cookie_consent');
        const isEU = isEuropeanRegion();

        const showCookieBanner = () => {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1500); // Elegant delay
        };

        const hideCookieBanner = () => {
            cookieBanner.classList.remove('show');
        };

        // Initialize tracking depending on consent status & geography
        if (consent === 'accepted') {
            loadTrackingScripts();
        } else if (consent === 'rejected') {
            console.log('Tracking scripts blocked per user preference.');
        } else {
            // No choice yet
            if (isEU) {
                // EU User: Strict opt-in (do not load scripts until accepted)
                console.log('EU visitor detected. Strict opt-in applied.');
            } else {
                // Non-EU User (e.g. Brazil): Opt-out model (load scripts immediately)
                console.log('Non-EU visitor detected. Standard load applied.');
                loadTrackingScripts();
            }
            showCookieBanner();
        }

        // Event Listeners
        btnAccept.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'accepted');
            hideCookieBanner();
            loadTrackingScripts();
        });

        btnReject.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'rejected');
            hideCookieBanner();
            console.log('Cookies rejected. Tracking scripts will not load.');
            // Clear any cookies set by Meta if possible
            try {
                document.cookie.split(";").forEach(function(c) {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
            } catch (e) {
                console.error('Error clearing cookies:', e);
            }
        });
    }

    // --- Meta Pixel Custom Event Tracking ---
    
    // 1. Rastrear cliques no WhatsApp (Event: Contact)
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            if (typeof fbq === 'function') {
                fbq('track', 'Contact', {
                    content_name: 'Suporte WhatsApp',
                    source: 'Floating Button'
                });
            }
        });
    }

    // --- Dynamic Copyright Year ---
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
