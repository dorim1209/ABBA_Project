var express = require('express');
var router = express.Router();
const {users} = require('../models');

/* POST Join insert */
router.post('/', function(req, res, next) {
  // sequelize 이용하여 DB연동
    const result={msg:''};

    console.log(req.body.tel);

     users.create({
      email_id: req.body.email,
      name: req.body.name,
      paswdd:req.body.userPaswdd,
      tel: req.body.tel,
      gender:req.body.gender
    })
    .then((rs)=>{
      console.log(rs);
      result.msg=`${req.body.name}님 가입되셨습니다`;
      res.json(JSON.stringify(result));
    })
    .catch((err)=>{
      console.error(err);
      result.msg=`가입오류`;
      res.json(JSON.stringify(result));
    });

});

module.exports = router;