// Quand l'utilisateur clique sur "Qui sommes-nous ?"
document.querySelector("#qui_sommes_nous").addEventListener("click", () => {

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
        productions.forEach(productions => {
    console.log(productions.nom);
});
//bravo tu as réussi
        })
        .catch(error => {
            console.error(error);
        });
});

//voila le code bonne chance pour demain tu en auras besoin
//le siret fonctionne ta plus qu'a trouver comment l'implementer dans le code
//siret mis test data a faire bonne chance 