<template>
    <div class="editor-tinymce">
        <textarea :id= "Id"></textarea>
    </div>
</template>

<script>
    //引入tinymce包 npm i tinymce@4.7.4 --save-dev
    //使用这3个import引入tinymce或直接在public/index.html中通过script标签引入
    import tinymce from 'tinymce/tinymce.min'  //会自动挂载到window对象上
    import 'tinymce/themes/modern/theme.min'
    import 'tinymce/skins/lightgray/skin.min.css' //可以把这个css引入放到下面style中(需要把node_modules文件夹下的这个css文件copy到assets文件夹下)
    //-------引入tinymce结束-------------
    //引入中文包（自己在官网下载，中文包）(不能放在public下,能放在assets目录下，不然报错)
    import '../assets/tinymce/langs/zh_CN'
    //引入插件 ,插件具体说明详见 https://www.tiny.cloud/docs-4x/plugins/
    import 'tinymce/plugins/paste' // Word导入和粘贴插件
    import 'tinymce/plugins/importcss' //自动将CSS类名填充到Format下拉列表中。
    import 'tinymce/plugins/image' //该插件使用户能够将图像插入TinyMCE的可编辑区域。该插件还在菜单下添加了一个工具栏按钮和一个菜单项。
    import 'tinymce/plugins/code' //此插件添加了一个工具栏按钮，允许用户编辑视图隐藏的HTML代码。它还会在菜单Source code下添加菜单项Tools。
    import 'tinymce/plugins/table' //表编辑功能。
    import 'tinymce/plugins/advlist' //高级列表插件,创建样式号和项目符号列表。
    import 'tinymce/plugins/fullscreen' //此插件为TinyMCE添加了全屏编辑功能。按下工具栏按钮时，可编辑区域将填充浏览器的视口。该插件在菜单Fullscreen下添加了一个工具栏按钮和一个菜单项View。
    import 'tinymce/plugins/link' //该link插件允许用户将外部资源（如网站URL）链接到其文档中的选定文本。
    import 'tinymce/plugins/media' //该media插件增加了用户能够将HTML5视频和音频元素添加到可编辑区域的功能。它还会在菜单下添加项目以及工具栏按钮。
    import 'tinymce/plugins/lists' //该插件还规范了浏览器之间的列表行为。如果您在使用一致性列表时遇到问题，请启用它。
    import 'tinymce/plugins/textcolor' //文字颜色插件
    import 'tinymce/plugins/colorpicker' //拾色器插件（从自定义中）,从托盘中选择一种颜色。依赖于textcolor插件
    import 'tinymce/plugins/hr' //插入一条水平线。(全称Horizontal Rule)
    import 'tinymce/plugins/preview' //预览插件，以只读格式显示当前内容的弹出窗口。
    import 'tinymce/plugins/wordcount' //此插件为TinyMCE添加了字数统计功能，将计数器放在状态栏的右边缘。
    import 'tinymce/plugins/autolink' //当用户输入有效的完整URL时，Autolink插件会自动创建超链接。例如转换为。www.example.comhttp://www.example.com
    import 'tinymce/plugins/save' //保存插件,将保存按钮添加到TinyMCE工具栏。
    import 'tinymce/plugins/autosave' //自动保存插件,自动在本地浏览器中保存内容。
    import 'tinymce/plugins/charmap' //角色地图插件,在TinyMCE中插入特殊字符。
    import 'tinymce/plugins/codesample' //代码示例插件,插入和嵌入语法突出显示的代码段。
    import 'tinymce/plugins/contextmenu' //上下文菜单插件,右键单击以在TinyMCE中执行操作
    import 'tinymce/plugins/emoticons' //Emoticons插件添加了一个工具栏控件，允许用户将笑脸图像插入TinyMCE的可编辑区域。 //需要购买timymce高级服务
    import 'tinymce/plugins/imagetools' //Image Tools（imagetools）插件为编辑器中的图像添加了上下文编辑工具栏。如果单击图像上没有出现工具栏，则可能需要启用imagetools_cors_hosts或imagetools_proxy（见下文）。
    import 'tinymce/plugins/insertdatetime' //插入日期/时间插件
    import 'tinymce/plugins/noneditable' //不可编辑的插件,阻止用户更改元素中的内容。非常适合模板。
    import 'tinymce/plugins/print' //此插件会在工具栏中添加一个打印按钮。它还Print在File菜单下拉列表中添加了一个项目。
    import 'tinymce/plugins/searchreplace' //此插件将搜索/替换对话框添加到TinyMCE。它还在菜单下拉列表下添加了一个工具栏按钮和菜单项。
    import 'tinymce/plugins/tabfocus' //此设置会影响tabfocus插件的执行。在可编辑区域内按下Tab键时，此设置可用于更改编辑器的焦点行为。
    import 'tinymce/plugins/template' //该template插件增加了对自定义模板的支持。它还在菜单Insert template下添加了一个菜单项Insert和一个工具栏按钮。
    import 'tinymce/plugins/textpattern' //文字图案插件,此插件匹配文本中的特殊模式，并应用格式，替换文本或对这些模式执行命令。 默认模式类似于markdown语法，因此您可以键入# text以生成标题或**text**使文本变为粗体。
    import 'tinymce/plugins/visualblocks' //允许用户查看块级元素，例如段落。
    import 'tinymce/plugins/anchor' //锚插件,插入锚点（有时称为书签）。
    // import 'tinymce/plugins/autoresize' //自动调整插件,自动调整TinyMCE的大小以适应内容。（先不用，最自己改变大小，知道了，根据需求选择是否启用）
    import 'tinymce/plugins/directionality' //方向性插件,工具栏按钮用于设置内容的从左到右或从右到左的方向。
    import 'tinymce/plugins/help' //帮助插件,显示帮助对话框。
    // import 'tinymce/plugins/legacyoutput' //旧版输出插件,将HTML输出更改为旧的HTML语法，如font，b和i   (用时在plugins 中写一下即可)
    import 'tinymce/plugins/nonbreaking' //不间断的空间插件,插入一个不间断的空格。此插件添加了一个按钮，用于&nbsp;在当前插入符号位置（光标插入点）插入不间断空格实体
    import 'tinymce/plugins/pagebreak' //分页插件,添加分页符。
    import 'tinymce/plugins/spellchecker' //拼写检查器插件,启用TinyMCE的拼写检查功能。
    import 'tinymce/plugins/toc' //在TinyMCE编辑器中插入一个简单的目录,toc插件将生成基本的目录，并将其插入当前光标位置的编辑器中。该表的项目将取自内容中的标题。(全称 Table of Contents Plugin)
    import 'tinymce/plugins/visualchars' //视觉角色插件,看到不可见的字符，如不间断的空格。 此插件增加了用户查看&nbsp;可编辑区域中显示的不可见字符的功能。



    // const Time = Date.now(); //获取事件戳，可以这样也可以写在data里
    export default {
        name: "EditorTinymce",
        data() {
            const Id = Date.now();
            return {
                Id: Id,
                Editor: null,
                DefaultConfig: {
                    // GLOBAL
                    body_class: 'editorBody',  //会加到iframe的body上
                    statusbar: true,//是否隐藏底部状态栏，默认TRUE
                    // height: 500,
                    theme: 'modern',
                    menubar: true,//菜单条是否显示
                    toolbar: `styleselect | fontselect | formatselect | fontsizeselect | forecolor backcolor |
                              bold italic underline strikethrough | image  media | table | alignleft aligncenter alignright alignjustify |
                              outdent indent | numlist bullist | preview removeformat  hr | paste code  link | undo redo | fullscreen |
                              save | charmap | codesample | emoticons | insertdatetime | print | searchreplace | template | visualblocks | anchor |
                              ltr | rtl | help | nonbreaking | pagebreak | spellchecker | toc | visualchars`,
                    plugins: `
                        paste
                        importcss
                        image
                        code
                        table
                        advlist
                        fullscreen
                        link
                        media
                        lists
                        textcolor
                        colorpicker
                        hr
                        preview
                        wordcount
                        autolink
                        save
                        autosave
                        charmap
                        codesample
                        contextmenu
                        emoticons
                        imagetools
                        insertdatetime
                        noneditable
                        print
                        searchreplace
                        tabfocus
                        template
                        textpattern
                        visualblocks
                        anchor
                        directionality
                        help
                        nonbreaking
                        pagebreak
                        spellchecker
                        toc
                        visualchars
                      `,
                    contextmenu: "link image inserttable | cell row column deletetable", //配合右键上下文插件使用
                    imagetools_cors_hosts: ['localhost.com', 'otherdomain.com'], //配合图片工具使用，的配置需要购买服务，这样写了，能出来工具条但是不能使用
                    imagetools_proxy: 'proxy.php', //配合图片工具使用，的配置需要购买服务，这样写了，能出来工具条但是不能使用
                    noneditable_editable_class: "mceEditable",//不可以编辑

                    // CONFIG

                    forced_root_block: 'p',
                    force_p_newlines: true,
                    importcss_append: true,

                    branding: false, //隐藏右下角供应商tinymce驱动，字样
                    elementpath: false,//显示标签路径 （右下角）

                    //CONFIG  autoresize 自动调整插件
                    // autoresize_max_height: 500, //自动调整的最大高度为1000

                    //CONFIG: template   插入模板
                    templates: [
                        {title: '我的模板1', description: '，模板测试', content: 'My content---模板内容'},
                        {title: '我的模本2', description: '模板测试66', url: 'development.html'}
                    ],

                    //CONFIG: textpattern  文本图案插件
                    textpattern_patterns: [
                        {start: '*', end: '*', format: 'italic'},
                        {start: '**', end: '**', format: 'bold'},
                        {start: '#', format: 'h1'},
                        {start: '##', format: 'h2'},
                        {start: '###', format: 'h3'},
                        {start: '####', format: 'h4'},
                        {start: '#####', format: 'h5'},
                        {start: '######', format: 'h6'},
                        {start: '1. ', cmd: 'InsertOrderedList'},
                        {start: '* ', cmd: 'InsertUnorderedList'},
                        {start: '- ', cmd: 'InsertUnorderedList'},
                        {start: '//brb', replacement: 'Be Right Back'}
                    ],

                    // CONFIG: ContentStyle 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了
                    content_style: `
                        *                         { padding:0; margin:0; }
                        html, body                { height:100%; }
                        img                       { max-width:100%; display:block;height:auto; }
                        a                         { text-decoration: none; }
                        iframe                    { width: 100%; }
                        p                         { line-height:1.6; margin: 0px; }
                        table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
                        .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
                        ul,ol                     { list-style-position:inside; }
                      `,

                    insert_button_items: 'image link | inserttable',

                    // CONFIG: Paste
                    paste_retain_style_properties: 'all',
                    paste_word_valid_elements: '*[*]',        // word需要它
                    paste_data_images: true,                  // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
                    paste_convert_word_fake_lists: false,     // 插入word文档需要该属性
                    paste_webkit_styles: 'all',
                    paste_merge_formats: true,
                    nonbreaking_force_tab: false,
                    paste_auto_cleanup_on_paste: false,

                    // CONFIG: Font
                    fontsize_formats: '10px 11px 12px 14px 16px 18px 20px 24px',

                    // CONFIG: StyleSelect
                    style_formats: [
                        {
                            title: '首行缩进',
                            block: 'p',
                            styles: { 'text-indent': '2em' }
                        },
                        {
                            title: '行高',
                            items: [
                                {title: '1', styles: { 'line-height': '1' }, inline: 'span'},
                                {title: '1.5', styles: { 'line-height': '1.5' }, inline: 'span'},
                                {title: '2', styles: { 'line-height': '2' }, inline: 'span'},
                                {title: '2.5', styles: { 'line-height': '2.5' }, inline: 'span'},
                                {title: '3', styles: { 'line-height': '3' }, inline: 'span'}
                            ]
                        }
                    ],

                    // FontSelect =前要显示的项，后相当于值
                    font_formats: `
                        微软雅黑=微软雅黑;
                        宋体=宋体;
                        黑体=黑体;
                        仿宋=仿宋;
                        楷体=楷体;
                        隶书=隶书;
                        幼圆=幼圆;
                        Andale Mono=andale mono,times;
                        Arial=arial, helvetica,
                        sans-serif;
                        Arial Black=arial black, avant garde;
                        Book Antiqua=book antiqua,palatino;
                        Comic Sans MS=comic sans ms,sans-serif;
                        Courier New=courier new,courier;
                        Georgia=georgia,palatino;
                        Helvetica=helvetica;
                        Impact=impact,chicago;
                        Symbol=symbol;
                        Tahoma=tahoma,arial,helvetica,sans-serif;
                        Terminal=terminal,monaco;
                        Times New Roman=times new roman,times;
                        Trebuchet MS=trebuchet ms,geneva;
                        Verdana=verdana,geneva;
                        Webdings=webdings;
                        Wingdings=wingdings,zapf dingbats`,

                    // Tab
                    tabfocus_elements: ':prev,:next',
                    object_resizing: true,

                    // Image
                    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions'
                }
            }
        },
        /**
         * 父组件引用是还应通过 传来三个函数分别为
         * @on-ready             tinymce编辑器实例初始化是触发
         * @on-upload-fail       图片上传失败时触发
         * @on-upload-complete   图片上传完成时触发
         * @on-ready             tinymce实例被销毁前触发
         * */
        props: {
            value: {
                default: '',
                type: String
            },
            config: {
                type: Object,
                default: () => {
                    return {
                        theme: 'modern',
                        height: 300
                    }
                }
            },




            //图片上传有关
            url: { //路径
                default: '',
                type: String
            },
            //上传格式
            accept: {
                default: 'image/jpeg, image/png',
                type: String
            },
            //图片最大上传尺寸
            maxSize: {
                default: 2097152,  //2M
                type: Number
            },
            ////XMLHttpRequest.withCredentials 跨域请求时是否携带Cookie的问题
            withCredentials: {
                default: false,
                type: Boolean
            }


        },

        methods: {
            init () {
                const self = this;
                this.Editor = window.tinymce.init({
                    // 默认配置
                    ...this.DefaultConfig,

                    // prop内传入的的config
                    ...this.config,

                    // 挂载的DOM对象
                    selector: `#${this.Id}`,




                    // 图片上传 , 图片上传时， 会掉这个函数进行上传图片，  blobInfo是 上传文件的一些信息。 success是上传成功的回调函数，failure是上传失败的回调
                    images_upload_handler: function (blobInfo, success, failure) {
                        // console.log(blobInfo.blob(),"上传信息");


                        if (blobInfo.blob().size > self.maxSize) {
                            failure('文件体积过大')
                        }

                        if (self.accept.indexOf(blobInfo.blob().type) >= 0) {
                            uploadPic()
                        } else {
                            failure('图片格式错误')
                        }
                        function uploadPic () {
                            const xhr = new XMLHttpRequest();
                            const formData = new FormData();
                            //XMLHttpRequest.withCredentials 跨域请求时是否携带Cookie的问题
                            xhr.withCredentials = self.withCredentials;
                            xhr.open('POST', self.url); //上传方法和地址
                            xhr.onload = function () {

                                if (xhr.status !== 200) {
                                    // 抛出 'on-upload-fail' 钩子 (触发通过组件属性传来的 onUploadFail函数)
                                    self.$emit('on-upload-fail');
                                    failure('上传失败: ' + xhr.status);
                                    return
                                }

                                const json = JSON.parse(xhr.responseText);
                                // 抛出 'on-upload-success' 钩子
                                self.$emit('on-upload-complete' , [
                                    json, success, failure
                                ])
                            };
                            formData.append('file', blobInfo.blob());
                            xhr.send(formData)
                        }
                    },




                    /*
                    setup 配置
                    此选项允许您指定将在呈现TinyMCE编辑器实例之前执行的回调。

                    要指定安装回调，请提供setup带JavaScript功能的选项。此函数应该有一个参数，它是对正在设置的编辑器的引用。

                    此设置的常见用例是向TinyMCE添加编辑器事件。例如，如果要向TinyMCE添加单击事件，可以通过设置配置设置添加它。
                    */
                    /**
                    .on的使用详见： https://www.tiny.cloud/docs-4x/api/tinymce/tinymce.editor/#on
                    按名称将事件侦听器绑定到特定事件（特定的事件发生时，执行回调）。有关每个事件的更多详细信息，请参阅事件参考。https://www.tiny.cloud/docs/advanced/events/
                     此处用到的解释：
                     事件名            类型                  触发
                     init   tinymce实例核心方法core  在初始化编辑器时激发。
                    change            core          将撤消级别添加到编辑器时激发。
                     undo             core          当在编辑器内进行更改以导致添加撤消级别时，将触发此事件。
                     redo             core          激发以还原撤消事件的效果。
                     input            vue的          只要textarea值(编辑器)变化就会触发
                    **/
                    setup: (editor) => {
                        console.log(editor,"富文本实例");
                        // 抛出 'on-ready' 事件钩子
                        editor.on(
                            'init', () => {
                                self.loading = false; //取消加载图标
                                self.$emit('on-ready');
                                editor.setContent(self.value)
                            }
                        );
                        // 抛出 'input' 事件钩子，同步value数据

                        editor.on(
                            'input change undo redo', () => {
                                //发送到父的v-model
                                // console.log(editor.getContent(),"内容内容");
                                self.$emit('input', editor.getContent())
                            }
                        )
                    }
                })
            },
            /*init(){

            }
*/

        },
        mounted() {
            // console.log(Time);
            console.log(window);
            // window.tinymce.baseURL = '/public/tinymce';

            //tinymce配置初始化
            this.init();

        },
        beforeDestroy () {
            // 销毁tinymce
            this.$emit('on-destroy');  //触发父组件传来了的方法
            window.tinymce.remove(`#${this.Id}`);
        },


    }

</script>
<style scoped>
    /*@import "../assets/tinymce/skins/lightgray/skin.min.css";*/


</style>

