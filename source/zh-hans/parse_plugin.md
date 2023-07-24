# 引入代码来源：深入分析markdown-it-quote插件的魔法

[![NPM版本](https://img.shields.io/npm/v/markdown-it-quote.svg?style=flat)](https://npmjs.com/package/markdown-it-quote)

**markdown-it-quote**是一个用于[markdown-it](https://github.com/markdown-it/)的插件，支持多种代码围栏功能。

![示例](https://raw.githubusercontent.com/SourceCodeTrace/websites/main/source/.vuepress/public/images/quote_to_html.png)

这是 [SourceCodeTrace](https://source.toscl.com/zh-hans/) 项目之一，提供一种 Markdown Fence 的解析方案，包括对代码块的引用、高亮、链接等功能。

>SourceCodeTrace Project 帮助您在博客、文章记录的过程中，引入对应项目以及版本，行号等信息，让后续的读者，通过引用来源，能够进行更加深入的学习，在博客或文章中引入代码块时，尽量提供代码的来源信息。

对于新的Markdown格式，如果你觉得写起来很复杂， 可以用 [MarkdownQuote](https://source.toscl.com/zh-hans/markdown_quote/) 插件，让你在IDE中高效地复制代码块。
更多细节请参阅 [SourceCodeTrace 项目](https://source.toscl.com/zh-hans/markdown_quote/)。


## Markdown 写法
以下是一些用法示例，演示代码块包含的不同信息，方便大家在博客的记录中，引入代码块的来源信息。

* 代码块归属 第3125到3131行，并且将第3126到3130行标记为高亮，并链接到URL：

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

* 代码块归属 第3125到3131行，并链接到URL：

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


* 仅高亮第1至2行：

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

为了增加自定义样式，您可以使用以下CSS代码为代码引入链接一些自定义样式：
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

## vurepress 使用详解

- package.json 中引入依赖
```json {7-7} {7} (https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//package.json?#L7-L7)
    "markdown-it-quote": "^1.0.3"
```
[/package.json?#L7-L7](https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//package.json?#L7-L7)


- config.json 里面加入 markdown 拓展
```js {12-17} {14-15} (https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//source/.vuepress/config.js?#L12-L17)
  markdown: {
    extendMarkdown: md => {
      const markdownQuote = require('markdown-it-quote')
      md.use(markdownQuote);
    }
  },
```
[/source/.vuepress/config.js?#L12-L17](https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//source/.vuepress/config.js?#L12-L17)

- md 文件中直接用新的形式来写代码

````md {31-40} {31} (https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//source/README.md?#L31-L40)
```java {3125-3131} {3126-3130} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
        // Use current adjustment when freezing, set adjustment when unfreezing.
        if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                && !opt.shouldNotFreeze()) {
            mCachedAppOptimizer.freezeAppAsyncLSP(app);
        } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
            mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
        }
    }
```
````
[/source/README.md?#L31-L40](https://github.com/SourceCodeTrace/websites/blob/a5e03e1740746825652e7753f2b520ad1324fd05//source/README.md?#L31-L40)

完整的可以参考[Vuepress集成的patch](https://github.com/SourceCodeTrace/websites/commit/00edc82e100538169c89a914a6dac4103df37a94#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R7)。
随心定制样式以适合您自己的需要。


## 原理解析
### fence 拓展
```js {7-11} {7} (https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L7-L11)
export default (md) => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, options, , self] = args;
    const token = tokens[idx];
```
[/src/index.js?#L7-L11](https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L7-L11)

markdown-it 的拓展是通过重写 `md.renderer.rules.fence` 来实现对 fence的重新解析。

### 关键格式的解析
通过解析得到核心的解析块
```markdown
java {3125-3131} {3129,3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#3125-L3131)
```

从中解析出 代码块所在的起始行、结束行、高亮块、以及链接。
然后通过预定义的模板将其渲染出来。

从用户的角度来说，其中核心的要点就是要支持多种格式，比如原始的格式，以及为了推动代码块来源的可追溯性，还需要支持之前默认的格式。


核心的几块逻辑，就是通过正则表达式来解析出来的。

```js {1-5} {1} (https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L1-L5)
const regex1 = /(\S+)\s?(\{([\d,-]+)})\s?(\{([\d,-]+)})\s?([\S]+)/i;
const regex2 = /(\S+)\s+(\{\d+-\d+\})?\s+(\S+)/i;
const regex3 = /(\S+)\s?(\{([\d,-]+)})/i;
const regex4 = /(\S+)\s+([^\{]\S+)/i;
const regex5 = /(\S+)/i;
```
[/src/index.js?#L1-L5](https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L1-L5)

正则参考：
[https://regex101.com/r/osOtEv/1](https://regex101.com/r/osOtEv/1)

### 高亮支持
对于高亮的支持，需要支持两种形式，一种是

- 起始行-结束行
- 通过，分割的单行

```js {136-155} {137,142-147} (https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L136-L155)
      lines.map((split, index) => {
        const lineNumber = index + wrapLineNumStart;
        lineNumbersCode += `<span class="line-number">${lineNumber}</span><br>`;

        let inRange = false;
        if (highLightLineNumbers !== undefined) {
          inRange = highLightLineNumbers.some(([start, end]) => {
            if (start && end) {
              return lineNumber >= start && lineNumber <= end;
            }
            return lineNumber === start;
          });

          if (inRange) {
            highlightWrapCode += `<div class="highlighted">&nbsp;</div>`;
          } else {
            highlightWrapCode += `<br>`;
          }
        }
      });
```
[/src/index.js?#L136-L155](https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L136-L155)

### 链接的定义
```js {168-169} {168} (https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L168-L169)
      const gistInfo = `<div class="gist-meta-quote"><a href="${linkUrl}" target="_blank">view raw</a></div>`;

```
[/src/index.js?#L168-L169](https://github.com/10cl/markdown-it-quote/blob/1a7a67137ab4e2696b7f17f54e85ae5b0579d473//src/index.js?#L168-L169)
这里通过解析到 url 转换成html格式，点击 view raw 即新窗口打开原始的代码源链接。

这里如果不通过这种新的markdown格式，也可以仅采用默认代码块，然后加一条链接的形式，指明你的代码来源。

## 贡献

如果您想为此项目做出贡献，请按照以下步骤进行：

1. Fork仓库。
2. 创建您的特性分支：`git checkout -b my-new-feature`
3. 提交您的更改：`git commit -am 'Add some feature'`
4. 推送到分支：`git push origin my-new-feature`
5. 提交拉取请求 😄

## 作者
**markdown-it-quote**由[10cl](https://github.com/10cl)编写和维护，并在[MIT许可证](./LICENSE)下发布。