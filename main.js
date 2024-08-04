const toggler = document.querySelector("#togglebtn");
const parag = document.querySelector("#text");
toggler.addEventListener("click", () => {
  if (!parag.classList.contains("hidden")) parag.classList.add("hidden");
  else {
    parag.classList.remove("hidden");
    setTimeout(() => {
      parag.classList.add("hidden");
    }, 5000);
  }
});
