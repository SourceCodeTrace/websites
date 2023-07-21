---
home: true 
heroImage: /logo.png 
actionText: Learn more 
actionLink: /introduction.html 
features:
- title: Advanced Markdown Template 
  details: Enhance your articles with standardized code blocks, including language, start line, highlight location, and source address for better credibility.
- title: Multi-platform Parsing Support 
  details: Enjoy support for open-source markdown-it, vurepress, and sublime parsing plugins, making it versatile across different platforms.
- title: MarkdownQuote Plugin Integration 
  details: Seamless integration with JetBrains IDE allows you to easily copy code blocks adhering to the new Markdown standard using the MarkdownQuote plugin. 
footer: Copyright © 2023 SourceCodeTrace
---

### Advanced Markdown Template

````markdown
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


::: tip

* Click **view raw** to directly access the specific source corresponding to the code block (branch, version, location, author, etc.).
* The MarkdownQuote plugin in JetBrain IDE generates references automatically for easier citation. :::

(Note: The text above retains the original content while enhancing the presentation and clarity. If you have any further preferences or specific requirements, please let me know.)