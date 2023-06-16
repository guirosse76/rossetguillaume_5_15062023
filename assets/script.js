const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// On récupère les deux flèches
let next = document.querySelector(".arrow_right")
let prev = document.querySelector(".arrow_left")

// On met en place les écouteurs d'évènements sur les flèches
next.addEventListener("click", slideNext)
prev.addEventListener("click", slidePrev)

let nombres = slides.length
const dot = document.getElementById('.dots')

function slideNext(){
	console.log(next)
}

function slidePrev(){
	console.log(prev)
}

// // On récupère le conteneur principal du diaporama
// const diapo = document.querySelector("#banner")

// // On récupère le conteneur de tous les éléments
// elements = document.querySelector("banner-img")

// // On récupère un tableau contenant la liste des diapos
// // slides = Array.from(elements.children)



// // Variables globales
// let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
// let timer, elements, slideWidth



// /**
//  * Cette fonction fait défiler le diaporama vers la droite
//  */
// function slideNext(){
//     // On incrémente le compteur
//     compteur++

//     // Si on dépasse la fin du diaporama, on "rembobine"
//     if(compteur == slides.length){
//         compteur = 0
//     }

//     // On calcule la valeur du décalage
//     let decal = -slideWidth * compteur
//     elements.style.transform = `translateX(${decal}px)`
// }

// /**
//  * Cette fonction fait défiler le diaporama vers la gauche
//  */
// function slidePrev(){
//     // On décrémente le compteur
//     compteur--

//     // Si on dépasse le début du diaporama, on repart à la fin
//     if(compteur < 0){
//         compteur = slides.length - 1
//     }

//     // On calcule la valeur du décalage
//     let decal = -slideWidth * compteur
//     elements.style.transform = `translateX(${decal}px)`
// }