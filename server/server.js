const express = require("express")
const cors = require("cors")
require("dotenv").config()


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')





const app = express()



app.use(express.json())
app.use(cors())

const {home, styles, javascript} = require('./pageCtrl')

app.get("/", home)
app.get("/styles", styles)
app.get("/javascript", javascript)
app.post('/test', (req, res) => {
    try {
     slkfelswefjl()
    } catch {
     rollbar.critical('You are ugly')
    }


    try{
        bwvhisbvi()
    }catch{
        rollbar.warning('do not go through this path')
    }

});
const {PORT} = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))