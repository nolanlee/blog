module.exports = {
  base: '/blog/',
  title: '🥩 Fresh Meat',
  description: 'Nolan\'s Blog',
  theme: '@vuepress/blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    modifyBlogPluginOptions(blogPluginOptions) {
      const comment = {
        service: 'disqus',
        shortname: 'nolanleee',
      }

      return { ...blogPluginOptions, comment }
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpeg' }]
  ]
}
