var express = require('express');
var router = express.Router();
//const mysql = require('mysql');
const { users } = require('../models');

/* POST Login Req. */
router.post('/', function (req, res, next) {
  let result = {
    msg: '로그인 오류',
    confirm: false,
  };
  
    users.findOne({
      attributes: ['Doctrue', 'email_id', 'name', 'paswdd'],
      where: { email_id: req.body.id, paswdd: req.body.paswdd }
    }).then((data) => {
      if (data) {
        //console.log(req.sessionID);
        //console.log(data.name);
        //req.session.email=req.body.loginEmail;
        //req.session.name=data.name;
        result.msg = data.name;
        result.confirm = true;
        req.session.name = data.name;
        req.session.confirm = true;
        //req.session.email = data.email_id;
        req.session.docadm = data.Doctrue;
        console.log(data.Doctrue);
        //console.log(result);
      } else {
        //console.log(data.name);
        result.msg = `아이디 또는 비밀번호가 틀렸습니다. 다시 로그인 해주세요`;
        //console.log(result);
      }
      //console.log(JSON.stringify(result));
      res.json(JSON.stringify(result));
      //res.render('index');
      //res.redirect('/');
    }).catch((err) => {
      console.error(err);
      //console.log(data);
      result.msg = `로그인오류`;
      res.json(JSON.stringify(result));
      //res.redirect('/');
    });
});

module.exports = router;