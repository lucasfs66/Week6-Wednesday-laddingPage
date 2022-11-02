const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors)

const home = require('./pageCtrl')

app.get('/', home)

const {PORT} = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))