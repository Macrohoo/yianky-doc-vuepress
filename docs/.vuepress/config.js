const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/images/icon256.png' }],
    [
      // 添加百度统计代码
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?56c08efe924f0aa2c23c2256632fdaa1";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  title: 'Yianky',  // 设置网站标题
  description : '一款次生代的浏览器',
  base : '/',
  theme: defaultTheme({
    logo: '/images/icon256.png',
    //repo: '',  这个属性好像是直接对文章能编辑
    navbar: [
      {
        text: 'Yianky Browser',
        children: [
          {
            text: '核心功能',
            children: ['/yianky/tasks.md']
          },
          {
            text: '亮点功能',
            children: ['/yianky/mobile.md', '/yianky/globalSearch.md']
          }
        ]
      },
      {
        text: 'Vue3 Plugin yian3',
        children: [
          '/yian3/yian3.md',
          {
            text: '指令',
            children:['/yian3/v-dialog.md']
          },
          {
            text: '组件',
            children: ['/yian3/ya-checkbox.md']
          }
        ],
      },
      {
        text: '开发者指南',
        children: [
          '/developer/rule.md',
          '/yianky/sdk.md'
        ]
      },
      { text: 'Github', link: 'https://github.com/Macrohoo', target: '_blank' },
      { text: '哔哩哔哩', link: 'https://space.bilibili.com/41116713', target: '_self', rel: '' }
    ],
  }),
  plugins: [
    docsearchPlugin({
      apiKey: 'cccec3cf58902ebfd7e4eb9373cafa28',
      indexName: '<INDEX_NAME>',
    }),
  ],
}
