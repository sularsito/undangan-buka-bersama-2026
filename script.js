// Initialize Animations (Tetap dipertahankan untuk elemen pendukung)
AOS.init({
    duration: 1000,
    once: true
});

let slideIndex = 0;
let slideTimeout;

// 1. Fungsi untuk Memulai Undangan & Musik
function startInvitation() {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('bgMusic');
    
    // Set volume agar nyaman didengar
    music.volume = 0.5; 
    
    // Animasi menghilangkan overlay
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        
        // Putar musik
        music.play().catch(error => {
            console.log("Autoplay dicegah oleh browser.");
        });

        // MULAI JALANKAN VIDEO SLIDE
        showSlides();
    }, 1000);
}

// 2. Fungsi Utama Slideshow (Efek Video Mengalir)
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Sembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Naikkan index slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    

    // Reset semua status titik (dot)
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Tampilkan slide yang aktif dan nyalakan titiknya
    slides[slideIndex - 1].style.display = "block";  
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }

    // Atur durasi tiap scene (5000 = 5 detik)
    // Kamu bisa ubah angka ini untuk mempercepat atau memperlambat aliran "video"
    slideTimeout = setTimeout(showSlides, 5000); 
}
