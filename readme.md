开源软件技术期末大作业 

190110910131徐占

1）项目设计部分：

（1）项目总体构成：

项目总体是一个网络留言版，可以进行简单的登陆注册和留言

（2）引入的包在项目中的作用相关说明：

express后端框架

express-session使用session保存用户当前登陆状态

数据库mongodb

ejs模板引擎

serve-favicon 设置图标的，之前一直没起效果所以就没管了 后面不知道怎么搞得图标又可以显示了

还有http-errors、cookie-parser、morgan等等 这些是express-generator生成项目的模板里自带的

（3）项目目录结构和各个部分的说明：

db: 创建schema还有数据库连接

node_modules：导入的包

public：主要是一些公用的css样式

routes：路由

views:网页 

2）使用说明书：

简单的注册登陆，这个不用我说了

然后就是进入页面之后，点击"留下足迹"就可以进行留言

可以删改留言，主页上也可以看到别人的留言

（本来想试着用bootstrap来美化页面 但发现一直不起效果  被折磨了两天 遂放弃 后来用了别人写的一些css）

3）开发日记（与commit对应）

测试git提交 fitst test git(已废弃)

使用express-generator创建项目

项目基本实现  almost done

添加区分管理员和普通用户 add admin  （其实有点小问题，但快没时间复习计网了，只能有空再解决）

一些小的修改 final edition

又改了一些内容 作为最终版本 部署到服务器上的版本 final edition



