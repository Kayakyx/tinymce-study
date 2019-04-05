<template>
    <div class="tinymce">
        <div class="editor">
            <!--<editor api-key="mwada6jdv4j4wj37u8jshfdqpsgdmhln5mgfn26jl5jd209q" v-model="editorContent"></editor>-->
            <!--<editor id="tinymce" v-model="value" :init="init"></editor>-->
            <!--<Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>-->
            <!--<Editor id="tinymce"></Editor>-->
            <editor api-key="mwada6jdv4j4wj37u8jshfdqpsgdmhln5mgfn26jl5jd209q"
                    :init="init"
                    :initial-value="initialValue">

            </editor>

        </div>
        <button @click="tabButton">获取编译器内容</button>
    </div>
</template>

<script>
   /*
    import tinymce from 'tinymce/tinymce'
    import 'tinymce/themes/modern/theme'
*/
    import Editor from '@tinymce/tinymce-vue'
/*
    //引入插件(上面想要的工具条)
    import 'tinymce/plugins/image';
    import 'tinymce/plugins/link';
    import 'tinymce/plugins/code';
    import 'tinymce/plugins/table';
    import 'tinymce/plugins/lists';
    import 'tinymce/plugins/contextmenu';
    import 'tinymce/plugins/wordcount';
    import 'tinymce/plugins/colorpicker';
    import 'tinymce/plugins/textcolor';
  */
    // import '../../public/tinymce/langs/zh_CN';

    export default {
        name: "Tinymce",
        components: {
            editor: Editor
        },
        data() {
            return {
                /*
                // vue-cli 3.x 创建的 typescript 项目，将 url 中的 static 去掉，即 skin_url: '/tinymce/skins/lightgray'
                editorInit: {
                    // language_url: '/static/tinymce/zh_CN.js',
                    language_url: '/tinymce/zh_CN.js',
                    language: 'zh_CN',
                    // skin_url: '/static/tinymce/skins/lightgray',
                    skin_url: '/tinymce/skins/lightgray',
                    height: 300
                },
                editorContent: ''
                */
               /*
                tinymceHtml: '请输入内容',
                init: {
                    language_url: '/tinymce/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '/tinymce/skins/lightgray',
                    height: 300,
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    toolbar:
                        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false
                },
                editorContent: ''
                */
                //tinymce-vue是用的tinymce5，5采用的是的云加载
                //TinyMCE从4.0开始，不再支持直接下载，而是直接使用提供免费的CDN，让用户免除安装过程，可以在网站中使用TinyMCE，
                // 但是这样会导致无法DIY程序，所以大叔还是提供了下载版本
                init: {//富文本初始化配置
                    height: 500,
                    // language_url: "../../public/tinymce/langs/zh_CN" //editor语言为中文，加载本地语言包
                },
                initialValue: '在这里编辑内容！',  //editor 初始内容



            }
        },
        methods: {
            tabButton(){
                console.log(this.editorContent);
            }
        },
        mounted() {
            console.log(this);
        }


    }


</script>

<style scoped>
    .editor{
        width: 800px;
        /*height: 600px;*/
        margin: 0 auto;
    }
</style>
