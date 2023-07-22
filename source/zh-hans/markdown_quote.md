# MarkdownQuote：简化 Markdown 中的代码引用！

![jet_plugin_search](/images/jet_plugin_search.png)

这是 [SourceCodeTrace](https://source.toscl.com/zh-hans/) 项目之一，提供一种便捷的方式，快速复制包含代码来源的 IDE 插件。 

>SourceCodeTrace Project 帮助您在博客、文章记录的过程中，引入对应项目以及版本，行号等信息，让后续的读者，通过引用来源，能够进行更加深入的学习，在博客或文章中引入代码块时，尽量提供代码的来源信息。

您是否厌倦了在 Markdown 文档中手动格式化代码块？MarkdownQuote 可以帮您节省不少麻烦！这个强大的 JetBrains 插件让代码引用变得轻而易举，让您专注于撰写优秀的内容。

## 为什么选择 MarkdownQuote？

* **安装简便**：只需在 Jetbrains IDE 插件搜索中搜索 "MarkdownQuote"。点击几下鼠标，您就能轻松安装 MarkdownQuote。它支持所有 IDE 版本大于 193，确保与您喜欢的 Jetbrains IDE 兼容。

* **灵活的模板**：MarkdownQuote 提供可自定义的模板，以满足您独特的需求。您可以轻松更改模板，按照自己的喜好进行调整。

* **快捷方便**：使用 MarkdownQuote，引用代码只需右键单击！选择 "Markdown Quote..."，即可获得所需的代码块格式。


## 如何获取 MarkdownQuote

您可以从多个来源获取 MarkdownQuote：

* **Jetbrains 插件仓库**：访问 [Jetbrains 插件仓库上的官方 MarkdownQuote 页面](https://plugins.jetbrains.com/plugin/22311-markdownquote)，然后点击 "Install" 将其添加到您的 IDE 中。

* **GitHub**：如果您更喜欢 GitHub 的方式，您可以在 [https://github.com/10cl/MarkdownQuote](https://github.com/10cl/MarkdownQuote) 找到 MarkdownQuote 的代码仓库。

* **Jetbrains 市场**：如果您已经有 MarkdownQuote.jar 文件，您可以直接从本地路径安装它。


## 如何使用 MarkdownQuote

1. **选择模板**：从设置菜单中选择所需的模板。 ![settings](/images/settings.png)

2. **引用代码片段**：右键单击所需的代码片段。 ![right_click](/images/right_click.png)

3. **复制和粘贴**：MarkdownQuote 将生成正确格式的代码块。只需复制并粘贴到您的 Markdown 文档中。 ![copied](/images/copied.png)


## 可用的模板

MarkdownQuote 提供多种模板，以满足不同的使用情况。以下是一些示例：

>Github 和 Gitee 均支持包含版本，具体行数的永久链接(permalink)，MarkdownQuote 通过读取当前仓库的<remoteurl>, <HEAD>, 以及当前文件的行数，文件名等来生成对应的来源URL。

1. 模板：语言 & 链接 & 代码

    ````markdown
    ```java
    // 在这里输入您的代码
    ```
   [SourceFile.java#L100-L110](https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    ````
    
2. 模板：语言 & 换行 & 高亮行 & 链接 & 代码

    ````markdown
    ```java {100-110} (https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    // 在这里输入您的代码
    ```
    ````
    
3. 模板：语言 & 代码

    ````markdown
    ```java
    // 在这里输入您的代码
    ```
    ````

## 版本 1.0.2 的更新内容

* 修复了一个问题，其中生成永久链接时使用了commitID而不是分支名。
* 改进了默认模板，使用通用的 Markdown 语法，并添加了更多模板选项。

升级您的 Markdown 写作体验，使用 MarkdownQuote！立即获取该插件，在您的 Markdown 文档中轻松引用代码。祝您编码愉快！