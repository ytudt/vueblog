/*
* @Author: Administrator
* @Date:   2016-11-15 10:45:45
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-15 11:10:03
*/

'use strict';
export function imgError(el){
  console.log(el)
  console.log(11)
  console.log(this)
  console.log(this.el)
  this.el.onload=function(){
    console.log('chengong')
  }
   this.el.onerror=function(){
    console.log('onerror')
    this.src='./img/defaltAvatar.png'
  }
  // el.onLoad=function(){
  //   console.log(222)
  // }
}