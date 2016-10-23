// !function(){
//   function fectchDate(){
//     this.serverUrl='http://127.0.0.1'
//   }
//   fectchDate.prototype.doRegister=function(){

//   }
//   return new fectchDate();
// }()

// const fectchDate={
//   serverUrl:'http://127.0.0.1:3000',
//   // doRegis

// }
// export default fectchDate;


function FectchDate() {
    this.serverUrl = 'http://127.0.0.1:3000/api'
}
FectchDate.prototype.doRegister = function(vm,url,body,options) {
  var that=this;
  console.log(333);
    return new Promise((resolve, reject) => {
      console.log(that.serverUrl+url)
      console.log(body)
      console.log(options)
       vm.$http.post(that.serverUrl+url, body, options).then(resolve, reject);
    })
}
export default new FectchDate();
