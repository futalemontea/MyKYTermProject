// 引入模块
var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://172.21.2.236:27017/190110910131', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', (err)=>{
  console.log('数据库连接错误')
})
db.once('open', ()=>{
  console.log('数据库连接成功')
})