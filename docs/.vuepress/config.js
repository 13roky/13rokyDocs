module.exports = {
    title: '13rokyDocs',
    description: 'Java路途漫漫,用于记录Java学习过程中学习到的知识',
    base: '/13rokyDocs/', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等


    themeConfig: {
        //侧边栏展开所有标题
        displayAllHeaders: false, // 默认值：false

        nav: [
            { text: '首页', link: '/' },
            { text: 'CodeServer', link: 'http://code.13roky.tk' },
            { text: 'Github', link: 'https://github.com/13roky' },
            { text: 'MyBlog', link: 'http://cnblog.13roky.tk' },
            {
                text: '常用链接', items: [
                    { text: 'Baidu', link: 'https://baidu.com' },
                    { text: 'Google', link: 'https://google.com' },
                ],
            },
            {
                text: 'API文档', items: [
                    { text: 'JDK 11中文', link: 'https://www.apiref.com/java11-zh/index.html' },
                    { text: 'JDK 11', link: 'https://docs.oracle.com/en/java/javase/11/docs/api/index.html' },
                    { text: '更多API文档', link: 'https://www.apiref.com' },
                ],
            },

            {
                text: '更多文档',
                items: [
                    { text: 'JavaDoc', link: '/JavaDoc/Java多线程.html' },
                ]
            }
        ],

        /**
         * 设置侧边栏最大深度
         * 一般是以单个md文件中的 # ## ### #### 这几个标题文字为锚点自动生成导航
         * **/

        sidebarDepth: 1,
        // 设置侧边栏内容

        sidebar: {
            '/JavaDoc/': [
                {
                    title: 'Java基础',
                    collapsable: false,
                    children: [
                        { title: 'Java异常', path: 'Java异常' },
                    ]
                },

                {
                    title: 'Java进阶',
                    collapsable: false,
                    children: [
                        { title: 'Java多线程', path: 'Java多线程' },
                        { title: 'Java常用类', path: 'Java常用类' },
                        { title: 'Java枚举类和注解', path: 'Java枚举类和注解' },
                    ]
                }
            ],

            '/Dir/': [

                'Dir'

            ],
        }
    },

    plugins: [
        [
            '@vuepress/back-to-top',
        ],

        [
            'fulltext-search',
        ],

        [
            'vuepress-plugin-right-anchor',
            {
                showDepth: 1,
                ignore: [
                    '/',
                    '/api/'
                    // 更多...
                ],
                expand: {
                    default: false,
                    trigger: 'hover'
                },
                customClass: 'your-customClass',
                disableGlobalUI: false,
            }
        ],

        // ['thirdparty-search', {

        //     thirdparty: [ // 可选，默认 []
        //         {
        //             title: '在CSDN中搜索',
        //             frontUrl: 'https://so.csdn.net/so/search/all?q=',
        //         },
        //         {
        //             title: '在MDN中搜索', // 在搜索结果显示的文字
        //             frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //             behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        //         },
        //         {
        //             title: '在Runoob中搜索',
        //             frontUrl: 'https://www.runoob.com/?s=',
        //         },
        //         {
        //             title: '在Vue API中搜索',
        //             frontUrl: 'https://cn.vuejs.org/v2/api/#',
        //         }
        //     ]
        // }],
    ]
}
