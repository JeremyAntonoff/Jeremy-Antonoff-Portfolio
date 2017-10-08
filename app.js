const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.render('home')
});

app.post("/contact", function(req, res){
  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          user: process.env.mailerUSERPORT,
          pass: process.env.mailerPASSPORT
  });

  let mailOptions = {
      from: req.body.name,
      to: 'jeremyantonoff@gmail.com',
      subject: 'New Message from Portfolio!',
      html: '<h2>' + req.body.name + '<br></h2><h2>' + req.body.email + '<br></h2><p>' + req.body.message  + '</p>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.end('failure');
    } else {
      console.log('message-sent')
      res.end('success');
    }
  });
});

app.listen(8081, function() {
  console.log('Server has started');
});
