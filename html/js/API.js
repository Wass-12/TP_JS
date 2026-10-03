// Quand l'utilisateur clique sur "Qui sommes-nous ?"
document.querySelector("#qui_sommes_nous").addEventListener("click", () => {
    console.log("sa fonctionne");


    // URL de l'API
    const url = "https://opendata.agencebio.org/api/gouv_api_swagger.json";

    // fonction qui appel l'API
    fetch(url)
        .then(response => {

            // Vérifier que la requete fonctionne
            if (!response.ok) {
                console.error("Erreur lors de l'appel à l'API");
                return;
            }

            // change la réponse en JSON
            return response.json();
        })
        .then(data => {

            // reponse de l'api
            console.log(data);

        })
        .catch(error => {
            console.error(error);
        });
});