'use strict';

module.exports={
  isDev:true,
  ipAdd:'192.168.0.19',
  port:3000,
  db: 'mongodb://127.0.0.1/vueblog',
  key:'vueblog',
  validTime:1000*60*60*24,//sessionid有效时间
  secret:'dt',//session 秘钥
  avatar:'./userAvatar/defaltAvatar.png'//默认头像路径
}
