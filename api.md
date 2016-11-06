#接口文档
## 一 用户相关
### 1.注册
请求
 ```
method:post
url:http://{{serverRoot}}/api/doRegister
body:{
    userName:vm.userName,(6-16位字母数字下划线)
    email:vm.email,(邮箱)
    passWord:vm.passWord(6-16位字母数字下划线)
 }
 ```
响应
- 200 成功
- 400 用户名存在
- 401 邮箱存在
- 402 用户名格式错误
- 403 邮箱格式错误
- 404 密码格式错误
- 500 服务器错误

### 2.登录
请求
 ```
method:post
url:http://{{serverRoot}}/api/doLogin
body:{
    userName:vm.userName,(6-16位字母数字下划线活邮箱)
    passWord:vm.passWord(6-16位字母数字下划线)
 }
 ```
响应
- 200 成功
- 400 密码错误
- 404 用户名不存在
- 500 服务器错误

### 3.退出登录
请求
 ```
method:post
url:http://{{serverRoot}}/api/exitBlog

 ```
响应
- 200 退出成功
- 404 没有登录
- 500 服务器错误
