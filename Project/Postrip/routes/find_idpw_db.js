const express = require('express');

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;

const router = express.Router();

/* post 방식으로 호출된 router를 처리 */
router.post('/', function (req, res, next) {

  if (req.body.find_id_email && req.body.find_id_name) {
    /* User 테이블의 데이터를 가져오는 SQL문 */
  User.findAll({

    /* db_business_num, db_id, db_pw 값을 가져옴 */
    attributes: ['db_id'],

    /* 조건과 값이 일치하는 경우 */
    where: {
      db_email: req.body.find_id_email,
      db_name: req.body.find_id_name
    }
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result : " + JSON.stringify(result));

      let DB1 = JSON.stringify(result);
      console.log("JSON.parse(DB1) : " + JSON.parse(DB1));
      let DB2 = JSON.parse(DB1);
      let DB = DB2[0];

      console.log("login.req.session.login : " + req.session.login);

      /* DB의 키 값이 존재하지 않을때 까지 반복 */
      for (key in DB) {
        if (key === "db_id") {

          console.log("db_name : " + DB[key]);
          req.session.find_id = DB[key];
          req.session.id_login = true;
        }
      }

      /* result 값을 json 형태로 리턴 */
      /* res.json(JSON.stringify(result)); */
      res.redirect('/');
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
      next(err);
    });

  } else if (req.body.find_pw_email && req.body.find_pw_id) {
      /* User 테이블의 데이터를 가져오는 SQL문 */
  User.findAll({

    /* db_business_num, db_id, db_pw 값을 가져옴 */
    attributes: ['db_pw'],

    /* 조건과 값이 일치하는 경우 */
    where: {
      db_email: req.body.find_pw_email,
      db_id: req.body.find_pw_id
    }
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result : " + JSON.stringify(result));

      let DB1 = JSON.stringify(result);
      console.log("JSON.parse(DB1) : " + JSON.parse(DB1));
      let DB2 = JSON.parse(DB1);
      let DB = DB2[0];

      console.log("login.req.session.login : " + req.session.login);

      /* DB의 키 값이 존재하지 않을때 까지 반복 */
      for (key in DB) {
        if (key === "db_pw") {

          console.log("db_pw : " + DB[key]);
          req.session.find_pw_pw = DB[key];
          req.session.pw_login = true;
        }
      }

      /* result 값을 json 형태로 리턴 */
      /* res.json(JSON.stringify(result)); */
      res.redirect('/');
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
      next(err);
    });

  }

});

module.exports = router;