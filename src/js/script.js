// *** CAROUSEL ***
// TODO
const carousel = document.querySelector("div>div");
const prevButton = document.querySelector("div>button");
const nextButton = document.querySelector("div>button+button");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;
// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({left: -260, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({left: scrollAmount, behavior: "smooth" });
  });
}


//carousel.scrollBy({ left: +260, behavior: "smooth" });