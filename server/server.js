const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()


app.use(express.json())
app.use(cors())

const {home, styles} = require('./pageCtrl')

app.get("/", home)
app.get("/styles", styles)

const {PORT} = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))