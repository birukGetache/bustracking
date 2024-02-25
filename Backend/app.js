// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { to, text } = req.body;

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 25,
        auth: {
          user: "62a69cd8c2969b",
          pass: "da77d2e2c25965"
        }
      });

    try {
        let info = await transporter.sendMail({
            from: 'burab1742@gmail.com',
            to: to,
            subject: 'New Email from Your Website',
            text: text
        });

        console.log('Email sent to: %s', info.envelope.to);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send("hellow")
})