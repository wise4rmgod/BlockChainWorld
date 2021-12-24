const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BlockChain Tutorials',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  theme: 'yuu',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */ 
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
    backToTop: true,
    nav: [
      {
        text: 'Doc',
        link: '/guide/',
      },
      {
        text: 'Video',
        link: '/config/'
      },
      {
        text: 'Tutorials',
        link: '/tutorial/'
      },
      {
        text: 'Author',
        link: '/author/'
      },
      {
        text: 'Github',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Solidity',
          collapsable: true,
          children: [
            '', 'installation','smartcontract',
            'helloworld','syntax','comment','datatypes', 'variable','struct','Ether and Wei','constructor',
            'enums','gas','conversion','visibility','interfaces','mapping','array','data Location','import','loops','function','operators','conditional statement',
          ],
          
        },
       
         {
          title: 'Blockchain',
          collapsable: true,
          children: [
            'block_introduction',
          ],
         },
        
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress-reco/vuepress-plugin-back-to-top',
    [
      "@mr-hope/sitemap",
      {
        // your options
      },
    ],
       
  ]
}
