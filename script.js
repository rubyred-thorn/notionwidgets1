let currentSlide = 0;
const slides = document.getElementsByClassName("checklist");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("visible");
  }
  slides[n].classList.add("visible");
  currentSlide = n;
}

function saveCheckboxesState() {
  const checkboxes = slides[currentSlide].querySelectorAll("input[type='checkbox']");
  const checkboxState = Array.from(checkboxes).map(checkbox => checkbox.checked);
  localStorage.setItem(`checklist_${currentSlide}`, JSON.stringify(checkboxState));
}

function loadCheckboxesState() {
  const checkboxStateJSON = localStorage.getItem(`checklist_${currentSlide}`);
  if (checkboxStateJSON) {
    const checkboxState = JSON.parse(checkboxStateJSON);
    const checkboxes = slides[currentSlide].querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = checkboxState[index];
      if (checkbox.checked) {
        checkbox.parentNode.classList.add("checked");
      } else {
        checkbox.parentNode.classList.remove("checked");
      }
    });
  }
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentSlide > 0) {
    saveCheckboxesState();
    showSlide(currentSlide - 1);
    loadCheckboxesState();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    saveCheckboxesState();
    showSlide(currentSlide + 1);
    loadCheckboxesState();
  }
});

showSlide(currentSlide);
loadCheckboxesState();
