function nextSection(current, next) {
  document.getElementById(current).classList.remove("show");
  document.getElementById(next).classList.add("show");
  document
    .querySelector(`[data-target="#${next}"]`)
    .scrollIntoView({ behavior: "smooth" });
}

function enableContinueButton() {
  document.getElementById("continueButton").disabled = false;
}
