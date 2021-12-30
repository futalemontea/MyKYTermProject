var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// session模块
var session = require('express-session')
// favicon
var favicon = require('serve-favicon')
// 连接数据库
var db = require('./db/connect')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 引入路由文件
var articleRouter = require('./routes/articles')


var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
  secret: 'class1912',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60 }  // 指定session的有效时长 单位毫秒
}))

// 用户登录拦截
app.get('*', (req, res, next)=>{
  let { username } = req.session
  let url = req.url
  console.log('用户操作信息：', req.session.username, req.session.isLogin, url)
  if (url != '/login' && url != '/regist') {
    if (!username) {
      // 用户未登录
      res.redirect('/login')
    }
  }
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articleRouter)


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

