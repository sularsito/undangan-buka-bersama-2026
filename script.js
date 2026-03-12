// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Function to start invitation and play music
function startInvitation() {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('bgMusic');
    
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        music.play().catch(error => {
            console.log("Autoplay dicegah oleh browser. Musik akan diputar setelah interaksi.");
        });
    }, 1000);
}
