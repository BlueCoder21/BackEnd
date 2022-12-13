const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// POST route
router.post("/submit-form", function (req, res) {
  const senderName = req.body.senderName;
  const movie = req.body.movie;
  const fruit = req.body.fruit;
  const videoGame = req.body.videoGame;
  let content = `Sent by: ${senderName} 
  Favorite Movie: ${movie}
  Favorite Fruit: ${fruit}
  Favorite Video Game: ${videoGame}`;
  fs.appendFile(path.join(__dirname, "../message.txt") ,content, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.render(`Submitted`);
  });
});

module.exports = router;
