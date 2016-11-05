

function FectchDate() {
    this.serverUrl = 'http://127.0.0.1:8000/api'
}
FectchDate.prototype.doPost = function(vm,url,body,options) {
  var that=this;
    return new Promise((resolve, reject) => {
       vm.$http.post(that.serverUrl+url, body, options).then(resolve, reject);
    })
}
export default new FectchDate();
