var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('my_info', { title: '나의 정보' });
});

module.exports = router;