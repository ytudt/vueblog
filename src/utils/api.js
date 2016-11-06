// function FectchDate() {
//     this.serverUrl = 'http://127.0.0.1:8000/api'
// }
// FectchDate.prototype.doPost = function(vm, url, body, options) {
//     var that = this;
//     return new Promise((resolve, reject) => {
//         vm.$http.post(that.serverUrl + url, body, options).then(resolve, reject);
//     })
// }
class FectchDate {
    constructor() {
        this.serverUrl = 'http://127.0.0.1:8000/api'
    }
    doPost(vm, url, body, options) {
        let that = this;
        return new Promise((resolve, reject) => {
            vm.$http.post(that.serverUrl + url, body, options).then(resolve, reject);
        })
    }
    doGet(vm, url) {
        let that = this;
        return new Promise((resolve, reject) => {
            vm.$http.get(that.serverUrl + url).then(resolve, reject);
        })
    }
}
export default new FectchDate();
