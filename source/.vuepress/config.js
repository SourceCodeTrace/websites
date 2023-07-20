const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
title: 'SourceCodeTrace',
  markdown: {
    extendMarkdown: md => {
      const markdownQuote = require('markdown-it-quote')
      md.use(markdownQuote);
    }
  },
  head: [
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Make your code traceable'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: '让你的代码可追溯来源'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      description: '讓你的程式碼可追溯來源'
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
        nav: getNavbar('/', 'Introduction', 'MarkdownQuote', 'markdown-it-quote', 'About'),
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
        sidebar: {
        },
        nav: getNavbar('/zh-hans/', '简介', 'MarkdownQuote', 'markdown-it-quote', '关于'),
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
        sidebar: {
        },
        nav: getNavbar('/zh-hant/', '簡介', 'MarkdownQuote', 'markdown-it-quote', '关于'),
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/SourceCodeTrace/websites',
    docsRepo: 'https://github.com/SourceCodeTrace/websites',
    docsDir: 'source',
    editLinks: true
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://source.toscl.com',
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

function getNavbar(prefix, introduction, quotePlugin, parsePlugin, about) {
  return [
    { text: introduction, link: `${prefix}introduction` },
    { text: quotePlugin, link: `${prefix}markdown_quote` },
    { text: parsePlugin, link: `${prefix}parse_plugin` },
    { text: about, link: `${prefix}about` },
  ]
}