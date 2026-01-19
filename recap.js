// ====== SLIDESHOW IMAGES (10 TOTAL) ======
const slideImages = [
  "slides/ronya1.jpg",
  "slides/ronya2.jpg",
  "slides/ronya3.jpg",
  "slides/ronya4.jpg",
  "slides/ronya5.jpg",
  "slides/ronya6.jpg",
  "slides/ronya7.jpg",
  "slides/ronya8.jpg",
  "slides/ronya9.jpg",
  "slides/ronya10.jpg"
];

const leftSlide = document.getElementById("leftSlide");
const rightSlide = document.getElementById("rightSlide");

let index = 0;

function updateSlides() {
  if (!leftSlide || !rightSlide) return;

  leftSlide.style.opacity = "0";
  rightSlide.style.opacity = "0";

  setTimeout(() => {
    // ✅ BOTH show the same image
    leftSlide.src = slideImages[index];
    rightSlide.src = slideImages[index];

    leftSlide.style.opacity = "1";
    rightSlide.style.opacity = "1";
  }, 300);
}

function nextSlide() {
  index = (index + 1) % slideImages.length;
  updateSlides();
}

// First load
updateSlides();

// Change every 3 seconds
setInterval(nextSlide, 3000);
