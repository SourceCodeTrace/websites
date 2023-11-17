const moment = require('moment')
const langMap = {
  "zh": "zh-cn",
  "zh-tw": "zh-tw",
  "ja": "ja",
  "in": "in"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'ChatDev IDE',
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
      description: 'AI Town & PromptIDE & GPTs'
    },
    '/zh/': {
      lang: 'zh',
      description: 'AI小镇 & PromptIDE & GPTs'
    },
    '/zh-tw/': {
      lang: 'zh-tw',
      description: 'AI Town & PromptIDE & GPTs'
    },
    '/ja/': {
        lang: 'ja',
        description: 'AI Town & PromptIDE & GPTs'
    },
    '/in/': {
        lang: 'in',
        description: 'AI Town & PromptIDE & GPTs'
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
          { text: "Discord", link: `https://discord.com/invite/fdjWfgGPjb` },
        ],
        lastUpdated: 'Last Updated'
      }
      ,
      '/zh/': {
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
          { text: "介绍", link: `/zh/introduce` },
          { text: "Discord", link: `https://discord.com/invite/fdjWfgGPjb` },
        ],
        lastUpdated: '最后更新'
      },
      '/zh-tw/': {
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
          { text: "介绍", link: `/zh-tw/introduce` },
          { text: "Discord", link: `https://discord.com/invite/fdjWfgGPjb` },
        ],
        lastUpdated: '最後更新'
      },
      '/ja/': {
        selectText: '言語',
        label: '日本語',
        editLinkText: 'GitHubでこのページを編集する',
        serviceWorker: {
          updatePopup: {
            message: "新しいコンテンツが利用可能です.",
            buttonText: "更新"
          }
        },
        sidebar: {},
        nav:  [
          { text: "紹介", link: `/ja/introduce` },
          { text: "Discord", link: `https://discord.com/invite/fdjWfgGPjb` },
        ],
        lastUpdated: '最終更新'
      },
      '/in/': {
        selectText: 'Bahasa',
        label: 'Bahasa Indonesia',
        editLinkText: 'Edit halaman ini di GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Konten baru tersedia.",
            buttonText: "Muat Ulang"
          }
        },
        sidebar: {},
        nav:  [
          { text: "Pengantar", link: `/in/introduce` },
          { text: "Discord", link: `https://discord.com/invite/fdjWfgGPjb` },
        ],
        lastUpdated: 'Terakhir Diperbarui'
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