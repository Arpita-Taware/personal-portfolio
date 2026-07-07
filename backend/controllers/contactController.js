const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body);

    const message = await Contact.create(req.body);

    res.status(201).json({ success: true, message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};