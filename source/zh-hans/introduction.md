# 简介

SourceCodeTrace Project 帮助您在博客、文章记录的过程中，引入对应项目以及版本，行号等信息，让后续的读者，通过引用来源，能够进行更加深入的学习。

## SourceCodeTrace 为何而生？

SourceCodeTrace 的诞生主要有两大目的：
- 源代码的追溯性：强调追踪代码的来源、历史和演化过程，以确保代码的可信度和可追溯性。这可以包括引入代码的来源、版本控制、修改历史等方面。
- 代码来源的追踪：关注追踪代码的来源，确保代码的原始作者得到适当的认可和归属。这可以涉及到代码的引用、引入作者信息、遵守开源许可证等方面。
- 代码溯源：强调代码的起源，可以追溯到特定的项目、库、团队或个人。这有助于了解代码的背景、用途和背后的设计思想。

## SourceCodeTrace 与“传统”做法对比

### “传统”做法
传统的Markdown语法中，并没有内置的方式来指定代码块的高亮行数。
通常，Markdown的代码块只是用于展示代码，而不支持精确指定高亮行数的功能。   
````markdown
```java
public class HelloWorld {  
public static void main(String[] args) {  
System.out.println("Hello, world!");
}  
}
````
然而，一些扩展的Markdown解析器或编辑器可能提供了自定义的语法或插件，以支持在代码块中指定高亮行数。这
````markdown
```java {highlight=[1,3-5,7]}  
public class HelloWorld {  
public static void main(String[] args) {  
System.out.println("Hello, world!");  // 第1行、第3到第5行、第7行高亮  
}  
}
````

对于大型项目中的一段代码的引入，没有来源会导致以下问题：

- 缺乏参考和引用：不提供代码的来源将使读者难以查找和验证代码的准确性和可靠性。读者可能无法判断代码的作者、代码的版本或其他相关信息。
- 侵权问题：如果你从其他来源复制了代码但没有引用或提及原始作者或代码来源，这可能构成侵权行为，违反了知识产权法律和道德规范。
- 可信度和可复现性问题：提供代码的来源可以增强博客或文章的可信度。读者可以参考原始来源来验证代码，并获得更多的上下文信息。此外，如果读者想要在自己的环境中复现代码，代码的来源可以提供必要的指导和依赖信息。

为了解决这些问题，建议在博客或文章中引入代码块时，尽量提供代码的来源信息。这可以通过添加注释、链接到代码仓库或引用出处等方式来实现。这样可以提供更完整的信息，增加文章的可信度，同时尊重代码作者的权益。


### SourceCodeTrace 推荐做法

**wrap line 3125 to 3131, and highlight 3126 to 3130, link the url**
- 完整格式
  - 写法 
    ````markdown
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
    ````
  - 效果
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

上述的格式通过手写略显复杂， 在 Jetbrains IDE 中可搜索插件 [MarkdownQuote](https://plugins.jetbrains.com/plugin/22311-markdownquote)，可以一键简单Copy复制上述的格式，对于格式的解析，可以通过
[markdown-it-quote](https://www.npmjs.com/package/markdown-it-quote) 来实现。

- 兼容的选择  
  考虑到很多 markdown 解析工具，对新的标准支持有一定的工作量以及兼容性问题，通过原有的 markdown 格式，也能实现代码块的可追溯，
  这里也鼓励这种新的方式来写代码块。
    - 写法
      ````markdown
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
      [OomAdjuster.java#L3125-L3131](https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)
      ````
    - 效果
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
      [OomAdjuster.java#L3125-L3131](https://github.com/10cl/fwkdev/blob/android-13.0.0_r52/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3125-L3131)

在 Jetbrains IDE 中可搜索插件 [MarkdownQuote](https://plugins.jetbrains.com/plugin/22311-markdownquote)，可以一键简单Copy复制上述的格式。


## More Examples

- wrap line 3125 to 3131, link the url
````markdown
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
````
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

- just link the url
````markdown
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
````
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

- highlight line 1-2
````markdown
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
````
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

- highlight line 3
````markdown
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
````
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

- just language
````markdown
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
````
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