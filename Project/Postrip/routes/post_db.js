const express = require('express');

/* models 모듈에서 MyPage 모델을 호출하여 MyPage 로 선언 */
var MyPage = require('../models').MyPage;

const multer = require('multer');
//파일 업로드 모듈

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/mypage/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.single('post_img'), function (req, res) {
  console.log(req.file.filename);

  /* MyPage 테이블의 데이터를 생성하는 SQL문 */
  MyPage.create({
    db_id:req.session.lid,
    db_image: req.file.filename
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result1231231231231231231231231312 : " + result);
      /* result 값을 json 형태로 리턴 */
      req.status(201).json(result);
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
    });
    res.redirect('/mypage2');

});

module.exports = router;