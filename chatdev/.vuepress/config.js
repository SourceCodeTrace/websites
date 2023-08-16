const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'ChatDev',
  markdown: {
    extendMarkdown: md => {
      const markdownQuote = require('markdown-it-quote')
      md.use(markdownQuote);
    }
  },
  head: [
    ['link', {rel: 'icon', type: 'image/png', size: '16x16', href: '/images/favicon.png'}]
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Mastering the Virtual Social Realm, Shaping the Future of Intelligent Interactions.'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: '掌控虚拟社交世界，塑造智能互动未来。'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      description: '掌握虛擬社交世界，塑造智能互動未來。。'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: {},
        nav:  [
          { text: "Introduce", link: `/introduce` },
        ],
        lastUpdated: 'Last Updated'
      }
      ,
      '/zh-hans/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {},
        nav:  [
          { text: "介绍", link: `/zh-hans/introduce` },
        ],
        lastUpdated: '最后更新'
      },
      '/zh-hant/': {
        selectText: '語言',
        label: '繁體中文',
        editLinkText: '在 GitHub 上編輯此頁',
        serviceWorker: {
          updatePopup: {
            message: "發現新內容可用.",
            buttonText: "重新整理"
          }
        },
        sidebar: {},
        nav:  [
          { text: "介绍", link: `/zh-hant/introduce` },
        ],
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/10cl/chatdev',
    docsRepo: 'https://github.com/10cl/chatdev',
    docsDir: 'chatdev',
    editLinks: false
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://chatdev.toscl.com',
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

          moment.locale('en')
          var iso = moment(original).toISOString()
          timestampCache[localized] = iso

          return localized
        }
      }
    ]
  ]
}