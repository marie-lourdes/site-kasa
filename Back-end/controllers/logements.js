//import de la base de données json
const data = require("../data/logements.json")
//import du module logger crée avec Winston , pour consigner les logs
const logger = require("../logger")
// import du model et du shema compilé avec le model construis avec le module de node  AJV
const validate = require("../model/logements.js")

// configuration des operations/requêtes Crud : READ  pour envoyer au requerant en reponse de la requête toutes les locations ou un seul selon le parametre de recherche "id" de location
// envoit de la reponse avec une location selon l id
exports.getOneLocation = (req, res) => {
    try {
        const query = req.params.id
        // on cherche la location par l id qui correspond a la valeur de l id  du parametre avec la methode  find qui renvoit la location selon le critere de comparaison id=== parametre de la requete
        const location = data.find(({ id }) => id === query)


        res.status(200).json(location)
        console.log("requête d'une location reussie")
        //validation(et log)de type de données d un location par son id de la base de données avec le shema de la librairie ajv 
        if (!validate(location)) {
            validate.errors.map(error => {
                const errorType = `page location/id location:${location.id}/${error.instancePath.slice(1)}: ${error.message}`
                logger.error(errorType)
            })
        }

    } catch (error) {
        res.status(404).json({ error: "page not found" })
        console.log("requête d'une location echouée")
    }
};
// envoi de la reponse avec toutes les locations de l api
exports.getAllLocations = (req, res) => {
    try {
        const allLocations = data.map((element) => {
            //validation de type de données de la base de données avec le shema de la librairie ajv 
            if (!validate(element)) {
                validate.errors.map(error => {
                    const errorType = `page home/${error.instancePath.slice(1)}: ${error.message}`
                    logger.error(errorType)
                })
            }
            // si aucune erreur de type dans la base de données on envoit  les element de la base de données dans la variables allLocation qu on envoit par la suite dans la reponse de la requete http
            return element
        })

        res.status(200).json({ allLocations })
        console.log("requete des locations reussie")
    } catch (error) {
        // en cas d erreur de requête cote client on envoit le status 400 et le message
        res.status(400).json({ error: "bad request" })
        console.log("requête des locations echouée")
    }
};


