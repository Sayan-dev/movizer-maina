const nodemailer = require('nodemailer');


exports.transport = nodemailer.createTransport( {
    service: 'gmail',
    auth: {
      user: 'growmentro@gmail.com',
      pass: 'Growmentro@123'
    }
})