let selectedRating;

for (i = 0; i < 5; i++) {
  const allButtons = document.querySelectorAll(".rating-button");

  allButtons[i].addEventListener("click", function() {
    selectedRating = this.innerHTML;
    document.querySelector(".no-rating").style.display = "none";

//    for (i = 0; i < 5; i++) {
//        allButtons[i].classList.remove("rating-button-active");
//        this.classList.add("rating-button-active");
//      };
  });
}

function submitRating(selectedRating) {
  document.getElementById("rated").innerHTML = selectedRating;

  if (selectedRating === undefined) {
    document.querySelector(".no-rating").style.display = "block";
  } else {
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".thank-you").style.display = "block";
  }
}
