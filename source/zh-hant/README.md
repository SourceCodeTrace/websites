---
home: true 
heroImage: /logo.png 
actionText: 了解更多 
actionLink: /introduction.html 
features:
- title: 高級Markdown模板 
  details: 增強文章的可信度，通過新的標準定義允許程式碼區塊包含語言、起始行、高亮位置和來源地址。
- title: 多平台解析支援 
  details: 支援開源的markdown-it、vurepress和sublime解析插件，適用於不同平台。
- title: MarkdownQuote插件整合 
  details: 與JetBrains IDE無縫整合，可以輕鬆複製符合新Markdown標準的程式碼區塊。 
footer: 版權 © 2023 SourceCodeTrace
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
* 點擊 **view raw** 直接跳轉到程式碼區塊對應的原始碼（分支、版本、位置、作者等信息）。
* 在JetBrains IDE中使用MarkdownQuote插件，可以自動生成引用，方便引用程式碼來源。 
:::

（注：以上文本保留了原始內容，同時增強了展示效果和清晰度。如果您有其他偏好或特定要求，請告知我。）