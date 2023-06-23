const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// On récupère les dots
const dot = document.getElementById(".dots");

// On récupère les deux flèches
let next = document.querySelector(".arrow_right");
let prev = document.querySelector(".arrow_left");

// On met en place les écouteurs d'évènements sur les flèches
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

// On initialise les variables compteur et nombres
let compteur = 0;
let nombres = slides.length;

// On afficher les dotes

function slideNext() {
  // On incrémente le compteur
  compteur++;
  // Si on dépasse la fin du diaporama, on "rembobine"
  if (compteur == nombres) {
    compteur = 0;
  }
  changeSlide(compteur);
}

function slidePrev() {
  // On décrémente le compteur
  compteur--;
  // Si on dépasse le début du diaporama, on repart à la fin
  if (compteur < 0) {
    compteur = nombres - 1;
  }
  changeSlide(compteur);
}

function changeSlide(index) {
  const img = slides[index].image;
  const src = (document.getElementById("banner_img").src =
    "./assets/images/slideshow/" + img);
  const texte = document.querySelector("#texte");
  const tagline = slides[index].tagLine;
  texte.innerHTML = tagline;
  // Déplace la dot
}
