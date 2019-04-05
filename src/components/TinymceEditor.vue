<template>
    <div class="tinymce-editor">
        <Editor :init="init"></Editor>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/modern/theme'
/*
    //@代表src文件夹，vue-cli中自带的
    import '@/assets/tinymce/skins/lightgray/skin.min.css';
    import '../assets/tinymce/skins/lightgray/content.min.css';
    */
    import '@/assets/tinymce/langs/zh_CN'
    export default {
        components: {
            Editor
        },
        data() {
            return {
                //初始化配置
                init: {
                    // language_url: '../assets/tinymce/langs/zh_CN.js',//语言包的路径
                    // language: 'zh_CN',//语言
                    // skin_url: '/public/tinymce/skins/lightgray',//skin路径
                    height: 500,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                    menubar: true,//顶部菜单栏显示
                },
                myValue: ''
            }
        },
        mounted() {
            tinymce.init({})
        },
        methods: {
            //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            //需要什么事件可以自己增加
            onClick(e) {
                this.$emit('onClick', e, tinymce)
            },
            //可以添加一些自己的自定义事件，如清空内容
            clear() {
                this.myValue = ''
            }
        }
    }

</script>
<style scoped>

    @import '../assets/tinymce/skins/lightgray/skin.min.css';
    @import '../assets/tinymce/skins/lightgray/content.min.css';

</style>

