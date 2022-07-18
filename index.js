for (i = 0; i < 5; i++) {
  const allButtons = document.querySelectorAll(".rating-button");

  allButtons[i].addEventListener("click", function() {
    const selectedRating = this.innerHTML;
    document.getElementById("rated").innerHTML = selectedRating;

    for (i = 0; i < 5; i++) {
        allButtons[i].classList.remove("rating-button-active");
        this.classList.add("rating-button-active");
        document.querySelector(".no-rating").classList.remove("visible");
      };
  });
}

function submitRating() {
  if (document.getElementById("rated").innerHTML < 1) {
    document.querySelector(".no-rating").classList.add("visible");
  } else {
  document.querySelector(".rating").classList.remove("visible");
  document.querySelector(".rating").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
  document.querySelector(".thank-you").classList.add("visible");
  }
}
