const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

const activityRouter = require('./routers/activityRouter')

mongoose.connect('mongodb://localhost/mc_2', {useNewUrlParser: true, useCreateIndex: true, 
    useUnifiedTopology: true }).then(() => {console.log("connect to db!!")}).catch( err => {console.log(`error: ${err}`)})


app.use('/activities', activityRouter)
app.use(bodyParser.urlencoded({ extended: true }))



app.listen(3000,()=>{
    console.log('listening at http://localhost:3000')
})