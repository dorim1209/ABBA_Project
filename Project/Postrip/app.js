var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var sequelize = require('./models').sequelize;

var app = express();
sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('도림'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: '도림',
    cookie: {
        httpOnly: true,
        secure: false
    }
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));

app.use('/', require('./routes/index'));

app.use('/login', require('./routes/login'));
app.use('/login_db', require('./routes/login_db'));
app.use('/logout', require('./routes/logout'));

app.use('/join', require('./routes/join'));
app.use('/join_db', require('./routes/join_db'));
/* app.use('/mypage2', require('./routes/mypage2')); */

app.use('/find_idpw', require('./routes/find_idpw'));
app.use('/find_idpw_db', require('./routes/find_idpw_db'));
app.use('/find_session', require('./routes/find_session'));

app.use('/mypage_edit', require('./routes/mypage_edit'));
app.use('/mypage_upload', require('./routes/mypage_upload'));

app.use('/edit_db', require('./routes/edit_db'));
app.use('/delete_db', require('./routes/delete_db'));
app.use('/post_db', require('./routes/post_db'));
app.use('/mypage2', require('./routes/mypage_posting_db'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
