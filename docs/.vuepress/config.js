module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/ioc.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false显示所有页面的标题链接
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            items: [
                { text: 'Chinese', link: '/language/chinese' },
                { text: 'Japanese', link: '/language/japanese' }
            ]
        }
    ],
    sidebar: {
        '/guide/': [
            {
                title: '布局类组件',
                collapsable: true,
                children: [
                    'base/one',
                    'base/test2',
                    'base/test3',
                    'base/test4',
                ]
            }
        ],
    }
    }
}