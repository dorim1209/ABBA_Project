var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* post login 처리 */
router.post('/', function (req, res, next) {
  let result = { msg: '', msg2: '' };

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'happymedi'
  });

  con.connect((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("DB연결됨:");
    /* let sql = `select * from users where tel='${req.body.find_tel}'`;
    //let sql = `select tel, disease from patientsinfos where tel='${req.body.find_tel}'`;
    console.log(sql);

    con.query(sql, (err, rs, fields) => {
      if (err) {
        console.error(err.message);
        result.msg = '전화번호를 다시 입력해주세요.';
        res.json(JSON.stringify(result));
      } else {
        //console.log(rs[0].disease);
        //console.log(rs[1].disease);

        let patient_info = {
          "이름": rs[0].name,
          "이메일": rs[0].email_id,
          //"성별": rs[0].gender,
        };

        // 2차 검색
        sql = `select tel, disease from patientsinfos where tel='${req.body.find_tel}'`;
        con.query(sql, (err, rs, fields) => {
          if (err) {
            console.error(err.message);
            result.msg = '전화번호를 다시 입력해주세요.';
          } else {
            patient_info2 = {
              "휴대전화번호": rs[0].tel,
              "진료기록": rs[0].disease,
            };
            result.msg2 = patient_info2;
            console.log(result.msg2);
          };
        });
        console.log(result.msg2);
        result.msg = patient_info;
        res.json(JSON.stringify(result));
      }
      con.end((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("con close");
      });
    }); */

    //let sql = `select email, name, gender, telnumber, disease from patientsview where telnumber='${req.body.find_tel}'`;
    let sql = `select users.email_id, users.name, users.gender, patientsinfos.tel, patientsinfos.disease, patientsinfos.createdAt
    from users inner join patientsinfos on users.tel = patientsinfos.tel
    where users.tel='${req.body.find_tel}';`;

    con.query(sql, (err, rs, fields) => {
      if (err) {
        console.error(err.message);
        result.msg = '전화번호를 다시 입력해주세요.';
        res.json(JSON.stringify(result));
      } else {
        //console.log(rs[0].disease);
        //console.log(rs[1].disease);

        let patient_info = {
          이메일: rs[0].email_id,
          이름: rs[0].name,
          전화번호: rs[0].tel,
          성별: rs[0].gender,
        };

        let patient_info2=[];

        rs.forEach (xx => {
          patient_info2.push(xx.createdAt, xx.disease);
        });
        //console.log(patient_info);

        result.msg = patient_info;
        result.msg2 = patient_info2;
        console.log(result.msg2);
        res.json(JSON.stringify(result));
      }
      con.end((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("con close");
      });
    });
  });
});

module.exports = router;