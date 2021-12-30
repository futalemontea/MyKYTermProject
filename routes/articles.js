var express = require('express');
var router = express.Router();
var articleModel = require('../db/articleModel')
var multiparty = require('multiparty')
var fs = require('fs')


/* 修改或者新写留言 */
router.post('/write', (req, res, next)=>{
  let { title, content, username, id } = req.body
  let createTime = Date.now()

  if (id) {
    

    // 修改文章
    id = new Object(id)  
    articleModel.updateOne({_id: id}, {createTime, content, title, username}).then(data=>{
      res.redirect('/')
    }).catch(err=>{
      //console.log(err)
      res.redirect('/write')
    })
  } else {
    // 新增留言
    // 记录用户名
    let username = req.session.username
    // 插入数据库
    articleModel.insertMany({title, content, createTime, username}).then((data)=>{
      res.redirect('/')
    }).catch((err)=>{
      res.redirect('/write')
    })
  }
})



// 删除文章
router.get('/delete', (req, res, next) => {

  
  let id = req.query.id
  id = new Object(id)
  // 删除
  articleModel.deleteOne({_id: id}).then((data)=>{
    res.redirect('/')
  }).catch(err=>{
    res.redirect('/')
  })
})


module.exports = router;
