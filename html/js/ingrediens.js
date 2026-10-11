const burger = localStorage.getItem("burgerSelectionne");
document.getElementById("titre").textContent = burger;
const ingredientsValides =
    JSON.parse(localStorage.getItem("liste_ingrédients")) || [];

let ingredientTrouve = null;

// Toutes les listes d’ingrédients pour chaque burger
const ingredientsData = {
    "Burger Bœuf": [
        { nom: "Pain brioché", quantite: 1 },
        { nom: "Steak de bœuf", quantite: 3 },
        { nom: "Cheddar", quantite: 3 },
        { nom: "Salade", quantite: 3 },
        { nom: "Tomate", quantite: 3 },
        { nom: "Oignon rouge", quantite: 3 },
        { nom: "Sauce burger", quantite: 3 }
    ],

    "Burger Bacon": [
        { nom: "Pain brioché", quantite: 3 },
        { nom: "Steak de bœuf", quantite: 3 },
        { nom: "Bacon grillé", quantite: 3 },
        { nom: "Cheddar", quantite: 3 },
        { nom: "Oignon croustillant", quantite: 3 },
        { nom: "Sauce barbecue", quantite: 3 }
    ],

    "Burger Étage": [
        { nom: "Pain brioché", quantite: 3 },
        { nom: "Double steak", quantite: 3 },
        { nom: "Double cheddar", quantite: 3 },
        { nom: "Salade", quantite: 3 },
        { nom: "Tomate", quantite: 3 },
        { nom: "Sauce spéciale", quantite: 3 }
    ],

    "Burger Mini": [
        { nom: "Petit pain", quantite: 3 },
        { nom: "Mini steak", quantite: 3 },
        { nom: "Cheddar", quantite: 3 },
        { nom: "Cornichons", quantite: 3 },
        { nom: "Ketchup", quantite: 3 }
    ],

    "Burger Valeria": [
        { nom: "Pain brioché", quantite: 3 },
        { nom: "Poulet pané", quantite: 3 },
        { nom: "Salade", quantite: 3 },
        { nom: "Tomate", quantite: 3 },
        { nom: "Sauce blanche", quantite: 3 },
        { nom: "Mozzarella", quantite: 3 }
    ],

    "Burger Cheese": [
        { nom: "Pain brioché", quantite: 3 },
        { nom: "Steak de bœuf", quantite: 3 },
        { nom: "Double cheddar", quantite: 3 },
        { nom: "Oignon", quantite: 3 },
        { nom: "Sauce fromage", quantite: 3 }
    ],

    "Burger Régime": [
        { nom: "Pain complet", quantite: 3 },
        { nom: "Steak végétal", quantite: 3 },
        { nom: "Salade", quantite: 3 },
        { nom: "Tomate", quantite: 3 },
        { nom: "Concombre", quantite: 3 },
        { nom: "Sauce légère", quantite: 3 }
    ],

    "Hamburger Régime": [
        { nom: "Pain complet", quantite: 3 },
        { nom: "Steak végétal", quantite: 3 },
        { nom: "Tomate", quantite: 3 },
        { nom: "Oignon", quantite: 3 },
        { nom: "Sauce vegan", quantite: 3 }
    ],

    "Burger Épicé": [
        { nom: "Pain brioché", quantite: 3 },
        { nom: "Steak de bœuf", quantite: 3 },
        { nom: "Jalapeños", quantite: 3 },
        { nom: "Sauce piquante", quantite: 3 },
        { nom: "Cheddar", quantite: 3 },
        { nom: "Oignon rouge", quantite: 3 }
    ]
};

// On récupère la liste d’ingrédients du burger
const liste = ingredientsData[burger];



// document.getElementById("titre").textContent = burger;

// On affiche les ingrédients
if (liste) {
    liste.forEach(ing => {
        document.getElementById("liste").innerHTML += `<li>${ing.nom} (x${ing.quantite})</li>`;
    });
} else {
    document.getElementById("liste").innerHTML = `
        <li style="color:red;">Aucun ingrédient trouvé pour ce burger</li>
    `;
}
console.log(burger);
console.log("test");
 
// parti sur la compo des burgers

const inputIng = document.getElementById("searchIng");
const resultIng = document.getElementById("resultIng");

inputIng.addEventListener("input", function () {
    const texte = inputIng.value.toLowerCase();

    // On cherche un ingrédient qui correspond
    const match = liste.find(ing => ing.nom.toLowerCase().includes(texte));

    if (match) {
        ingredientTrouve = match;
        resultIng.innerHTML = `
             <p>Ingrédient trouvé : <strong>${match.nom}</strong></p>
        `;
    } else {
        ingredientTrouve = null;
        resultIng.innerHTML = `
            <p style="color:red;">Aucun ingrédient trouvé</p>
        `;
        // console.log("Aucun ingrédient trouvé");
    }
});

// comment stocker les ingrédients trouvés dans le localStorage solution en cours de recherche
const listeIngredientsValides = document.getElementById("listeIngredientsValides");

function afficherIngredientsValides() {
    listeIngredientsValides.innerHTML = "";

    ingredientsValides.forEach(ing => {
        listeIngredientsValides.innerHTML += `<li>${ing.nom}</li>`;
    });
}
const btnIngredient = document.getElementById("btnIngredient");

btnIngredient.addEventListener("click", function () {

    if (!ingredientTrouve) {
        resultIng.innerHTML = `<p style="color:red;">Aucun ingrédient sélectionné</p>`;
        return;
    }

    // Trouver l’ingrédient dans la liste du burger
    const ingOriginal = liste.find(ing => ing.nom === ingredientTrouve.nom);

    // Vérifier si stock épuisé
    if (ingOriginal.quantite <= 0) {
        resultIng.innerHTML = `<p style="color:red;">Stock épuisé pour : <strong>${ingOriginal.nom}</strong></p>`;
        return;
    }

    // Vérifier si déjà validé
    if (ingredientsValides.includes(ingredientTrouve)) {
        resultIng.innerHTML = `<p style="color:red;">Cet ingrédient est déjà validé</p>`;
        return;
    }

    // Ajouter dans ingredientsValides
    ingredientsValides.push(ingredientTrouve);

    // Retirer 1 du stock
    ingOriginal.quantite--;

    // Réafficher la liste principale
    document.getElementById("liste").innerHTML = "";
    liste.forEach(ing => {
        document.getElementById("liste").innerHTML += `<li>${ing.nom} (x${ing.quantite})</li>`;
    });

    // Sauvegarder
    localStorage.setItem(
        "liste_ingrédients",
        JSON.stringify(ingredientsValides)
    );

    // Réafficher les ingrédients validés
    afficherIngredientsValides();

    // Message de confirmation
    resultIng.innerHTML = `<p style="color:green;">Ingrédient ajouté : <strong>${ingredientTrouve.nom}</strong></p>`;
});






localStorage.clear();

// console.log(ingredientsValides);

