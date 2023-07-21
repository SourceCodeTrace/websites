# markdown-it-quote

[![NPM version](https://img.shields.io/npm/v/markdown-it-quote.svg?style=flat)](https://npmjs.com/package/markdown-it-quote)

**markdown-it-quote** is a plugin for [markdown-it](https://github.com/markdown-it/) that enhances code fences with various functionalities.

![Example](https://raw.githubusercontent.com/SourceCodeTrace/websites/main/source/.vuepress/public/images/quote_to_html.png)

Do you love the style shown above? You can effortlessly achieve it with MarkdownQuote. [MarkdownQuote](https://source.toscl.com/markdown_quote/) is a JetBrains plugin designed to help you efficiently copy code fences in your IDE. For more details, visit the [SourceCodeTrace Project](https://source.toscl.com).

## Usage

To use markdown-it-quote, install the package via NPM:

```bash
npm i markdown-it-quote
```

Then, you can use it in your JavaScript code like this:

```js
const MarkdownIt = require('markdown-it');
const markdownQuote = require('markdown-it-quote');

const md = new MarkdownIt();
md.use(markdownQuote);

md.render(markdownString);
```

Note that the highlighted line between the language name and opening curly bracket is optional.

For added customization, you can apply some custom styles to the gist meta, as recommended:

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

See [Vuepress Example](https://github.com/SourceCodeTrace/websites/commit/00edc82e100538169c89a914a6dac4103df37a94#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R7) for an illustrative implementation.

Feel free to tweak the styles to match your preferences.

## More Examples

Here are some usage examples to demonstrate various functionalities:

* Wrap lines 3125 to 3131, and highlight lines 3126 to 3130, linking to a URL:

    ```markdown
    ```java {3125-3131} {3129,3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* Wrap lines 3125 to 3131, linking to a URL:

    ```markdown
    ```java {3125-3131} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* Just link to a URL:

    ```markdown
    ```java (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* Highlight lines 1 to 2:

    ```markdown
    ```java {1-2}
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* Highlight line 3:

    ```markdown
    ```java{3}
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```

* Just specify the language:

    ```markdown
    ```java
            // Use current adjustment when freezing, set adjustment when unfreezing.
            if (state.getCurAdj() >= ProcessList.CACHED_APP_MIN_ADJ && !opt.isFrozen()
                    && !opt.shouldNotFreeze()) {
                mCachedAppOptimizer.freezeAppAsyncLSP(app);
            } else if (state.getSetAdj() < ProcessList.CACHED_APP_MIN_ADJ) {
                mCachedAppOptimizer.unfreezeAppLSP(app, oomAdjReason);
            }
        }
    ```


## Contributing

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😄

## Author

**markdown-it-quote** is authored and maintained by [10cl](https://github.com/10cl) and released under the [MIT License](./LICENSE). Special thanks to all the contributors ([list](https://github.com/10cl/markdown-it-quote/contributors)) who have helped improve this