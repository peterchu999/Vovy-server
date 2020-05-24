const dotenv = require('dotenv')
if (process.env.APP_STATE === 'dev'){
    dotenv.config()
}

module.exports ={
    port: process.env.PORT,
    dbUrl: process.env.DBURL,
    ip: process.env.IP
}