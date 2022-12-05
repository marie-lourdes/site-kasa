const express = require("express")
const router = express.Router()
const appartementCtrler = require("../controllers/logements")

router.get("/:id", appartementCtrler.getOneLocation)
router.get("/", appartementCtrler.getAllLocations)




module.exports = router