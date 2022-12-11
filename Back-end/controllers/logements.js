const data = require("../data/logements.json")
const validate = require("../model/shema.js")
//console.log(data)

// configuration des operations/requêtes Crud : READ  pour envoyer au requerant en reponse de la requête toutes les locations ou un seul selon le parametre de recherche "id" de location
// envoit de la reponse avec une location selon l id
exports.getOneLocation = (req, res) => {
    try {
        const query = req.params.id
        const location = data.find(({ id }) => id === query)
        if (!validate(location)) {
            console.log("erreor", validate.errors)
            res.status(500).json({ error: "error data" })

        }
        res.status(200).json(location)
        console.log("requête d'une location reussie")

    } catch (error) {
        res.status(404).json({ error: "page not found" })
        console.log("requête d'une location echouée")
    }
};
// envoi de la reponse avec toutes les locations de l api
exports.getAllLocations = (req, res) => {
    try {
        const allLocations = data.map((element) => {
            if (!validate(element)) {
                console.log("erreor", validate.errors.message)

                throw "données erronées"

            }
            return element
        })

        res.status(200).json({ allLocations })
        console.log("requete des locations reussie")


    } catch (error) {

        res.status(400).json({ error: "bad request" })
        console.log("requête des locations echouée")
    }
};


