const apn = require('apn')
const {key, keyId, teamId} = require('../config')



var options = {
    token: {key, keyId, teamId},
    production: false
  };
  
  var apnProvider = new apn.Provider(options);
