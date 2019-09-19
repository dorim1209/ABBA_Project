const express = require('express');

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;

const multer = require('multer');
//파일 업로드 모듈

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})
const upload = multer({ storage: storage });

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;
const router = express.Router();




router.post('/', upload.single('img'), function (req, res) {
  console.log(req.file.filename);

  /* User 테이블의 데이터를 생성하는 SQL문 */
  User.create({
    db_email: req.body.join_email,
    db_id: req.body.join_id,
    db_name: req.body.join_name,
    db_pw: req.body.join_pw,
    db_birth: req.body.year + '-' + req.body.month + '-' + req.body.day,
    db_image: req.file.filename
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result : " + result);
      /* result 값을 json 형태로 리턴 */
      req.status(201).json(result);
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
    });

    res.redirect('/');
});

module.exports = router;