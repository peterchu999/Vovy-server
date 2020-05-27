const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cron = require("./cron");
const app = express();
const {dbUrl, port} = require('./config')
const notify = require('./apple-notification')

const activityRouter = require('./routers/activityRouter')
const defaultRouter = require('./routers/defaultRouter')
const userRouter = require('./routers/userRouter')



mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(()=>console.log(dbUrl))
.catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))

// cron()

notify('068f9240f9b5272e2b66da53eef6ef45a40f5146d04dd7de9e87b6c93404cfba','testing')

app.use('/activities', activityRouter)
app.use('/users',userRouter)
app.use('*', defaultRouter)

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})