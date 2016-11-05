const express = require('express');
const router = express.Router();
const userController=require('./controller/user.js');

router.post('/api/doRegister',userController.doRegister)
router.post('/api/doLogin',userController.doLogin)
// router.get('/'function(){
//   console.log(23)
// })


module.exports=router
