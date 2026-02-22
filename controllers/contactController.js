const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = await Contact.create({ name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Portfolio Contact Message',
    text: message
  });

  res.status(201).json({ message: "Message sent successfully" });
};