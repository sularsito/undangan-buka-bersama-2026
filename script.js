// Inisialisasi AOS (Animasi Scroll)
AOS.init({
    duration: 1000,
    once: true
});

let slideIndex = 0;
let slideTimeout;

console.log("Script.js berhasil dimuat!");

// 1. Fungsi untuk Memulai Undangan & Musik
function startInvitation() {
    console.log("Tombol 'Buka Undangan' diklik.");
    
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('bgMusic');
    
    if (!overlay) {
        console.error("EROR: Elemen 'overlay' tidak ditemukan!");
        return;
    }

    // Set volume musik (0.0 sampai 1.0)
    if (music) {
        music.volume = 0.5;
        console.log("Mencoba memutar musik...");
    }
    
    // Animasi menghilangkan overlay (memudar)
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        console.log("Overlay disembunyikan.");
        
        // Putar musik setelah interaksi user
        if (music) {
            music.play().then(() => {
                console.log("Musik berhasil diputar.");
            }).catch(error => {
                console.warn("Autoplay musik dicegah browser. Musik akan jalan jika ada interaksi lagi.", error);
            });
        }

        // JALANKAN SLIDESHOW (EFEK VIDEO)
        console.log("Memulai slideshow...");
        showSlides();
    }, 1000);
}

// 2. Fungsi Utama Slideshow (Efek Video Mengalir)
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        console.error("EROR: Tidak ada elemen dengan class 'mySlides' yang ditemukan!");
        return;
    }

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

    // Tampilkan slide yang aktif
    slides[slideIndex - 1].style.display = "block";  
    console.log("Menampilkan slide ke-" + slideIndex);

    // Aktifkan titik (dot) yang sesuai
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }

    // Ganti slide otomatis setiap 5 detik
    // Bersihkan timeout sebelumnya untuk mencegah slide "balapan"
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(showSlides, 5000); 
}
