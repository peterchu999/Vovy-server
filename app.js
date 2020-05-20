const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

const activityRouter = require('./routers/activityRouter')

mongoose.connect('mongodb+srv://userMC2:mc2vovey@cluster0-ndxfv.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true, useCreateIndex: true, 
    useUnifiedTopology: true }).then(() => {console.log("connect to db!!")}).catch( err => {console.log(`error: ${err}`)})


app.use('/activities', activityRouter)
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res) => {
    res.json({
        status: 404,
        message: "api not found"
    })
})

app.listen(process.env.PORT,()=>{
    console.log('listening at http://localhost:3000')
})