const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const path = require("path")

const app = express()
require("dotenv").config({ path: "./.env" })
db()
app.use(express.static(path.join(__dirname, "build")))
app.use(express.json())  //req.body madhe data aanto
app.use(cors())

app.use("/contact", require("./routes/contactRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT,
    console.log(`SERVER RUNNING http://localhost:${PORT}`))