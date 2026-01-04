/* WP Emoji Settings & Script */
window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/silveiraengajamento.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.8.3" } };
/*! This file is auto-generated */
!function (s, n) { var o, i, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), a = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === a[t] }) } function u(e, t) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); for (var n = e.getImageData(16, 16, 1, 1), a = 0; a < n.data.length; a++)if (0 !== n.data[a]) return !1; return !0 } function f(e, t, n, a) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\udde8\ud83c\uddf6", "\ud83c\udde8\u200b\ud83c\uddf6") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !a(e, "\ud83e\udedf") }return !1 } function g(e, t, n, a) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : s.createElement("canvas"), o = r.getContext("2d", { willReadFrequently: !0 }), i = (o.textBaseline = "top", o.font = "600 32px Arial", {}); return e.forEach(function (e) { i[e] = t(o, e, n, a) }), i } function t(e) { var t = s.createElement("script"); t.src = e, t.defer = !0, s.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", i = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { s.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + g.toString() + "(" + [JSON.stringify(i), f.toString(), p.toString(), u.toString()].join(",") + "));", a = new Blob([e], { type: "text/javascript" }), r = new Worker(URL.createObjectURL(a), { name: "wpTestEmojiSupports" }); return void (r.onmessage = function (e) { c(n = e.data), r.terminate(), t(n) }) } catch (e) { } c(n = g(i, f, p, u)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);

/* Audio Player Script */
document.addEventListener("DOMContentLoaded", function () {
    const audioPlayerContainer = document.getElementById('audio-player-container');
    if (!audioPlayerContainer) return;

    const audioPlayer = document.createElement("div");
    audioPlayer.className = "audio-player";
    audioPlayer.dataset.url = "https://silveiraengajamento.com/wp-content/uploads/2025/10/AudioWpp.webm";

    const playerDiv = document.createElement("div");
    playerDiv.className = "player";

    const btnPlayToggle = document.createElement("button");
    btnPlayToggle.type = "button";
    btnPlayToggle.className = "btn-play";

    const iconsSrc = {
        play: "https://silveiraengajamento.com/wp-content/uploads/2025/10/play.svg",
        pause: "https://silveiraengajamento.com/wp-content/uploads/2025/10/pause.svg",
        loop: "https://silveiraengajamento.com/wp-content/uploads/2025/10/loading.svg",
        error: "https://silveiraengajamento.com/wp-content/uploads/2025/10/erro.svg"
    };

    for (const [key, src] of Object.entries(iconsSrc)) {
        const icon = document.createElement("img");
        icon.className = `icon icon-${key}`;
        icon.src = src;
        icon.alt = key.charAt(0).toUpperCase() + key.slice(1);
        btnPlayToggle.appendChild(icon);
    }

    const timeline = document.createElement("div");
    timeline.className = "timeline";
    const line = document.createElement("div");
    line.className = "line";
    const inputRange = document.createElement("input");
    inputRange.setAttribute("dir", "ltr");
    inputRange.type = "range";
    inputRange.min = "0";
    inputRange.max = "100";
    inputRange.value = "0";
    line.appendChild(inputRange);
    timeline.appendChild(line);

    const dataDiv = document.createElement("div");
    dataDiv.className = "data";
    const currentTimeDiv = document.createElement("div");
    currentTimeDiv.className = "current-time";
    dataDiv.appendChild(currentTimeDiv);
    const timeDiv = document.createElement("div");
    timeDiv.className = "time";
    dataDiv.appendChild(timeDiv);

    timeline.appendChild(dataDiv);

    // SPEED CONTROLS - NEW
    const speedControlsDiv = document.createElement("div");
    speedControlsDiv.className = "speed-controls";

    const speedOptions = [1, 1.5, 2];
    speedOptions.forEach(speed => {
        const speedBtn = document.createElement("button");
        speedBtn.type = "button";
        speedBtn.className = `btn-speed ${speed === 1 ? 'active' : ''}`;
        speedBtn.dataset.speed = speed;
        speedBtn.textContent = `${speed}x`;
        speedBtn.addEventListener('click', function () {
            // Remove active class from all speed buttons
            document.querySelectorAll('.btn-speed').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');
            // Set playback rate
            audio.playbackRate = speed;
        });
        speedControlsDiv.appendChild(speedBtn);
    });

    playerDiv.appendChild(btnPlayToggle);
    playerDiv.appendChild(timeline);
    audioPlayer.appendChild(playerDiv);
    audioPlayer.appendChild(speedControlsDiv); // Append speed controls directly to audio player

    const userDiv = document.createElement("div");
    userDiv.className = "user";
    const userImg = document.createElement("img");
    userImg.src = "https://silveiraengajamento.com/wp-content/uploads/2025/10/img_eduardonioliwpp.webp";
    userDiv.appendChild(userImg);

    const micIcon = document.createElement("img");
    micIcon.className = "mic-icon";
    micIcon.src = "https://silveiraengajamento.com/wp-content/uploads/2025/10/microfone.svg";
    micIcon.alt = "Mic";
    userDiv.appendChild(micIcon);

    audioPlayer.appendChild(userDiv);
    audioPlayerContainer.appendChild(audioPlayer);

    const audioUrl = audioPlayer.dataset.url;
    const audio = new Audio(audioUrl);

    audio.addEventListener('loadedmetadata', function () {
        const { duration } = audio;
        const durationDisplay = formatTimeToDisplay(duration);
        updateCurrentTimeDisplay(durationDisplay);
    }, false);

    function handleError() {
        const errors = {
            1: "Processo abortado pelo usuário",
            2: "Ocorreu um erro no download",
            3: "Erro na execução do áudio",
            4: "Formato de áudio não suportado"
        };
        const errorMessage = `Erro: ${errors[audio.error.code]}`;
        console.error(errorMessage);
    }

    function setMessageDate() {
        const currentDateTime = new Date(new Date().getTime() - (3 * 60 * 60 * 1000)).toISOString().substr(11, 5);
        audioPlayer.style.setProperty("--player-current-date-time", `'${currentDateTime}'`);
    }

    function formatTimeToDisplay(seconds) {
        const milliseconds = seconds * 1000;
        return new Date(milliseconds).toISOString().substr(14, 5);
    }

    function handlePlayButton() {
        audio.paused ? audio.play() : audio.pause();
    }

    function handleSlider(e) {
        const { duration } = audio;
        const percent = e.target.value;
        const currentTimeInSeconds = ((percent * duration) / 100).toFixed(2);
        audio.currentTime = currentTimeInSeconds;
    }

    function updateCurrentTimeDisplay(time) {
        audioPlayer.style.setProperty("--player-current-time", `'${time}'`);
    }

    function updateCurrentPercent() {
        const { currentTime, duration } = audio;
        const percentPlayed = (currentTime * 100) / duration;
        inputRange.value = percentPlayed;
    }

    function showTimeDuration() {
        const { duration } = audio;
        const durationDisplay = formatTimeToDisplay(duration);
        updateCurrentTimeDisplay(durationDisplay);
    }

    function start() {
        btnPlayToggle.onclick = handlePlayButton;
        inputRange.oninput = handleSlider;
        audio.onplay = () => audioPlayer.classList.add("playing");
        audio.onpause = () => audioPlayer.classList.remove("playing");
        audio.onended = () => (audio.currentTime = 0);
        audio.ontimeupdate = () => {
            const { currentTime } = audio;
            const currentTimeDisplay = formatTimeToDisplay(currentTime);
            updateCurrentTimeDisplay(currentTimeDisplay);
            updateCurrentPercent();
            if (currentTime === 0) {
                showTimeDuration();
            }
        };
        audio.onerror = handleError;
    }

    start();
});

/* Lazy Load Observer */
const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});

/* Payment Redirect Script */
document.addEventListener("DOMContentLoaded", function () {
    // Configuration for Payment Links
    // Map Form IDs to their respective Checkout URLs
    const paymentLinks = {
        'e6db0b0': 'https://lastlink.com/p/CE83550E7/checkout-payment', // Iniciante
        '157c062d': 'https://lastlink.com/p/C1D10F0FB/checkout-payment', // Avançado (149)
        '30aecc7f': 'https://lastlink.com/p/CE83550E7/checkout-payment'  // Profissional (Placeholder - Change needed?)
    };

    const forms = document.querySelectorAll('form.elementor-form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation(); // Try to stop Elementor's default handling if possible

            // Get Form ID from hidden input
            const formIdInput = form.querySelector('input[name="form_id"]');
            const formId = formIdInput ? formIdInput.value : null;

            // Find the username input in this specific form
            const usernameInput = form.querySelector('input[name="form_fields[name]"]');
            const submitButton = form.querySelector('button[type="submit"]');
            const buttonTextSpan = submitButton ? submitButton.querySelector('.elementor-button-text') : null;

            if (usernameInput && formId) {
                const username = usernameInput.value.trim();

                // Get the redirect URL for this specific form
                const baseUrl = paymentLinks[formId];

                if (username && baseUrl) {

                    // Visual Feedback
                    if (submitButton) {
                        submitButton.disabled = true; // Prevent multiple clicks
                        if (buttonTextSpan) {
                            const originalText = buttonTextSpan.textContent;
                            buttonTextSpan.textContent = "Gerando Link...";
                        }
                    }

                    // Delay for "confirmation" effect (1.5 seconds)
                    setTimeout(() => {
                        const redirectUrl = `${baseUrl}?utm_source=${encodeURIComponent(username)}`;
                        window.location.href = redirectUrl;
                    }, 1500);
                } else if (!baseUrl) {
                    console.error(`Payment link not configured for Form ID: ${formId}`);
                    // Optional: Fallback or alert user
                }
            }
        });
    });
});

/* ===== MODERN TESTIMONIAL CAROUSEL SCRIPT ===== */
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    let currentSlide = 0;
    let autoplayInterval;
    let isPlaying = true;

    // Show specific slide
    function showSlide(index) {
        // Pause all videos
        slides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) video.pause();
        });

        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    // Next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // Auto-play
    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
        isPlaying = true;
    }

    function stopAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        isPlaying = false;
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        setTimeout(startAutoplay, 10000); // Resume after 10s
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        setTimeout(startAutoplay, 10000); // Resume after 10s
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopAutoplay();
            setTimeout(startAutoplay, 10000); // Resume after 10s
        });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', () => {
        if (!isPlaying) startAutoplay();
    });

    // Touch/Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
            stopAutoplay();
            setTimeout(startAutoplay, 10000);
        }
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoplay();
            setTimeout(startAutoplay, 10000);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoplay();
            setTimeout(startAutoplay, 10000);
        }
    });

    // Start autoplay
    startAutoplay();
});
/* ===== CUSTOM VIDEO PLAY BUTTON ===== */
document.addEventListener('DOMContentLoaded', function () {
    const videoSlide = document.querySelector('.carousel-slide.active');
    const video = videoSlide ? videoSlide.querySelector('.carousel-video') : null;

    if (video) {
        // Remove controls attribute
        video.removeAttribute('controls');

        // Create play button overlay
        const overlay = document.createElement('div');
        overlay.className = 'video-play-overlay';
        overlay.innerHTML = `
            <button class="video-play-button" aria-label="Reproduzir vídeo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </button>
        `;

        videoSlide.appendChild(overlay);

        // Play button click handler
        const playButton = overlay.querySelector('.video-play-button');
        playButton.addEventListener('click', function () {
            video.play();
            video.setAttribute('controls', 'controls');
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        });

        // Show overlay again when video ends or is paused
        video.addEventListener('pause', function () {
            if (video.currentTime < video.duration) {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            }
        });

        video.addEventListener('ended', function () {
            video.removeAttribute('controls');
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });
    }
});

/* ===== 3D CAROUSEL ROTATION LOGIC ===== */
document.addEventListener('DOMContentLoaded', function () {
    const carousel3D = document.querySelector('.testimonial-carousel-3d');
    if (!carousel3D) return;

    const items = document.querySelectorAll('.carousel-item-3d');
    const prevBtn = document.querySelector('.prev-3d');
    const nextBtn = document.querySelector('.next-3d');

    const positions = ['left', 'center', 'right'];

    function rotate3DCarousel(direction) {
        items.forEach(item => {
            const currentPos = item.getAttribute('data-position');
            const currentIndex = positions.indexOf(currentPos);

            let newIndex;
            if (direction === 'next') {
                newIndex = (currentIndex + 1) % 3;
            } else {
                newIndex = (currentIndex - 1 + 3) % 3;
            }

            item.setAttribute('data-position', positions[newIndex]);

            // Update active class
            if (positions[newIndex] === 'center') {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => rotate3DCarousel('prev'));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => rotate3DCarousel('next'));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            rotate3DCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            rotate3DCarousel('next');
        }
    });

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel3D.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel3D.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                rotate3DCarousel('next');
            } else {
                rotate3DCarousel('prev');
            }
        }
    }
});

/* ===== 3D CAROUSEL VIDEO PLAY BUTTON ===== */
document.addEventListener('DOMContentLoaded', function () {
    const videoCard = document.querySelector('.carousel-card-3d.video-card');
    if (!videoCard) return;

    const video = videoCard.querySelector('.carousel-video-3d');
    const overlay = videoCard.querySelector('.video-play-overlay-3d');
    const playButton = videoCard.querySelector('.video-play-button-3d');

    if (video && overlay && playButton) {
        // Play button click handler
        playButton.addEventListener('click', function () {
            video.play();
            video.setAttribute('controls', 'controls');
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        });

        // Show overlay when paused
        video.addEventListener('pause', function () {
            if (video.currentTime < video.duration) {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            }
        });

        // Show overlay when ended
        video.addEventListener('ended', function () {
            video.removeAttribute('controls');
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });
    }
});
