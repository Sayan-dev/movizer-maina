const nodemailer = require('nodemailer');


exports.transport = nodemailer.createTransport( {
    service: 'gmail',
    auth: {
      user: 'movizersport@gmail.com',
      pass: '!ata!.1234'
    }
})