# 基于node+vue+vuex的博客
## 工程目录
+ .gitignore git 忽略目录
+ app.js node 入口
+ index.html html入口文件
+ package.json 配置
+ ruote.js node路由文件
+ webpack.config.js webpack文件
+ webpackServer.js webpack服务启动文件
+ bin node启动目录
    - www.js node启动文件
+ config node配置文件
    - config.js 全局配置文件
    - log4js.js 日志配置文件
+ controller node controll层
    - user.js 用户相关controller
+ db mogodb数据模型
+ models node mode层
+ node_modules node 依赖包
+ public 生产环境静态文件
+ src 开发环境前端代码
+ userAvatar 用户头像
+ utils node工具函数
    index.js 工具函数文件

## 使用
### 下载工程
+ 1.git clone git@github.com:ytudt/myblog.git
+ 2.cd vueblog
+ 3.npm install

### 创建数据库和数据集合
+ 1.use vueblog
+ 2.db.createCollection("users")
+ 3.db.createCollection("articles")

### 运行开发模式
+ 1.cd bin
+ 2.node www.js(npm start)
+ 3.npm run dev
+ 4.浏览器访问127.0.0.1:3000
因为开发模式启动两个服务，访问node的接口存在跨域，正常设置webpack-dev-server，
因为目前还没搞定，顾用一个谷歌插件Allow-Control-Allow-Origin[使用方法](http://www.cnblogs.com/ytu2010dt/p/5464431.html)允许跨域

### 运行生产模式
+ 1.cd bin
+ 2.node www.js(npm start)
+ 3.npm run dist
+ 4.浏览器访问127.0.0.1:3000