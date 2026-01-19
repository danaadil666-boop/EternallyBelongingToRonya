const images = [
  "slides/ronya1.jpg",
  "slides/ronya2.jpg",
  "slides/ronya3.jpg",
  "slides/ronya4.jpg",
  "slides/ronya5.jpg",
  "slides/ronya6.jpg"
];

let index = 0;

const leftSlide = document.getElementById("leftSlide");
const rightSlide = document.getElementById("rightSlide");

function changeSlides() {
  leftSlide.style.opacity = 0;
  rightSlide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;

    leftSlide.src = images[index];
    rightSlide.src = images[index];

    leftSlide.style.opacity = 1;
    rightSlide.style.opacity = 1;
  }, 1000); // fade time
}

setInterval(changeSlides, 3000);
