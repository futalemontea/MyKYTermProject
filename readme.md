开源软件技术期末大作业 

1）项目设计部分：

（1）项目总体构成：

项目总体是一个网络留言版，可以进行简单的登陆注册和留言

（2）引入的包在项目中的作用相关说明：

express后端框架

express-session使用session保存用户当前登陆状态

数据库mongodb

ejs模板引擎

serve-favicon 设置图标的，但是没起效果 

还有http-errors、cookie-parser、morgan等等 这些是express-generator生成项目的模板里自带的

（3）项目目录结构和各个部分的说明：

bin 目录下有个www文件，用express-generator生成项目自带的，在这里面改端口号

db: 创建schema还有数据库连接

node_modules：导入的包

public：主要是一些公用的css样式

routes：所有路由

views:网页 

2）使用说明书：

简单的注册登陆，这个不用我说了

然后就是进入页面之后，点击"留下足迹"就可以进行留言

可以删改留言，主页上也可以看到别人的留言

3）开发日记（与commit对应）

测试git提交 fitst test git(已废弃)

使用express-generator创建项目

项目基本实现  almost done



