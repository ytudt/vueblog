/*
* @Author: Administrator
* @Date:   2016-10-25 15:30:03
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-25 20:37:06
*/

'use strict';
function Tool(){

}
Tool.prototype.reg_email=function(value){
  var reg=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(value);
}
Tool.prototype.reg_user=function(value){
   var reg=/^[a-zA-z]\w{5,15}$/;
   return reg.test(value)
}
export default new Tool();
