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
- 500 服务器错误

### 2.登录