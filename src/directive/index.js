/*
* @Author: Administrator
* @Date:   2016-11-15 10:45:45
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-15 11:27:08
*/

'use strict';
export function imgError(el){
   this.el.onerror=function(){
    this.src='./img/defaltAvatar.png'
  }
}