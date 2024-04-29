const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'promptflowx',
  markdown: {
    extendMarkdown: md => {
      const markdownQuote = require('markdown-it-quote')
      md.use(markdownQuote);
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/logo.svg' }]
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Streamline LLM-based AI applications'
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
        sidebar: {
        },
        nav:  [
          { text: "ChatDev", link: `https://chatdev.toscl.com/` },
        ],
        lastUpdated: 'Last Updated'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/10cl/promptflowx',
    docsRepo: 'https://github.com/10cl/promptflowx',
    docsDir: 'source',
    editLinks: false
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://promptflowx.toscl.com',
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