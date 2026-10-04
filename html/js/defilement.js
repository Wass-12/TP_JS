const images = [
  "image/beef-burger.jpg",
  "image/burger_becon.jpg",
  "image/burger_etage.jpg",
  "image/burger_mini.jpg",
  "image/burger_valeria.jpg",
  "image/burger-cheese.jpg",
  "image/burger-regime.jpg",
  "image/hamburger-regime.jpg",
  "image/spicy-burger.jpg"
];
const noms = [
  "Burger Bœuf",
  "Burger Bacon",
  "Burger Étage",
  "Burger Mini",
  "Burger Valeria",
  "Burger Cheese",
  "Burger Régime",
  "Hamburger Régime",
  "Burger Épicé"
];


// Sélection de la zone vide
const slider = document.getElementById("slider");

// Génération automatique du HTML via une boucle
let html = `
  <img id="main-img" src="${images[0]}">
  <p id="nom-img">${noms[0]}</p>
  <div class="thumbs">
`;

for (let i = 0; i < images.length; i++) {
  html += `<img src="${images[i]}" data-index="${i}">`;
  
}
// for (let i = 0; i < noms.length; i++) {
  
// }

html += `</div>`;
slider.innerHTML = html;

// Fonctionnement du slider
const mainImg = document.getElementById("main-img");
const nomImg = document.getElementById("nom-img");

const thumbs = document.querySelectorAll(".thumbs img");

let current = 0;


// Sélection d’une image via clic
for (let i = 0; i < thumbs.length; i++) {

  let miniature = thumbs[i];   // on récupère la miniature

  miniature.onclick = function () {

    let cheminImage = images[i];
    let description_image = noms[i];   // on récupère le chemin de l'image
    mainImg.src = cheminImage;     // on change l'image principale
    nomImg.style.display = "block"; 
    localStorage.setItem("burgerSelectionne", noms[i]); // stockage information 
    current = i;                   // on met à jour l'index
  };
}
//test boucle 

setInterval(function () {

  // On avance d'une image
  current++;

  // Si on dépasse la dernière image, on revient à la première
  if (current >= images.length) {
    current = 0;
  }

  // On met à jour l'image principale
  mainImg.src = images[current];

  // On met à jour le nom
  nomImg.textContent = noms[current];

}, 10000); // 10 secondes

// rafraîchissement de la page toutes les 15 secondes
// je fais parce que j'arrive pas a faire disparaître le nom de l'image quand je clique sur une miniature quand elle change ( a esseyer de faire marcher) 
// setInterval(function () {
//   location.reload();
// }, 15000); // 15000 ms = 15 secondes
