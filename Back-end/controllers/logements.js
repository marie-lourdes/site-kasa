const data = require("../data/logements.json")
//console.log(data)

exports.getAllAppartments = (req, res) => {
    try {
        const appartmentData = data.map((element) => element)
        res.status(200).json({ appartmentData })
        console.log("requete appartement reussie")
    } catch (error) {
        res.status(404).json({ error: "page not found" })
        console.log("requête appartement echouée")
    }




}