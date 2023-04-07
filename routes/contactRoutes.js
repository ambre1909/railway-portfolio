const { addContactInfo, getAllContactInformation } = require("../controllers/contactController")

const router = require("express").Router()

router
    .get("/", getAllContactInformation)
    .post("/add", addContactInfo)



module.exports = router