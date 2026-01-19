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

let leftIndex = 0;
let rightIndex = 1;

function updateSlides() {
  if (!leftSlide || !rightSlide) return;

  leftSlide.style.opacity = "0";
  rightSlide.style.opacity = "0";

  setTimeout(() => {
    leftSlide.src = slideImages[leftIndex];
    rightSlide.src = slideImages[rightIndex];

    leftSlide.style.opacity = "1";
    rightSlide.style.opacity = "1";
  }, 300);
}

function nextSlides() {
  leftIndex = (leftIndex + 1) % slideImages.length;
  rightIndex = (rightIndex + 1) % slideImages.length;

  // Prevent showing the same image on both sides
  if (leftIndex === rightIndex) {
    rightIndex = (rightIndex + 1) % slideImages.length;
  }

  updateSlides();
}

// First load
updateSlides();

// Change every 3 seconds
setInterval(nextSlides, 3000);
