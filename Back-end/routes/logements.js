const express = require("express")
const router = express.Router()
const appartementCtrler = require("../controllers/logements")

router.get("/logements", appartementCtrler.getAllAppartments)


module.exports = router