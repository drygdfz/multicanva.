// Image Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-item');

// Initialize first image to be visible
images.forEach((image, index) => {
    image.style.display = (index === 0) ? 'block' : 'none';
});

function showNextImage() {
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].style.display = 'block'; // Show the next image
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);

// Scroll-to-top button functionality
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the user clicks the button
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Lightbox functionality
function openLightbox() {
    document.getElementById("lightboxModal").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

function currentSlide(n) {
    const images = document.querySelectorAll(".carousel-item");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = images[n - 1].src; // Get the image source and set it to the lightbox
}
