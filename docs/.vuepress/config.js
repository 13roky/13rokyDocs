module.exports = {
    title: '13roky\'s JavaDoc',
    description: 'Java路途漫漫,用于记录Java学习过程中学习到的知识',
    base: '/Vuepress_Java/', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等

    themeConfig: {
        displayAllHeaders: true, // 默认值：false

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
                text: '更多文档',
                items: [
                    { text: 'test', link: '/test/SecondSidebar/test1.html' },
                    { text: 'java', link: '/FirstSidebar/Java多线程.html' },
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
            '/FirstSidebar/': [
                {
                    title: 'Java多线程',
                    children: ['Java多线程', 'Java异常']
                }
            ],

            '/test/SecondSidebar/': [
                {
                    title: 'Sed',
                    children: ['test1']
                }
            ],
        }
    }
}
