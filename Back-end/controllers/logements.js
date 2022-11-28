const data = require("../data/logements.json")
console.log(data)

exports.getAllAppartments = (req, res) => {

    res.status(200).json({ data })

}