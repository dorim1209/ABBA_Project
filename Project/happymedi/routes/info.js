var express = require('express');
var router = express.Router();
const mysql=require('mysql');

/* post login 처리 */
router.post('/', function(req, res, next) {
 const result={msg:''};

 const con=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'mysql',
   database:'happymedi'
 });

 con.connect((err)=>{
   if(err){
     return console.error(err.message);
   }
   console.log("DB연결됨:");
   const sql=`select * from users where tel='${req.body.tel}'`;
   console.log(sql);
   con.query(sql,(err,rs,fields)=>{
     if(err){
       console.error(err.message);
       result.msg='다시 로그인해주세요';
       res.json(JSON.stringify(result));
     }else{
       console.log(rs[0].name);
        let patient_info={
          "이름": rs[0].name,
          "이메일": rs[0].email_id,
          "전화" : rs[0].tel,
          "질병" : rs[0].disease,
          "성별" : rs[0].gender
        };
       result.msg=patient_info
       res.json(JSON.stringify(result)); 
     }
     con.end((err)=>{
       if(err){
         return console.error(err.message);
       }
       console.log("con close");
     });
    
   });
 });
});

module.exports = router;
