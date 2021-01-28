let admin = require('firebase-admin');
let serviceAccount = require('./service/service_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;