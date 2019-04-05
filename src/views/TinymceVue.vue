<template>
    <div class="tinymcevue">
        <div class="editor">
            <!--id不能为tinymce不知道为什么，反正报错，可能于变量冲突了-->
            <editor id="tinymceEidtor" :init="init" v-model="editorHtml"></editor>

            <!--<div>
                <textarea id="id"></textarea>
            </div>
-->

        </div>
    </div>
</template>

<script>


    //请指定版号，现在是 5+ ，这种使用有点问题  npm i tinymce@4.9.4 --save-dev
    import tinymce from 'tinymce/tinymce'; //node_modules包中的
    import "tinymce/themes/modern/theme"
    //引入vue的
    import Editor from '@tinymce/tinymce-vue';


    //引入node_modules包中（不用写node_modules这个文件夹路径，webpage在外面找不到时会自动去里面找）的富文本主题，
    // 这个是silver为银灰色主题。mobile是手机端的主题。
    // import "tinymce/themes/mobile/theme.min"
    // import "tinymce/themes/silver/theme.min";

    //引入editor的基本样式
    // import "tinymce/skins/content/default/content.min.css";
    // import "tinymce/skins/ui/oxide/content.min.css";
    // import "tinymce/skins/ui/oxide/skin.min.css";
    //
    // import "../../public/tinymce/langs/zh_CN";

    //引入tinymce所有的富文本插件js,里面有很多，可自行打开node_modules 文件夹查看。
    //如果想用图片插件可以这样。import "tinymce/plugins/image/plugin.min";
    // import "tinymce/plugins/image/plugin.min"; //引入图片插件
    // import "tinymce/plugins/imagetools/plugin.min"; //引入图片工具插件


    export default {
        name: "TinymceVue",
        components: {
            editor: Editor
        },
        data(){
            return {
                editorHtml: '',
                init: {
                    height: 400,
                }
            }
        },
        mounted() {
            console.log(tinymce);
            tinymce.init({});
        }
    }
</script>

<style scoped>

</style>
