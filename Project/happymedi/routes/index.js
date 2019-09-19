var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: req.session.name,
    confirm: req.session.confirm,
    docadm: req.session.docadm });
});

module.exports = router;
