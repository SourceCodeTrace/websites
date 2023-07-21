---
home: true
heroImage: /logo.png
actionText: Learn more
actionLink: /introduction.html
features:
- title: Markdown 新标准
  details: 通过新标准定义，让代码块可包含语言、代码起始行数、高亮位置、以及代码来源地址，让您的文章更具可信度
- title: 多平台解析支持
  details: 开源 markdown-it 支持插件，vurepress 支持, sublime 解析插件支持
- title: Jetbrain一键引用标准代码块 [MarkdownQuote]()
  details: 通过Jetbrain IDE 分析源码，通过 MarkdownQuote 插件右键直接复制符合 Markdown 新标准的代码块
footer: Copyright © 2023 SourceCodeTrace
---

### 引入代码块的 Markdown 新标准

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
- 点击 **view raw** 直接跳转到代码块对应的具体来源（分支、版本、位置、作者等）  
- JetBrain IDE中可以通过 MarkdownQuote 插件自动生成引用
:::
