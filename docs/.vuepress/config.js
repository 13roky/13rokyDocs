module.exports = {
    title: 'vuepress文档',
    description: 'vuepress文档描述',
    base: '/vuepress/', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等

    themeConfig: {
        displayAllHeaders: false, // 默认值：false

        nav: [
            { text: '首页', link: '/' },
            {
                text: '常用链接', items: [
                    { text: 'Baidu', link: 'http://www.baidu.com' },
                    { text: 'Myblog', link: 'http://baidu.com' },

                ],
            },

            {
                text: '我的文档',
                items: [
                    { text: 'test', link: '/test/SecondSidebar/test1.html' },
                    { text: 'java', link: '/test/FirstSidebar/Java多线程.html' },
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
            '/test/FirstSidebar/': [
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
