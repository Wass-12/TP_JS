// encore dsl pour ce code broullion du a notre manque de compréhension on a fais fausse route
// merci pour bien veillance et bonne corretion a vous 
const burger = localStorage.getItem("burgerSelectionne");
let ingredientsValides =
    JSON.parse(localStorage.getItem("liste_ingrédients")) || [];

let ingredientTrouve = null;

// Toutes les listes d’ingrédients pour chaque burger (initule creation a la demande du client )
// const ingredientsData = {
//     "Burger Bœuf": [
//         { nom: "Pain brioché" },
//         { nom: "Steak de bœuf" },
//         { nom: "Cheddar" },
//         { nom: "Salade" },
//         { nom: "Tomate" },
//         { nom: "Oignon rouge" },
//         { nom: "Sauce burger" }
//     ],

//     "Burger Bacon": [
//         { nom: "Pain brioché" },
//         { nom: "Steak de bœuf" },
//         { nom: "Bacon grillé" },
//         { nom: "Cheddar" },
//         { nom: "Oignon croustillant" },
//         { nom: "Sauce barbecue" }
//     ],

//     "Burger Étage": [
//         { nom: "Pain brioché" },
//         { nom: "Double steak" },
//         { nom: "Double cheddar" },
//         { nom: "Salade" },
//         { nom: "Tomate" },
//         { nom: "Sauce spéciale" }
//     ],

//     "Burger Mini": [
//         { nom: "Petit pain" },
//         { nom: "Mini steak" },
//         { nom: "Cheddar" },
//         { nom: "Cornichons" },
//         { nom: "Ketchup" }
//     ],

//     "Burger Valeria": [
//         { nom: "Pain brioché" },
//         { nom: "Poulet pané" },
//         { nom: "Salade" },
//         { nom: "Tomate" },
//         { nom: "Sauce blanche" },
//         { nom: "Mozzarella" }
//     ],

//     "Burger Cheese": [
//         { nom: "Pain brioché" },
//         { nom: "Steak de bœuf" },
//         { nom: "Double cheddar" },
//         { nom: "Oignon" },
//         { nom: "Sauce fromage" }
//     ],

//     "Burger Régime": [
//         { nom: "Pain complet" },
//         { nom: "Steak végétal" },
//         { nom: "Salade" },
//         { nom: "Tomate" },
//         { nom: "Concombre" },
//         { nom: "Sauce légère" }
//     ],

//     "Hamburger Régime": [
//         { nom: "Pain complet" },
//         { nom: "Steak végétal" },
//         { nom: "Tomate" },
//         { nom: "Oignon" },
//         { nom: "Sauce vegan" }
//     ],

//     "Burger Épicé": [
//         { nom: "Pain brioché" },
//         { nom: "Steak de bœuf" },
//         { nom: "Jalapeños" },
//         { nom: "Sauce piquante" },
//         { nom: "Cheddar" },
//         { nom: "Oignon rouge" }
//     ]
// };

// On récupère la liste d’ingrédients du burger ( mtn inutile  on cree plus de liste d’ingrédients pour chaque burger, on a une seule liste globale)
// const liste = ingredientsData[burger];



// document.getElementById("titre").textContent = burger;

// On affiche les ingrédients
// if (liste) {
//     liste.forEach(ing => {
//         document.getElementById("liste").innerHTML += `<li>${ing.nom}</li>`;
//     });
// } else {
//     document.getElementById("liste").innerHTML = `
//         <li style="color:red;">Aucun ingrédient trouvé pour ce burger</li>
//     `;
// }
console.log(burger);
console.log("test");
 
// parti sur la compo des burgers

const inputIng = document.getElementById("searchIng");
const resultIng = document.getElementById("resultIng");

inputIng.addEventListener("input", function () {
    const texte = inputIng.value.toLowerCase();

    // On cherche un ingrédient qui correspond inutile  mtn 
    // const match = liste.find(ing => ing.nom.toLowerCase().includes(texte));

    // if (match) {
    //     ingredientTrouve = match;
    //     resultIng.innerHTML = `
    //          <p>Ingrédient trouvé : <strong>${match.nom}</strong></p>
    //     `;
    // } else {
    //     ingredientTrouve = null;
    //     resultIng.innerHTML = `
    //         <p style="color:red;">Aucun ingrédient trouvé</p>
    //     `;
    //     // console.log("Aucun ingrédient trouvé");
    // }
});

// comment stocker les ingrédients trouvés dans le localStorage solution en cours de recherche
const listeIngredientsValides = document.getElementById("listeIngredientsValides");

function afficherIngredientsValides() {
    listeIngredientsValides.innerHTML = "";

    ingredientsValides.forEach(ing => {
        listeIngredientsValides.innerHTML += `<li>${ing.nom} (x${ing.quantite})</li>`;
    });
}
afficherIngredientsValides(); // affiche les ingrédients déjà enregistrés
const btnIngredient = document.getElementById("btnIngredient");

btnIngredient.addEventListener("click", function () {

    // Ingrédient libre saisi par l'utilisateur
    const nom = inputIng.value.trim();
    if (!nom) {
        resultIng.innerHTML = `<p style="color:red;">Saisissez un ingrédient</p>`;
        return;
    }

    // Quantité choisie par l'utilisateur
    const quantite = parseInt(document.getElementById("quantiteIng").value);
    if (!quantite || quantite < 1) {
        resultIng.innerHTML = `<p style="color:red;">Quantité invalide</p>`;
        return;
    }

    // Vérifier si déjà validé
    if (ingredientsValides.some(ing => ing.nom.toLowerCase() === nom.toLowerCase())) {
        resultIng.innerHTML = `<p style="color:red;">Cet ingrédient est déjà validé</p>`;
        return;
    }

    // Ajouter dans ingredientsValides avec la quantité choisie
    ingredientsValides.push({ nom: nom, quantite: quantite });

    // Sauvegarder
    localStorage.setItem(
        "liste_ingrédients",
        JSON.stringify(ingredientsValides)
    );

    // Réafficher les ingrédients validés
    afficherIngredientsValides();
    inputIng.value = "";

    // Message de confirmation
    resultIng.innerHTML = `<p style="color:green;">Ingrédient ajouté : <strong>${nom}</strong></p>`;
});






// localStorage.clear();

// console.log(ingredientsValides);

