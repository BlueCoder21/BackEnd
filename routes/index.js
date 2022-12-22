var express = require('express');
var router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/submit',function(req,res){
  let name = req.body.name
  let email = req.body.email
  let number = req.body.number
  fs.appendFile('Registration.txt',`Name: ${name}, Email: ${email}, Number of persons: ${number}\n`, function(b){
    if(b){
      console.log(b);
    }
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'karan.jain2510@gmail.com',
        pass: 'zdifrsmsdguxdksh'
      }
    });
    var mailOptions = {
      from: ' karan.jain2510@gmail.com',
      to: req.body.email,
      subject: 'Successfully Tickets Booked',
      text: 'Congratulation tou have successfully booked the ticket for  the upcoming event'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.render('success')
      }
    });
  });
});



module.exports = router;