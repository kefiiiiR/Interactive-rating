let selectedRating;

for (i = 0; i < 5; i++) {
  const allButtons = document.querySelectorAll(".rating-button");

  allButtons[i].addEventListener("click", function() {
    selectedRating = this.innerHTML;

    for (i = 0; i < 5; i++) {
        allButtons[i].classList.remove("rating-button-active");
        this.classList.add("rating-button-active");
        document.querySelector(".no-rating").classList.remove("visible");
      };
  });
}

function submitRating(selectedRating) {
  document.getElementById("rated").innerHTML = selectedRating;

  if (selectedRating === undefined) {
    document.querySelector(".no-rating").classList.add("visible");
  } else {
  document.querySelector(".rating").classList.remove("visible");
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
  document.querySelector(".thank-you").classList.add("visible");
  }
}
