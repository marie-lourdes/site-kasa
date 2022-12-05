const data = require("../data/logements.json")
//console.log(data)

exports.getOneAppartment = (req, res) => {

    try {
        const query = req.params.id
        const oneAppartment = data.find(({ id }) => id === query)
        console.log("oneAPPARTEMENT", oneAppartment)
        res.status(200).json({ oneAppartment })

    } catch (error) {
        res.status(404).json({ error: "page not found" })
        console.log("requête appartement echouée")

    }


};
exports.getAllAppartments = (req, res) => {
    try {
        const appartmentData = data.map((element) => element)
        res.status(200).json({ appartmentData })
        console.log("requete des appartement reussie")

    } catch (error) {
        res.status(404).json({ error: "page not found" })
        console.log("requête des appartement echouée")
    }




};


