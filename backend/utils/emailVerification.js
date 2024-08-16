const nodemailer = require('nodemailer')

const sendVerificationEmail = async (email, verificationLink) => {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    let mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: 'Verify your email address',
      text: `Click the following link to verify your email: ${verificationLink}`,
      html: `<a href="${verificationLink}">Verify your email</a>`,
    };
  
    await transporter.sendMail(mailOptions);
  }

module.exports = sendVerificationEmail