var express = require('express');
var router = express.Router();

/* GET helloworld page. */
router.get('/', function(req, res, next) {
  res.render('helloworld', { title: 'Express' });
  //res.send('respond with a resource');
});

module.exports = router;
