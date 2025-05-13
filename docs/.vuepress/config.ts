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
        text: '宇霖的 web 博客',
        items: [{ text: 'Github', link: 'https://github.com/velin666' }],
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
