var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* post member_insert */
router.post('/', function (req, res, next) {
  const result = { msg: '등록오류' };

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'happymedi'
  });

  con.connect(function (err) {
    if (err) throw err;
    //console.log(result);
    const sql = `insert into patientsinfos (tel, disease, createdAt, updatedAt) values ('${req.body.tel}', '${req.body.disease}', now(), now()) `;
    con.query(sql, function (err, result) {
      if (err) {
        console.error(err.message);
        res.json(JSON.stringify(result));
      } else {
        result = { msg: '등록완료' };
        res.json(JSON.stringify(result));
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

});
module.exports = router;