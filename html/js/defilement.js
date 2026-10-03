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

// Sélection de la zone vide
const slider = document.getElementById("slider");

// Génération automatique du HTML via une boucle
let html = `
  <img id="main-img" src="${images[0]}">
  <div class="thumbs">
`;

for (let i = 0; i < images.length; i++) {
  html += `<img src="${images[i]}" data-index="${i}">`;
}

html += `</div>`;
slider.innerHTML = html;

// Fonctionnement du slider
const mainImg = document.getElementById("main-img");
const thumbs = document.querySelectorAll(".thumbs img");

let current = 0;

// Sélection d’une image via clic
for (let i = 0; i < thumbs.length; i++) {

  let miniature = thumbs[i];   // on récupère la miniature

  miniature.onclick = function () {

    let cheminImage = images[i];   // on récupère le chemin de l'image
    mainImg.src = cheminImage;     // on change l'image principale

    current = i;                   // on met à jour l'index
  };
}

