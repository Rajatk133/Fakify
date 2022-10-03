const express = require('express')
const port = 5000
const app = express()




app.get('/',(req,res) => {
   res.send("Hello world")
})


app.listen(port,(req,res) => {
    console.log("Server is Up and Running at: "+port)
})