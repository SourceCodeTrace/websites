---
home: true
heroImage: /logo.png
actionText: Learn more
actionLink: /introduction.html
features:
  - title: Markdown Template
    details: Add credibility to your articles with new standard definitions that allow blocks of code to include language, start line, highlight location, and source address
  - title: Multi-platform parsing support
    details: Open source markdown-it support plugin, vurepress support, sublime parsing plugin support
  - title: MarkdownQuote Plugin
    details: With the JetBrains IDE, code blocks that comply with Markdown's new standard can be copied directly by right-clicking the MarkdownQuote plug-in
footer: Copyright © 2023 SourceCodeTrace
---

### Markdown Template

````markdown
```java {3125-3131} {3126-3130} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#3125-L3131)
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

```java {3125-3131} {3126-3130} (https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#3125-L3131)
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
- Click **view raw** to jump directly to the specific source corresponding to the code block (branch, version, location, author, etc.)
- References can be generated automatically in the JetBrain IDE through the MarkdownQuote plugin
  :::
