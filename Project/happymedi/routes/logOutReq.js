var express = require('express');
var router = express.Router();

/* post Logout */
router.get('/', function(req, res, next) {
  //biz
  console.log('셰션ID= ',req.sessionID);
    req.session.destroy(function(err){
      res.redirect('/');
    });
});

module.exports = router;