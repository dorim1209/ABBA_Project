var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("index.req.session.login : " + req.session.login);
  res.render('index', {
    loginState: req.session.login,
    name: req.session.name
  });
});

module.exports = router;
