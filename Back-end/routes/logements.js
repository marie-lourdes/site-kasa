const express = require("express")
const router = express.Router()
const appartementCtrler = require("../controllers/logements")

router.get("/:id", appartementCtrler.getOneAppartment)
router.get("/", appartementCtrler.getAllAppartments)




module.exports = router