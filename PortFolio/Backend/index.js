const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  console.log("Request body:", req.body);
  const { name, email, message } = req.body;
  console.log("Fields:", name, email, message);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
})

app.listen(process.env.PORT, () => {
    console.log('Server Start......')
})