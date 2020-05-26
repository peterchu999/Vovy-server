const indorelawanData = require('./indorelawan')
const crawlData = async() => {
    return [
        ...await indorelawanData()
    ]
}


module.exports = crawlData