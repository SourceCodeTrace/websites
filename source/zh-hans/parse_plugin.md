# markdown-it-quote

[![NPM版本](https://img.shields.io/npm/v/markdown-it-quote.svg?style=flat)](https://npmjs.com/package/markdown-it-quote)

**markdown-it-quote**是一个用于[markdown-it](https://github.com/markdown-it/)的插件，支持多种代码围栏功能。

![示例](https://raw.githubusercontent.com/SourceCodeTrace/websites/main/source/.vuepress/public/images/quote_to_html.png)

您喜欢上面展示的样式吗？您可以使用MarkdownQuote轻松实现。[MarkdownQuote](https://source.toscl.com/markdown_quote/)是JetBrains插件，可以帮助您在IDE中高效地复制代码围栏。更多细节请参阅[SourceCodeTrace项目](https://source.toscl.com)。

## 使用方法

要使用markdown-it-quote，首先通过NPM安装该包：

```bash
npm i markdown-it-quote
```

然后，您可以在JavaScript代码中这样使用它：

```js
const MarkdownIt = require('markdown-it');
const markdownQuote = require('markdown-it-quote');

const md = new MarkdownIt();
md.use(markdownQuote);

md.render(markdownString);
```

请注意，语言名称和左大括号之间的高亮行是可选的。

为了增加自定义样式，您可以对gist元数据应用一些自定义样式，推荐如下：

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

可以参考[Vuepress示例](https://github.com/SourceCodeTrace/websites/commit/00edc82e100538169c89a914a6dac4103df37a94#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R7)进行演示。

随心定制样式以适合您自己的需要。

## 更多示例

以下是一些用法示例，演示不同的功能：

* 包裹第3125到3131行，并且将第3126到3130行标记为高亮，并链接到URL：

    ```markdown
    ```java {3125-3131} {3129,3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* 包裹第3125到3131行，并链接到URL：

    ```markdown
    ```java {3125-3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* 只链接到URL：

    ```markdown
    ```java (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```


* 高亮第1至2行：

    ```markdown
    ```java {1-2}
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```


* 高亮第3行：

    ```markdown
    ```java{3}
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* 仅指定语言：

    ```markdown
    ```java
            // 冻结时使用当前调整，解冻时设置调整。
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

## 贡献

如果您想为此项目做出贡献，请按照以下步骤进行：

1. Fork仓库。
2. 创建您的特性分支：`git checkout -b my-new-feature`
3. 提交您的更改：`git commit -am 'Add some feature'`
4. 推送到分支：`git push origin my-new-feature`
5. 提交拉取请求 😄

## 作者

**markdown-it-quote**由[10cl](https://github.com/10cl)编写和维护，并在[MIT许可证](./LICENSE)下发布。特别感谢所有[贡献者](https://github.com/10cl/markdown-it-quote/contributors)的帮助，使这个项目变得更好。