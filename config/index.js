if (process.env.APP_STATE === 'dev'){
    const dotenv = require('dotenv')
    dotenv.config()
}

module.exports ={
    port: process.env.PORT,
    dbUrl: process.env.DBURL,
    ip: process.env.IP,
    key: process.env.KEY,
    keyId: process.env.KEY_ID,
    teamId: process.env.TEAM_ID
}