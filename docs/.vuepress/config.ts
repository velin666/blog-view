export default {
  title: 'xx合集',
  description: 'xx合集展示',
  theme: 'reco',
  base: '/blog-view-pro/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '宇霖的 h5',
        items: [
          { text: 'Github', link: 'https://github.com/velin666' },
          { text: '786168197@qq.com', link: '786168197@qq.com' },
        ],
      },
    ],
    logo: '/assets/img/logo.png',
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: false, // 不折叠
      },
      {
        title: 'demo示例',
        path: '/DEMO',
        collapsable: false, // 不折叠
      },
    ],
    subSidebar: 'auto',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': './',
      },
    },
  },
}
