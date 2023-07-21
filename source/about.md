# 关于推动可追溯代码来源的计划
![logo_origin.png](/images/logo_origin.png)

## 缘由
  在互联网上，很多技术博客和文章引入代码段来帮助读者理解技术思路或记录对某个大型模块的原理分析和理解。然而，由于版本管理和技术变化，很多历史文章在读者读到精髓时，发现引入的代码块没有来源信息，导致不能对这个思路进行完整的了解，影响了读者的学习效果。

和ChatGpt 在关于这个问题上，做了一番详细的讨论，由此萌发了让我推动代码可溯源的动力。

:::tip
在博客或文章中引入代码块但没有引入代码的来源可能导致以下问题：
- 缺乏参考和引用：不提供代码的来源将使读者难以查找和验证代码的准确性和可靠性。读者可能无法判断代码的作者、代码的版本或其他相关信息。
- 侵权问题：如果你从其他来源复制了代码但没有引用或提及原始作者或代码来源，这可能构成侵权行为，违反了知识产权法律和道德规范。
- 可信度和可复现性问题：提供代码的来源可以增强博客或文章的可信度。读者可以参考原始来源来验证代码，并获得更多的上下文信息。此外，如果读者想要在自己的环境中复现代码，代码的来源可以提供必要的指导和依赖信息。
- 
为了解决这些问题，建议在博客或文章中引入代码块时，尽量提供代码的来源信息。这可以通过添加注释、链接到代码仓库或引用出处等方式来实现。这样可以提供更完整的信息，增加文章的可信度，同时尊重代码作者的权益。
:::

## 差异
### 传统的Markdown语法
  传统的Markdown语法中，并没有内置的方式来指定代码块的高亮行数。通常，Markdown的代码块只是用于展示代码，而不支持精确指定高亮行数的功能。   
然而，一些扩展的Markdown解析器或编辑器可能提供了自定义的语法或插件，以支持在代码块中指定高亮行数。这些扩展可以根据不同的工具和插件而有所不同。  
以下是一些常见的Markdown扩展和工具，它们可能提供了在代码块中指定高亮行数的功能：

- GitHub Flavored Markdown (GFM)  
  GFM支持在代码块中使用类似{highlight}的语法来指定高亮行。例如：
````markdown
```java {highlight=[1,3-5,7]}  
public class HelloWorld {  
public static void main(String[] args) {  
System.out.println("Hello, world!");  // 第1行、第3到第5行、第7行高亮  
}  
}
````

- Markdown Extra  
  Markdown Extra是一种扩展的Markdown语法，支持类似GFM的高亮行语法。具体语法可能因工具而异，请查阅Markdown Extra的文档以了解详细信息。
- VS Code和其他编辑器插件  
  某些编辑器（如VS Code）提供了Markdown插件，可以使用特定的语法来指定高亮行。这些插件通常使用自定义的语法或标记来实现，具体的语法和用法可以查阅插件的文档。
  请注意，这些功能的可用性和具体的语法取决于你所使用的Markdown解析器、编辑器或扩展。建议查阅相关工具的文档以了解是否支持在代码块中指定高亮行数，并找到相应的语法或插件来满足你的需求。
- Github
  - Github Markdown
    有人对此有一些建议 [Allow to highlight lines in a code block (github flavored markdown) #42489](https://github.com/orgs/community/discussions/42489)
  - Github permalink
      github提供一种可以支持高亮以及版本信息的永久链接，给这个项目提供了思路，通过 Shift 可以多选行数，然后右击选择 permalink(永久链接).
      ![github_permalink.png](/images/github_permalink.png)
      [OomAdjuster.java#L3127-L3129](https://github.com/10cl/fwkdev/blob/bfdf83c54ee15fdd53e2ed1f69e6f6f3f1cc1fbb/dev/src/frameworks/base/services/core/java/com/android/server/am/OomAdjuster.java#L3127-L3129)

### 新的标准定义
和 ChatGpt 讨论如何设计新的标准过程中，对于新的标准定义，它也持续为了输出了想法：

- 设计一个引入链接的代码块
可以考虑以下格式：
````markdown
```java [链接名](链接地址)
// 代码内容
```
````
这样就可以在代码块中添加一个链接，链接名将显示为可点击的文本，点击后会跳转到指定的链接地址。

- 代码块中同时指定起始行和高亮行数
你可以考虑以下格式：
````markdown
```java {起始行号}-{结束行号} {高亮行号1} {高亮行号2} ...
代码内容
````

例如，如果你想指定起始行为第3行，高亮第4行和第5行的Java代码块，可以使用以下格式：
````markdown
```java {3-} {4 5}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");  // 第4行高亮
        System.out.println("Welcome!");       // 第5行高亮
    }
}
````

在上述示例中，起始行号为3，结束行号为空，表示从第3行到代码块结束的所有行。高亮行号1和高亮行号2分别表示第4行和第5行。

请注意，这只是一种示例设计，具体的实现方式可能因你使用的Markdown解析器或编辑器而有所不同。建议查阅你所使用的工具的文档，以了解是否支持在代码块中同时指定起始行和高亮行，并查找相应的语法或插件来实现你的需求。

## 实现
### 完整定义
````markdown
```语言 {起始行-结束行} {高亮起始行-高亮结束行} (LINK)
// 代码内容
````

- 例子
  - 完整写法
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
  - 效果
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

### 兼容的选择  
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



### 一键引用
因为我个人长期在和 AOSP 这套大型源码打交道，用这个方式如果手动来写，难免有点困难，所以专门开发了一款插件用来一键复制指定代码块的 Markdown 样式:

[MarkdownQuote](https://source.toscl.com/markdown_quote/)是JetBrains插件，可以帮助你在IDE中高效地复制代码围栏，更多细节请参阅[SourceCodeTrace项目](https://source.toscl.com/zh-hans/)。

目前这个插件已经上架到 Jetbrains IDE 市场，可以直接在 IDE中： File -> Settings -> Plugins -> 搜索 "MarkdownQuote" 安装体验。

### 解析的支持
因为是新的样式，还需要有解析的支持，我差不多使用了10年的 Sublime，比较热衷于使用这款轻量级的编辑器，管理了很多文字上的工作，所以准备在 Sublime 上尝试。  
Sublime 上基于 pymdownx 有一款 MarkdownPreview 插件，我在这个上面改了一版解析的流程，但是作为网站的显示，中间还需要一些工作要做，暂时没法上线。

vuepress 是比较便捷的在线网站生成框架，基于 markdown-it 生成 markdown样式，因此，基于这个框架上，写了一款插件，并上架到了 NPM:
**markdown-it-quote**是一个用于[markdown-it](https://github.com/markdown-it/)的插件，支持多种代码围栏功能。

![示例](https://raw.githubusercontent.com/SourceCodeTrace/websites/main/source/.vuepress/public/images/quote_to_html.png)

>目前所有开发的功能均是开源的形式，旨在推广代码的可溯源。

### SourceCodeTrace 的意义
SourceCodeTrace（源代码追溯）这个组织名称可以传达以下含义：

- 源代码的追溯性：强调追踪代码的来源、历史和演化过程，以确保代码的可信度和可追溯性。这可以包括引入代码的来源、版本控制、修改历史等方面。
- 代码来源的追踪：关注追踪代码的来源，确保代码的原始作者得到适当的认可和归属。这可以涉及到代码的引用、引入作者信息、遵守开源许可证等方面。
- 代码溯源：强调代码的起源，可以追溯到特定的项目、库、团队或个人。这有助于了解代码的背景、用途和背后的设计思想。
通过选择 "SourceCodeTrace" 作为组织名称，你传达了一个关于追溯源代码的重要性的信息。这个组织可以致力于推动代码块来源的设计和实践，提倡代码的可信度、来源可追溯性以及对原始作者的尊重和认可。这有助于建立一个注重代码可靠性和知识产权的开发和协作环境。

### Logo的设计

<img src="logo.png" alt="logo.png" style="width: 20%;">

描述SourceCodeTrace组织的可能的logo设计方案：
Logo设计：
- 标志：使用一个简洁而有力的标志来代表SourceCodeTrace。可以尝试结合代码和追踪的元素，如拼图、箭头或放大镜等，以展示源代码的追溯和追踪的概念。
- 字体：选择现代、清晰的字体，使组织名称"SourceCodeTrace"易于辨识。
- 颜色：选择与代码相关的色彩，如深蓝、绿色或灰色，以传达专业性、可靠性和技术性。可以使用渐变色或不同色调来增加视觉吸引力。
示例设计描述： SourceCodeTrace的logo设计是一个简洁而现代的标志。标志的核心元素是一个由拼图和箭头组成的图形，形象地代表了对源代码的追溯和追踪。箭头的指向表示SourceCodeTrace组织致力于引导和推动代码块来源的设计。字体使用了清晰而简单的无衬线字体，以突出组织名称"SourceCodeTrace"。颜色方面，我们选择了深蓝色作为主要色调，结合浅蓝色渐变效果，以传达专业性和可靠性。

请注意，这只是一个示例设计描述，你可以根据自己的喜好和需求进行调整和修改。当设计Logo时，确保它与你的组织价值观和宣传目标相一致，并尽量保持简洁、易识别和具有独特性。最重要的是，确保Logo能够在不同尺寸和背景下保持清晰可见。如果需要进一步的设计或修改，可以咨询专业的图形设计师或使用在线Logo设计工具来实现你的想法。

### 如何推广这样的组织
要推广你的组织和传播组织的思想，你可以采取以下策略：

- 建立一个网站或在线平台：创建一个专门的网站或在线平台，介绍你的组织、宗旨和使命。在网站上提供关于代码块来源设计的信息、最佳实践、指南和资源，以便开发者和社区成员参考和学习。
  - [SourceCodeTrace](https://source.toscl.com/zh-hans/)
- 社交媒体宣传：利用社交媒体平台，如Twitter、LinkedIn、Facebook等，建立组织的社交媒体账号。定期发布有关代码块来源的相关内容，包括观点分享、实用技巧、行业新闻、事件和活动等，吸引关注者并扩大影响力。
  - （微博、Twitter）
- 写博客或技术文章：撰写关于代码块来源设计的博客文章或技术文章，并在个人博客、技术平台或开发者社区上发布。通过分享见解、经验和最佳实践，吸引读者的关注并传播组织的思想。
    -（通过该新的标准写源码分析相关的博文，比如先以AOSP这套大的源码做分析）
- 参与技术社区和活动：积极参与技术社区、开发者论坛和相关行业活动。参与讨论、回答问题、分享经验，并提到你的组织和推动代码块来源的思想。建立个人和组织的声誉和影响力。
    - （在平台共享观点，答疑解惑）
- 合作和合作伙伴关系：与其他组织、社区或个人建立合作伙伴关系，共同推广代码块来源的设计和实践。合作可以包括共同举办活动、合作撰写文章或开发工具，共同传播组织的思想。
- 教育和培训：提供关于代码块来源设计和最佳实践的教育和培训。可以组织在线研讨会、工作坊、培训课程等，向开发者和技术社区传授相关知识和技能。
    - （做一些视频介绍一些源码的解析）
- 开源项目和工具：开发开源项目或工具，以促进代码块来源的设计和实践。通过开源项目的使用和贡献，推动组织的思想并获得更多的曝光和支持。
    - （JetBrains IDE 插件、sublime 插件、 vuepress 插件）
以上策略可以相互结合，根据你的资源和目标受众来制定推广计划。持续不断地提供有价值的内容、积极参与社区和建立良好的合作关系，将有助于扩大你的组织的影响力和传播你的思想。


### 推动的意义
推动代码块来源的设计和传播相关的思想是有意义的。以下是一些原因：

- 提高代码可信度：指定代码块的来源可以增加代码的可信度。当读者知道代码的来源并能追溯其历史和演化过程时，他们更有信心使用和参考这些代码。
- 保护知识产权：通过推广代码块来源的设计，强调了对代码作者和原始来源的尊重和认可。这有助于保护知识产权，鼓励开发者遵守开源许可证和版权规定。
- 促进合作和共享：明确代码块的来源可以促进开发者之间的合作和共享。开发者可以更容易地找到和引用他人的代码，从而推动知识交流和协作。
- 提高代码可维护性：了解代码块的来源有助于提高代码的可维护性。当需要对代码进行修改、修复漏洞或添加新功能时，了解代码的来源可以更好地理解其设计意图和依赖关系。
- 社区建设和贡献：推动代码块来源的设计可以为技术社区的建设和贡献做出贡献。通过分享最佳实践、提供工具和资源，促进开发者之间的交流和共同成长。
虽然推广代码块来源的设计可能需要一定的努力和时间，但它对于提高代码质量、知识保护和社区建设都具有重要意义。通过传播这个思想，你可以为开发者和技术社区带来积极的影响，并促进更加可靠和可持续的软件开发实践。
