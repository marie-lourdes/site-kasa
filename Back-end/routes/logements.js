const express = require("express")
//import du router de express
const router = express.Router()
//import du module controllers  les methodes semantique du controllers pour chaque route individuelle
const appartementCtrler = require("../controllers/logements")

// creation des routes individuelles au nieveau du Router
router.get("/:id", appartementCtrler.getOneLocation)
router.get("/", appartementCtrler.getAllLocations)

module.exports = router