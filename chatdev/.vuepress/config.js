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
      description: 'Personalize your AI Town and build your GPTs with PromptIDE'
    },
    '/zh/': {
      lang: 'zh',
      description: '个性化你的AI小镇并通过提示词工程开发环境构建你的智能体'
    },
    '/zh-tw/': {
      lang: 'zh-tw',
      description: '個性化你的AI小鎮並透過提示詞工程開發環境構建你的智能體'
    },
    '/ja/': {
        lang: 'ja',
        description: 'AIタウンを個性化し、PromptIDEを使用してあなたのGPTsを構築します'
    },
    '/in/': {
        lang: 'in',
        description: 'Personalisasi Kota AI Anda dan bangun GPTs Anda melalui PromptIDE'
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
          { text: "Youtube", link: `https://www.youtube.com/channel/UCWk47fQ5eM6qKHXcWkr0TsQ` },
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
          { text: "下载安装", link: `https://gitee.com/toscl/chatdev/releases/download/chatdev1.3.0/chatdev1.3.0.zip` },
          { text: "哔哩哔哩", link: `https://space.bilibili.com/442015702` },
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
          { text: "Youtube", link: `https://www.youtube.com/channel/UCWk47fQ5eM6qKHXcWkr0TsQ` },
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
          { text: "Youtube", link: `https://www.youtube.com/channel/UCWk47fQ5eM6qKHXcWkr0TsQ` },
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
          { text: "Youtube", link: `https://www.youtube.com/channel/UCWk47fQ5eM6qKHXcWkr0TsQ` },
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