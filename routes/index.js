var express = require('express');
var router = express.Router();
var articleModel = require('../db/articleModel')
var moment = require('moment')

//首页
router.get('/', function(req, res, next) {
  console.log(req.query)

  let page = parseInt(req.query.page || 1)
  let size = parseInt(req.query.size || 10) //每页十条
  let username = req.session.username


  articleModel.find().count().then((total)=>{
    // 获取总页数
    var pages = Math.ceil(total / size)

    articleModel.find().sort({"createTime": -1}).limit(size).skip((page-1)*size).then((docs)=>{
      var arr = docs.slice()  //
      for(let i=0; i<arr.length; i++) {
        arr[i].createTimeZH = moment(arr[i].createTime).format('YYYY-MM-DD HH:mm:ss')
      }
      res.render('index', { data: {list: arr, total: pages, username: username} });
    }).catch((err)=>{
      res.redirect('/')
    })
  }).catch((err)=>{
    res.redirect('/')
  })
});


// 注册
router.get('/regist', function(req, res, next) {
  res.render('regist', {});
});

// 登录
router.get('/login', function(req, res, next) {
  res.render('login', {});
});

// 写留言
router.get('/write', function(req, res, next) {
  var id = req.query.id

  if (id) {
    // 编辑
    id = new Object(id)
    // 用_id查询
    articleModel.findById(id).then((doc)=>{
      res.render('write', {doc: doc})
    }).catch(err=>{
      // res.send(err)
      res.redirect('/')
    })
  } else {
    // 新增
    var doc = {
      _id: '',
      username: req.session.username,
      title: '',
      content: ''
    }
    res.render('write', {doc: doc});
  }

});

// 查看留言详情
router.get('/detail', function(req, res, next) {
  var id = new Object(req.query.id)
  console.log(id)
  console.log(req.query)

  // 用_id查询
  articleModel.findById(id).then((doc)=>{
    doc.createTimeZH = moment(doc.createTime).format("YYYY-MM-DD HH:mm:ss")
    res.render('detail', {doc: doc})
  }).catch(err=>{
    res.send(err)
  })

});

module.exports = router;

