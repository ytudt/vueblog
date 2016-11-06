const express = require('express');
const router = express.Router();
const userController=require('./controller/user.js');
const articleController=require('./controller/article.js');

router.post('/api/doRegister',userController.doRegister)
router.post('/api/doLogin',userController.doLogin)
router.post('/api/exitBlog',userController.exitBlog)
router.get('/api/showArticle',articleController.showArticle)
// router.get('/'function(){
//   console.log(23)
// })


module.exports=router
