

/* ── Animated progress bar ──────────────────────────── */
(function () {
    const fill = document.getElementById('fill');
    const pct = document.getElementById('pct');

    // Simulate a progress value (replace with real data if needed)
    const TARGET = 67; // percent
    let current = 0;

    function tick() {
        if (current >= TARGET) return;
        current = Math.min(current + 0.6, TARGET);
        fill.style.width = current + '%';
        pct.textContent = Math.floor(current) + '%';
        requestAnimationFrame(tick);
    }

    // Start after a short delay for dramatic effect
    setTimeout(tick, 700);
})();


/* ── Subtle title glitch effect ───────────────────── */
(function () {
    const title = document.querySelector('.title');
    if (!title) return;

    function glitch() {
        title.style.textShadow =
            `${rand(-4, 4)}px ${rand(-2, 2)}px 0 rgba(255,77,77,0.7),
       ${rand(-4, 4)}px ${rand(-2, 2)}px 0 rgba(245,230,66,0.7)`;

        setTimeout(() => {
            title.style.textShadow = 'none';
        }, 80);

        // Schedule next glitch at random interval
        setTimeout(glitch, rand(3000, 8000));
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    setTimeout(glitch, 2000);
})();
