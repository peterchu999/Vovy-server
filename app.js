const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cron = require("./cron");
const app = express();
const {dbUrl, port} = require('./config')

const activityRouter = require('./routers/activityRouter')
const defaultRouter = require('./routers/defaultRouter')



mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=>console.log('connected!!!'))
.catch((err) => console.log(err))


cron()

app.use('/activities', activityRouter)
app.use('*', defaultRouter)
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})