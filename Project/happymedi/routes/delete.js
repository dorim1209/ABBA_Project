var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* post member_insert */
router.post('/', function (req, res, next) {
  const result = { msg: '' };

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'happymedi'
  });

  con.connect(function (err) {
    if (err) throw err;
    //console.log(result);
    let sql = `DELETE FROM users WHERE tel = '${req.body.tel}'`;
    con.query(sql, function (err, result) {
      if (err) {
        console.error(err.message);
      } else {
        result.msg=`탈퇴완료`;
      }
    });

    sql = `DELETE FROM patientsinfos WHERE tel = '${req.body.tel}'`;
    con.query(sql, function (err, result) {
      if (err) {
        console.error(err.message);
      } else {
        result.msg=`탈퇴완료`;
      }
    });
    con.end(function (err) {
      if(err) {
        console.log("DB연결 에러");
        console.error(err.message);
      } else {
        console.log("DB연결 종료");
      }
    })
  });
  req.session.destroy(function(err){
    res.redirect('/my_info');
  });
});
module.exports = router;