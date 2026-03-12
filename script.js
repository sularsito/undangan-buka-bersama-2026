// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Function to start invitation and play music
function startInvitation() {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('bgMusic');
    const music = document.getElementById('bgMusic');
music.volume = 0.5; // Mengatur volume ke 50% agar tetap nyaman didengar
    
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        music.play().catch(error => {
            console.log("Autoplay dicegah oleh browser. Musik akan diputar setelah interaksi.");
        });
    }, 1000);
}
