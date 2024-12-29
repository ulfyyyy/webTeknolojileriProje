// Pop-up elementlerini seç
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');

// Pop-up'ı açan bir fonksiyon
function showPopup() {
    popup.style.display = 'block'; // Pop-up'ı görünür yapar
    setTimeout(function() {
        popup.classList.add('show'); // Animasyonu başlatmak için 'show' sınıfını ekler
    }, 10); // Animasyonun hemen başlaması için küçük bir gecikme ekleriz
}

// Pop-up'ı kapatan bir fonksiyon
function closePopup() {
    popup.classList.remove('show'); // Animasyonu tersine çevirir
    setTimeout(function() {
        popup.style.display = 'none'; // Animasyon bitince pop-up'ı gizler
    }, 500); // Animasyon süresince (0.5 saniye) bekler
}

// Kapatma düğmesine tıklama olayını dinle
closeBtn.addEventListener('click', closePopup);

// Belirli bir süre sonra pop-up'ı aç (isteğe bağlı)
setTimeout(showPopup, 1500); // 1.5 saniye sonra açılır


// Slider için gerekli değişkenler
let sliderIndex = 0; // Başlangıçta ilk resim
const images = document.querySelectorAll('.slider img'); // Tüm resimleri seçiyoruz
const totalImages = images.length; // Toplam resim sayısı

// Slider'ı kaydıran fonksiyon
function moveSlider() {
    sliderIndex++; // İndeksi artırıyoruz
    if (sliderIndex === totalImages) {
        sliderIndex = 0; // Son resme geldiysek, tekrar başa döneriz
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${sliderIndex * 600}px)`; // Her kaydırmada resimleri sola kaydırıyoruz
}

// Her 3 saniyede bir slider'ı kaydır
function startSlider() {
    setInterval(moveSlider, 3000); // 3 saniyede bir resimleri kaydır
}

// Pop-up'ı açan fonksiyon
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // Pop-up'ı görünür yapar
}

// Pop-up'ı kapatan fonksiyon
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Pop-up'ı gizler
}

// Kapatma butonuna tıklama olayını dinle
function addCloseEventListener() {
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closePopup); // Kapanış butonuna tıklayınca pop-up kapanacak
}

// Sayfa yüklendiğinde fonksiyonları başlat
window.onload = function () {
    startSlider(); // Slider'ı başlat
    addCloseEventListener(); // Kapanış butonuna tıklama olayını ekle
};

// Form işleme kodları
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    // Form varsa submit olayını dinle
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Formun normal gönderimini engelle
            
            // Popup'ı göster
            if (popup) {
                popup.style.display = 'block';
            }
            
            // Formu temizle
            form.reset();
        });
    }

    // Popup kapatma işlemleri
    if (closeBtn && popup) {
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });

        // Popup dışına tıklandığında kapatma
        window.addEventListener('click', function(e) {
            if (e.target == popup) {
                popup.style.display = 'none';
            }
        });
    }
});
