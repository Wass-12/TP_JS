// encore dsl pour ce code broullion du a notre manque de compréhension on a fais fausse route
// merci pour bien veillance et bonne corretion a vous 
// Récupération des ingrédients validés depuis le localStorage
const ingredientsValides =
    JSON.parse(localStorage.getItem("liste_ingrédients")) || [];

// Sélecteur de la liste dans la page creation_burgeur.html
const liste_ingredients_final = document.getElementById("liste_ingredients_final");

// Si la liste est vide
if (ingredientsValides.length === 0) {
    liste_ingredients_final.innerHTML = `<li style="color:red;">Aucun ingrédient enregistré</li>`;
} else {
    // Affichage des ingrédients validés
    ingredientsValides.forEach(ing => {
        liste_ingredients_final.innerHTML += `<li>${ing.nom} (x${ing.quantite})</li>`;
    });
}

// 5 barres de choix : on compose le burger dans l'ordre voulu
const NB_CHOIX = 5;
const choix = document.getElementById("choix");
const selects = [];

for (let i = 0; i < NB_CHOIX; i++) {
    const select = document.createElement("select");
    select.innerHTML = `<option value="">-- Choix ${i + 1} --</option>` +
        ingredientsValides.map(ing => `<option value="${ing.nom}">${ing.nom} (x${ing.quantite})</option>`).join("");
    select.addEventListener("change", majOptions);
    choix.appendChild(select);
    selects.push(select);
}

// Un ingrédient ne peut pas être choisi plus de fois que sa quantité
function majOptions() {
    selects.forEach(select => {
        Array.from(select.options).forEach(option => {
            if (!option.value) return;
            const ing = ingredientsValides.find(i => i.nom === option.value);
            const utilisations = selects.filter(s => s !== select && s.value === option.value).length;
            option.disabled = utilisations >= ing.quantite;
        });
    });
}
majOptions();

const btnConfirmer = document.getElementById("btnConfirmer");
const recap = document.getElementById("recap");

btnConfirmer.addEventListener("click", function () {

    // Récupération du burger sélectionné
    const burger = localStorage.getItem("burgerSelectionne");

    // Image du burger
    const imagesBurger = {
        "Burger Bœuf": "image/beef-burger.jpg",
        "Burger Bacon": "image/burger_becon.jpg",
        "Burger Étage": "image/burger_etage.jpg",
        "Burger Mini": "image/burger_mini.jpg",
        "Burger Valeria": "image/burger_valeria.jpg",
        "Burger Cheese": "image/burger-cheese.jpg",
        "Burger Régime": "image/burger-regime.jpg",
        "Hamburger Régime": "image/hamburger-regime.jpg",
        "Burger Épicé": "image/spicy-burger.jpg"
    };

    const image = imagesBurger[burger] || "image/default.png";

    // Construction du récapitulatif
    recap.innerHTML = `
        <h2>Récapitulatif de votre commande</h2>
        <p><strong>Burger choisi :</strong> ${burger}</p>

        <img src="${image}" alt="${burger}" style="width:200px; border-radius:10px;">

        <h3>Composition (dans l'ordre) :</h3>
        <ol>
            ${selects.filter(s => s.value).map(s => `<li>${s.value}</li>`).join("")}
        </ol>
    `;
});
