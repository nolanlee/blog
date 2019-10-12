module.exports = {
  title: 'Fresh Meat',
  description: 'Nolan\'s Blog',
  theme: '@vuepress/blog',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpeg' }]
  ],
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
          },
        ],
      },
    ],
  ],
}
