<template>
    <div>
        <div class="avatarUpload" v-show="avatarUpload"  @click="closeAvatarUpload" >
        <div>
             <vue-file-upload url="http://127.0.0.1:3000/api/uploadAvatar" , v-bind:files.sync='files' , v-bind:events='cbEvents' , v-bind:filters="filters" , v-bind:request-options="reqopts" v-bind:form-data="formData"></vue-file-upload>
            <button type='button' @click.stop="doPost">上传</button>
        </div>
        <div>
             <img  :src="avatarPreview" alt="">
        </div>


        </div>
        <div class="userInfoWrap">
            <div class="baseInfo">
                <img  v-img-error @click="showAvatarUpload"  :src='user.avatar' class="userAvatar" alt="我的头像">
                <span>{{user.userName}}</span>
                <span>{{user.email}}</span>
            </div>
            <div class="articleNum">
                <span>我的文章{{user.articleNum}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.userInfoWrap {
    /*background:#ddd;*/
    color: #333;
    width: 100%;
    height: 100%;
    padding: 100px 200px;
    box-sizing: border-box;
}

.avatarUpload {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
}
button[type=button]{
  width: 80px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
.userInfoWrap .userAvatar {
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.userInfoWrap div {
    background: #fff;
    margin-top: 20px;
    padding: 10px;
    /*box-sizing: border-box;*/
    border-radius: 5px;
}

.userInfoWrap .baseInfo span {
    display: block;
    margin: 5px 0;
}
</style>
<script>
import menus from '../config/menus.js'
import store from '../vuex/store'
import actions from '../actions/'
import VueFileUpload from './vue-file-upload.vue';
import UploadActions from '../config/msg.js';
import mixins from '../mixin'
export default {
     mixins: [mixins('')],
    store,
    vuex: {
        getters: {
            user: state => state.user
        },
        actions: actions()
    },

    data() {
        return {
            files: [],
            //过滤器回调
            filters: [{
                name: "imageFilter",
                fn(file) {
                    var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            }],
            //事件回调
            cbEvents: {
                onCompleteUpload: (file, response, status, header) => {
                    if(response.statusCode===200){
                        this.avatarUpload = false;
                      this.loginSuccess(response.user);
                    }
                },
                onAddFileSuccess: (file) => {
                    console.log(file.file)
                    let vm=this;
                    let reader=new FileReader();
                    reader.readAsDataURL(file.file)
                    reader.onload=function(e){
                       vm.avatarPreview=this.result;
                    }
                }
            },
            reqopts: {
                formData: {
                    tokens: 'tttttttttttttt'
                },
                responseType: 'json',
                withCredentials: false
            },
            formData:{
              _id:store.state.user._id
            },
            userAvatar: '../userAvatar/defaltAvatar.png',
            avatarUpload: false,
            avatarPreview:''

        }
    },
    created() {

    },
    ready() {},
    methods: {
        doPost() {
            this.$broadcast(UploadActions.DOPOST);
        },
        onStatus(file) {
            if (file.isSuccess) {
                return "上传成功";
            } else if (file.isError) {
                return "上传失败";
            } else if (file.isUploading) {
                return "正在上传";
            } else {
                return "待上传";
            }
        },
        uploadItem(file) {
            file.upload();
        },
        uploadAll() {
            this.$broadcast(UploadActions.DOPOST);
        },
        showAvatarUpload() {
            // alert(11)
            this.avatarUpload = true;
        },
        closeAvatarUpload(){
             this.avatarUpload = false;
        }
    },
    events:{
        'upload-success':function(){
               this.avatarUpload = false;
        }
    },
    components: {
        VueFileUpload
    }
}
</script>
