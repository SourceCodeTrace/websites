---
home: true 
heroImage: /logo.png 
actionText: 了解更多
actionLink: /introduction.html 
features:
- title: 高级Markdown模板
  details: 增强文章的可信度，通过新的标准定义允许代码块包含语言、起始行、高亮位置和源地址。
- title: 多平台解析支持
  details: 支持开源的markdown-it、vurepress和sublime解析插件，适用于不同平台。
- title: MarkdownQuote插件集成
  details: 与JetBrains IDE无缝集成，可以通过MarkdownQuote插件轻松复制符合新Markdown标准的代码块。 

footer: 版权 © 2023 SourceCodeTrace
---

### Markdown 模板

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
* 点击 **view raw** 直接跳转到代码块对应的源代码（分支、版本、位置、作者等信息）。
* 在JetBrains IDE中使用MarkdownQuote插件，可以自动生成引用，方便引用代码来源。 
:::

（注：以上文本保留了原始内容，同时增强了展示效果和清晰度。如果您有其他偏好或特定要求，请告知我。）