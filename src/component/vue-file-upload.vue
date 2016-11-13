<template>
    <span class="fileupload-button">
  <i v-if='icon != null' v-bind:class='rendIcon'></i>
  {{label}}
  <input v-el:file-input type="file" name="file">
</span>
</template>
<style scoped>
.fileupload-button {
    position: relative;
    overflow: hidden;
    display: inline-block;
    color: #fff;
    padding: 6px 12px;
    background-color: #5cb85c;
    border-color: #4cae4c;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
}

input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
    font-size: 200px;
    direction: ltr;
    cursor: pointer;
}
</style>
<script>
import _ from '../utils/public.js';
import UploadActions from '../config/msg.js';
import FileUploader from '../lib/fileUploader.js';
let noop = () => {};
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        max: {
            type: Number,
            default: Number.MAX_VALUE
        },
        label: {
            type: String,
            default: '选择文件'
        },
        name: {
            type: String,
            default: 'file'
        },
        icon: {
            type: String,
            default: null
        },
        autoUpload: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        files: {
            type: Array,
            default: () => {
                return new Array();
            },
            twoWay: true
        },
        filters: {
            type: Array,
            default: () => {
                return new Array();
            }
        },
        events: {
            type: Object,
            default: () => {
                return {
                    onProgressUpload: noop,
                    onCompleteUpload: noop,
                    onErrorUpload: noop,
                    onSuccessUpload: noop,
                    onAbortUpload: noop,
                    onAddFileFail: noop,
                    onAddFileSuccess: noop
                }
            }
        },
        formData:{
            type: Object,
            default: () => {
                return new Object();
            }
        }
    },
    data() {
        return {
            fileUploader: null
        }
    },
    computed: {
        rendIcon() {
            return this.icon.split(/\s/g);
        },
        bFiles: {
            get() {
                return this.files;
            },
            set(value) {
                this.files = value;
            }

        }
    },

    created() {
        console.log(FileUploader);
        this.fileUploader = new FileUploader({
            vm: this,
            url: this.url,
            name: this.name,
            maxItems: this.max,
            filters: this.filters,
            multiple: this.multiple,
            autoUpload: this.autoUpload,
            formData:this.formData,
            ...this.events

        });
        console.log(this.fileUploader)

        this.$on(UploadActions.DOPOST, this._uploadAll);
        this.$on(UploadActions.DOABORT, this._abortUpload);
    },
    ready() {
        if (this.$els.fileInput && this.multiple) {
            this.$els.fileInput.setAttribute('multiple', this.multiple);
        }
        _.on(this.$els.fileInput, "change", this._onChange);
    },
    beforeDestroy() {
        _.off(this.$els.fileInput, "change");
        this.fileUploader.clearQueue();
    },
    methods: {
        /**
         * [_count 计算队列里的带上传文件]
         * @return {[type]} [description]
         */
        _count() {
            this.bFiles = this.fileUploader.getAll();
        },
        _uploadAll() {
            this.fileUploader.uploadAll();
        },
        _abortUpload(file) {
            this.fileUploader.abortItem(file);
        },
        _onChange() {
            //文件已数组为单位，因为可能存在mutiple；如果是单个文件fileuploader会自动转换为数组类型！
            var elTargetFiles = _.isHTML5() ? this.$els.fileInput.files : this.$els.fileInput;
            this.fileUploader.addToQueue(elTargetFiles);
            this._count();
        }
    }
}
</script>
