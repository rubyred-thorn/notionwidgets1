let currentSlide = 0;
const slides = document.getElementsByClassName("checklist");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("visible");
  }
  slides[n].classList.add("visible");
  currentSlide = n;
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
});

showSlide(currentSlide);
