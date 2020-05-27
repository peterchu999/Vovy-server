const apn = require('apn')
const {key, keyId, teamId} = require('../config')

const providerOptions = {
    token: {key, keyId, teamId},
    production: false
};

const apnProvider = new apn.Provider(providerOptions);

const generateNote = (alert, sound = "ping.aiff", badge = 1, topic = "Alfon.vovy") => {
  let note = new apn.Notification()
  note.expiry = Math.floor(Date.now() / 1000) + 3600;
  note.badge = badge;
  note.sound = sound;
  note.alert = alert;
  note.topic = topic;
  return note
}

const notify = (token, body = "please checkour new volunteering activity", title = "New Volunteering Opportunity") => {
  const note = generateNote({
    title,
    body
  })
  console.clear()
  console.log(token + "from token")
  apnProvider.send(note, token).then( (result) => {
    // see documentation for an explanation of result
    // console.log(result.failed)
  });
}

module.exports = notify
