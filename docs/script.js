// Simple JavaScript for website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Breathing exercise
    const breathingBtn = document.getElementById('breathingBtn');
    const breathingCircle = document.getElementById('breathingCircle');
    const breathingText = document.getElementById('breathingText');

    if (breathingBtn && breathingCircle && breathingText) {
        let isBreathing = false;
        let timeout = null;

        breathingBtn.addEventListener('click', function() {
            if (!isBreathing) {
                isBreathing = true;
                breathingBtn.textContent = 'Stop Exercise';
                startBreathing();
            } else {
                isBreathing = false;
                breathingBtn.textContent = 'Start Breathing Exercise';
                breathingCircle.classList.remove('breathing-in', 'breathing-hold', 'breathing-out');
                breathingText.textContent = 'Click to Start';
                if (timeout) clearTimeout(timeout);
            }
        });

        function startBreathing() {
            if (!isBreathing) return;
            
            breathingCircle.className = 'breathing-circle breathing-in';
            breathingText.textContent = 'Breathe In...';
            
            timeout = setTimeout(() => {
                if (!isBreathing) return;
                breathingCircle.className = 'breathing-circle breathing-hold';
                breathingText.textContent = 'Hold...';
                
                timeout = setTimeout(() => {
                    if (!isBreathing) return;
                    breathingCircle.className = 'breathing-circle breathing-out';
                    breathingText.textContent = 'Breathe Out...';
                    
                    timeout = setTimeout(() => {
                        if (isBreathing) {
                            startBreathing();
                        }
                    }, 8000);
                }, 7000);
            }, 4000);
        }
    }

    // Quote slider
    const quoteCards = document.querySelectorAll('.quote-card');
    const prevBtn = document.getElementById('prevQuote');
    const nextBtn = document.getElementById('nextQuote');

    if (quoteCards.length > 0) {
        let currentQuote = 0;
        quoteCards[0].classList.add('active');

        function showQuote(index) {
            quoteCards.forEach(card => card.classList.remove('active'));
            if (quoteCards[index]) {
                quoteCards[index].classList.add('active');
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentQuote = (currentQuote + 1) % quoteCards.length;
                showQuote(currentQuote);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentQuote = (currentQuote - 1 + quoteCards.length) % quoteCards.length;
                showQuote(currentQuote);
            });
        }

        // Auto-advance quotes
        if (quoteCards.length > 1) {
            setInterval(function() {
                currentQuote = (currentQuote + 1) % quoteCards.length;
                showQuote(currentQuote);
            }, 5000);
        }
    }

});
