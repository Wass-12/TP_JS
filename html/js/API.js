// Quand l'utilisateur clique sur "Qui sommes-nous ?"
document.querySelector("#qui_sommes_nous").addEventListener("click", () => {
//window.location.href = "qui_sommes_nous.html";

// URL de l'API
    const url = "https://opendata.agencebio.org/api/gouv/operateurs/?siret=79317749400028";

    // fonction qui appel l'API
    fetch(url)
        .then(response => {

            // Vérifier que la requete fonctionne
            if (!response.ok) {
                console.error("erreur");
                return;
            }

            // Transformer la réponse en JSON
            return response.json();
        })
        .then(data => {

            // donnée renvoyer par la console
            console.log(data.items[0].numeroBio);
            console.log(data.items[0].gerant);
            console.log(data.items[0].adressesOperateurs[0].ville);
            console.log(data.items[0].adressesOperateurs[0].lieu);
            console.log(data.items[0].adressesOperateurs[0].codePostal);
            //console.log(data.items[0].productions[0].nom); // test en brut
            //console.log(data.items[0].productions); // test en brut

            const productions = data.items[0].productions;

            //afficache de la phrase
            const resultat = document.querySelector("#resultat-api");

            const numeroBio = data.items[0].numeroBio;
            const gerant = data.items[0].gerant;
            const ville = data.items[0].adressesOperateurs[0].ville;
            const lieu = data.items[0].adressesOperateurs[0].lieu;
            const codePostal = data.items[0].adressesOperateurs[0].codePostal;

            let texteProductions = "";

            productions.forEach(production => {
                console.log(production.nom);
                texteProductions += production.nom + ", ";
            });

            resultat.textContent =
            `Notre restaurant travaille avec des produits locaux provenant de la ferme bio numéro « ${numeroBio} » de Monsieur « ${gerant} » située à l’adresse « ${lieu} » « ${codePostal} » « ${ville} ». Cette ferme intervient dans les commerces : ${texteProductions}`;

        })//bravo tu as réussi
        
        .catch(error => {
            console.error(error);
        });

}); // ferme le addEventListener

//voila le code bonne chance pour demain tu en auras besoin
//le siret fonctionne ta plus qu'a trouver comment l'implementer dans le code
//siret mis test data a faire bonne chance