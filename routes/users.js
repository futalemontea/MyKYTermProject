var express = require('express');
var router = express.Router();
var userModel = require('../db/userModel')

// 注册
router.post('/regist', (req, res, next)=>{
  let { username, password, password2 } = req.body
  userModel.find({username}).then((docs)=>{
    if (docs.length > 0) {
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      var backstr ="<script>alert('用户名已存在');window.location.href='/'</script>";
      res.end(backstr)
        
    } else {
      // 开始注册
      let createTime = Date.now()
      // 插入数据
      userModel.insertMany({ username, password, createTime }).then((data)=>{

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        var backstr ="<script>alert('已注册成功 请再次输入帐号密码登陆');window.location.href='/'</script>";
        res.end(backstr)
        res.redirect('/login')
      }).catch((err)=>{

        res.redirect('/regist')
      })
    }
  })
})


// 登录
router.post('/login', (req, res, next)=>{

  let { username, password } = req.body
  console.log(username, password)

  userModel.find({ username, password }).then((docs)=>{
    if (docs.length > 0) {

      req.session.username = username  //用session记录用户信息
      req.session.isLogin = true
      res.redirect('/')
    } else {
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      var backstr ="<script>alert('帐号或密码错误');window.location.href='/'</script>";
      res.end(backstr)
      res.redirect('/login')
    }
  }).catch((err)=>{

    res.redirect('/login')
  })
})

//注销
router.get('/logout', (req, res, next)=>{
  req.session.username = null
  req.session.isLogin = false
  // req.session.destroy()
  res.redirect('/login')
})

module.exports = router;
