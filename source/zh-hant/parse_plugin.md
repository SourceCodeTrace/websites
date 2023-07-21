# markdown-it-quote

[![NPM版本](https://img.shields.io/npm/v/markdown-it-quote.svg?style=flat)](https://npmjs.com/package/markdown-it-quote)

**markdown-it-quote**是一個用於[markdown-it](https://github.com/markdown-it/)的插件，支持多種代碼圍欄功能。

![示例](https://raw.githubusercontent.com/SourceCodeTrace/websites/main/source/.vuepress/public/images/quote_to_html.png)

您喜歡上面展示的樣式嗎？您可以使用MarkdownQuote輕鬆實現。[MarkdownQuote](https://source.toscl.com/markdown_quote/)是JetBrains插件，可以幫助您在IDE中高效地複製代碼圍欄。更多詳細資訊請參閱[SourceCodeTrace專案](https://source.toscl.com)。

## 使用方法

要使用markdown-it-quote，首先通過NPM安裝該包：

```bash
npm i markdown-it-quote
```

然後，您可以在JavaScript代碼中這樣使用它：

```js
const MarkdownIt = require('markdown-it');
const markdownQuote = require('markdown-it-quote');

const md = new MarkdownIt();
md.use(markdownQuote);

md.render(markdownString);
```

請注意，語言名稱和左大括號之間的高亮行是可選的。

為了增加自定義樣式，您可以對gist元數據應用一些自定義樣式，推薦如下：

```css
.gist-meta-quote {
    font-size: 12px;
    padding: 10px;
    overflow: hidden;
    color: white;
    border-radius: 0 0 6px 6px;
}

.gist-meta-quote a {
    float: right;
    color: white;
    text-decoration: underline;
}
```

可以參考[Vuepress示例](https://github.com/SourceCodeTrace/websites/commit/00edc82e100538169c89a914a6dac4103df37a94#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R7)進行演示。

隨心定制樣式以適合您自己的需要。

## 更多示例

以下是一些用法示例，演示不同的功能：

* 包裹第3125到3131行，並且將第3126到3130行標記為高亮，並鏈接到URL：

    ````markdown
    ```java {3125-3131} {3129,3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 凍結時使用當前調整，解凍時設置調整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```
    ````

* 包裹第3125到3131行，並鏈接到URL：

    ````markdown
    ```java {3125-3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 凍結時使用當前調整，解凍時設置調整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```
    ````

* 只鏈接到URL：

    ````markdown
    ```java (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 凍結時使用當前調整，解凍時設置調整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```
    ````

* 高亮第1至2行：

    ````markdown
    ```java {1-2}
            // 凍結時使用當前調整，解凍時設置調整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```
    ````

* 高亮第3行：

    ````markdown
    ```java{3}
            // 凍結時使用當前調整，解凍時設置調整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```
    ````

* 僅指定語言：

    ````markdown
    ```java
            // 凍結時使用當前調整，解1. 複製該倉庫。
    ```
    ````


2. 創建您的特性分支：`git checkout -b my-new-feature`
3. 提交您的更改：`git commit -am 'Add some feature'`
4. 推送到分支：`git push origin my-new-feature`
5. 提交拉取請求 😄

## 作者

**markdown-it-quote**由[10cl](https://github.com/10cl)撰寫和維護，並在[MIT許可證](./LICENSE)下發布。特別感謝所有[貢獻者](https://github.com/10cl/markdown-it-quote/contributors)的幫助，使這個專案變得更好。