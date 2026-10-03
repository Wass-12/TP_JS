const burger = localStorage.getItem("burgerSelectionne");

// Toutes les listes d’ingrédients pour chaque burger
const ingredientsData = {
    "Burger Bœuf": [
        "Pain brioché",
        "Steak de bœuf",
        "Cheddar",
        "Salade",
        "Tomate",
        "Oignon rouge",
        "Sauce burger"
    ],

    "Burger Bacon": [
        "Pain brioché",
        "Steak de bœuf",
        "Bacon grillé",
        "Cheddar",
        "Oignon croustillant",
        "Sauce barbecue"
    ],

    "Burger Étage": [
        "Pain brioché",
        "Double steak",
        "Double cheddar",
        "Salade",
        "Tomate",
        "Sauce spéciale"
    ],

    "Burger Mini": [
        "Petit pain",
        "Mini steak",
        "Cheddar",
        "Cornichons",
        "Ketchup"
    ],

    "Burger Valeria": [
        "Pain brioché",
        "Poulet pané",
        "Salade",
        "Tomate",
        "Sauce blanche",
        "Mozzarella"
    ],

    "Burger Cheese": [
        "Pain brioché",
        "Steak de bœuf",
        "Double cheddar",
        "Oignon",
        "Sauce fromage"
    ],

    "Burger Régime": [
        "Pain complet",
        "Steak végétal",
        "Salade",
        "Tomate",
        "Concombre",
        "Sauce légère"
    ],

    "Hamburger Régime": [
        "Pain complet",
        "Steak végétal",
        "Tomate",
        "Oignon",
        "Sauce vegan"
    ],

    "Burger Épicé": [
        "Pain brioché",
        "Steak de bœuf",
        "Jalapeños",
        "Sauce piquante",
        "Cheddar",
        "Oignon rouge"
    ]
};

document.getElementById("titre").textContent = burger;
