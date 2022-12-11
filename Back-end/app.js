//import de Express pour creer l application et acceder aux methodes et au middleware de traitements des requetes, utilisé dans les fonctions semantiques du dossier controllers
const express = require("express")
const app = express();
//import de l objet router avec ses routes individuelles 
const routerAppartments = require("./routes/logements")

corsConfiguration();

function corsConfiguration() {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        next(); // passe l execution du serveur au middleware suivant  qui traite l'envoie de l'objet reponse des requêtes sur tout type de verbe http
    });
}
// ajout des routes individuelles du Router a la route de base ajouté au niveau de l application "api/kasa/logements"
app.use("/api-kasa/logements/", routerAppartments)

module.exports = app;