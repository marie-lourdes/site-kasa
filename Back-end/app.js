const express = require("express")
const app = express();

corsConfiguration();

function corsConfiguration() {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next(); // passe l execution du serveur au middleware suivant  qui traite l'envoie de l'objet reponse des requêtes sur tout type de verbe http
    });
}

app.get("/", (req, res) => {
    res.status(200).json({ message: "requete reussi" })
})

module.exports = app;