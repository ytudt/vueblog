const express = require('express');
const router = express.Router();
const userController=require('./controller/user.js');

router.post('/api/doRegister',userController.doRegister)
// router.get('/'function(){
//   console.log(23)
// })


module.exports=router
