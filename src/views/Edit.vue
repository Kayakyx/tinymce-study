<template>
    <div>
        <EditorTinymce :config = "Config"
                       v-model = "Value"
                       :url = "Url"
                       :max-size = "MaxSize"
                       :accept = "Accept"
                       :with-credentials = "false"
                       @on-ready  = "onEditorReady"
                       @on-destroy = "onEditorDestroy"
                       @on-upload-success = "onEditorUploadComplete"
                       @on-upload-fail = "onEditorUploadFail"
        ></EditorTinymce>

        <div>这里是编辑器的内容：{{Value}}</div>

    </div>
</template>

<script>
    import EditorTinymce from '../components/EditorTinymce'
    export default {
        components: {
            EditorTinymce
        },
        data(){
            return{
                Config: {
                    height: 400
                }, //编辑器配置
                Value: '',  //编辑器内容
                Url: 'https://192.168.1.254',    //编辑器中图片上传地址
                MaxSize: 2097152,   //图片上传最大尺寸   2M
                Accept: 'image/jpeg, image/png',  //图片上传格式

            }
        },
        methods: {
            onEditorReady(){
                console.log('编辑器初始化了');
            },
            onEditorDestroy(){
                console.log('编辑器销毁了');
            },
            onEditorUploadComplete(){
                console.log('图片上传完成');
            },
            onEditorUploadFail(){
                console.log('图片上传失败');
            }
        }

    }
</script>

<style scoped>
</style>
