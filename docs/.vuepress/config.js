const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  head: [['link', { rel: 'icon', href: '/images/icon256.png' }]],
  title: 'Yianky',  // 设置网站标题
  description : '一款次生代的浏览器',
  base : '/v1',
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
        text: 'Plugin yian3',
        children: ['/yian3/yian3.md'],
      },
      { text: 'Github', link: 'https://github.com/Macrohoo', target: '_blank' },
      { text: '哔哩哔哩', link: 'https://space.bilibili.com/41116713', target: '_self', rel: '' }
    ],
  }),
}