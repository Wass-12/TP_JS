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
        liste_ingredients_final.innerHTML += `<li>${ing.nom}</li>`;
    });
}

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

        <h3>Ingrédients sélectionnés :</h3>
        <ul>
            ${ingredientsValides.map(ing => `<li>${ing.nom}</li>`).join("")}
        </ul>
    `;
});
console.log(burger);
console.log(imagesBurger[burger]);
