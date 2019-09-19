var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var sequelizer=require('./models').sequelize;
var bodyParser = require('body-parser');

//var connect = require('./schemas');

// const SequelizeAuto = require('sequelize-auto');
// const auto = new SequelizeAuto('nodejs','root','mysql',{
//  host:'localhost',
//  port:'3306'
// });
// auto.run((err)=>{
//  if(err) throw err;
// })

var app = express();
sequelizer.sync(); //(==>DB에 테이블이 생긴다)
//connect();    // mongoDB 연결

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('cookiesParser&secret???'));
app.use(session({
  // name:'shin',
  // timout:30,
  resave:false,//재할당
  saveUninitialized:false,//저장 내용없으면 할당 받지 않겠다.
  secret:'cookiesParser&secret????',
  cookie:{
    httpOnly:true,
    secure:false,
    maxAge:(30*60*1000)
  }
  }));
  app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/index', require('./routes/index'));
app.use('/map', require('./routes/map'));
app.use('/users', require('./routes/users'));
app.use('/healthinfo', require('./routes/healthinfo'));
app.use('/healthinfo_temp', require('./routes/healthinfo_temp'));
app.use('/join', require('./routes/join'));
app.use('/joinReq', require('./routes/joinReq'));
app.use('/loginReq', require('./routes/loginReq'));
app.use('/logOutReq', require('./routes/logOutReq'));
app.use('/admin_temp', require('./routes/admin_temp'));
app.use('/adminReq', require('./routes/adminReq'));
app.use('/admininfo', require('./routes/admininfo'));
app.use('/healthSupport', require('./routes/healthSupport'));
app.use('/delete', require('./routes/delete'));
app.use('/my_info', require('./routes/my_info'));
app.use('/info', require('./routes/info'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.error(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
