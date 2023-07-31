const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: '10cl',
  markdown: {
    extendMarkdown: md => {
      const markdownQuote = require('markdown-it-quote')
      md.use(markdownQuote);
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/images/favicon.ico' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        lang: 'zh-Hans',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
        },
        nav:  [
          { text: "Android系统", link: `/index_android_framework` },
        ],
        lastUpdated: '最后更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/10cl',
    docsRepo: 'https://github.com/SourceCodeTrace/websites',
    docsDir: 'www',
    editLinks: false
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://www.toscl.com',
        exclude: ['/404.html'],
        dateFormatter: (time) => {
          timestampCache[time]
        }
      }
    ],
    [
      'clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          var original = timestamp

          moment.locale(langMap[lang])
          var localized = moment(original).format('lll')
          
          moment.locale('zh-Hans')
          var iso = moment(original).toISOString()
          timestampCache[localized] = iso

          return localized
        }
      }
    ]
  ]
}