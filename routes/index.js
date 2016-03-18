var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/rooms', function(req, res, next) {
  // Go to views directory
  // Find a file named 'room'
  // Run in through the template engine (handlbars)
  // Stick it in the layout
  // Send it back to the browser
  res.render('room', {
    strawberry: req.body.roomName
  });
  // res.send(req.body.roomName.toUpperCase())
});

module.exports = router;
