const express = require("express")
const app = express();
const routerAppartments = require("./routes/logements")

corsConfiguration();

function corsConfiguration() {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next(); // passe l execution du serveur au middleware suivant  qui traite l'envoie de l'objet reponse des requêtes sur tout type de verbe http
    });
}



app.use("/api-kasa", routerAppartments)

module.exports = app;