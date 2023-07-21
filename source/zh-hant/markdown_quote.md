# MarkdownQuote：簡化 Markdown 中的程式碼引用！

![jet_plugin_search](/images/jet_plugin_search.png)

您是否厭倦了在 Markdown 文件中手動格式化程式碼區塊？MarkdownQuote 可以幫您節省不少麻煩！這個強大的 JetBrains 外掛程式讓程式碼引用變得輕而易舉，讓您專注於撰寫優秀的內容。

## 為什麼選擇 MarkdownQuote？

* **安裝簡便**：只需在 Jetbrains IDE 外掛程式搜尋中搜尋 "MarkdownQuote"。點擊幾下滑鼠，您就能輕鬆安裝 MarkdownQuote。它支持所有 IDE 版本大於 193，確保與您喜愛的 Jetbrains IDE 相容。

* **靈活的範本**：MarkdownQuote 提供可自訂的範本，以滿足您獨特的需求。您可以輕鬆更改範本，按照自己的喜好進行調整。

* **快捷方便**：使用 MarkdownQuote，引用程式碼只需右鍵點擊！選擇 "Markdown Quote..."，即可獲得所需的程式碼區塊格式。


## 如何獲取 MarkdownQuote？

您可以從多個來源獲取 MarkdownQuote：

* **Jetbrains 外掛程式倉庫**：訪問 [Jetbrains 外掛程式倉庫上的官方 MarkdownQuote 頁面](https://plugins.jetbrains.com/plugin/22311-markdownquote)，然後點擊 "Install" 將其新增至您的 IDE 中。

* **GitHub**：如果您更喜歡 GitHub 的方式，您可以在 [https://github.com/10cl/MarkdownQuote](https://github.com/10cl/MarkdownQuote) 找到 MarkdownQuote 的程式碼倉庫。

* **Jetbrains 市場**：如果您已經有 MarkdownQuote.jar 檔案，您可以直接從本機路徑安裝它。


## 如何使用 MarkdownQuote？

1. **選擇範本**：從設定選單中選擇所需的範本。 ![settings](/images/settings.png)

2. **引用程式碼片段**：右鍵點擊所需的程式碼片段。 ![right_click](/images/right_click.png)

3. **複製和貼上**：MarkdownQuote 將生成正確格式的程式碼區塊。只需複製並貼上到您的 Markdown 文件中。 ![copied](/images/copied.png)


## 可用的範本

MarkdownQuote 提供多種範本，以滿足不同的使用情況。以下是一些範例：

1. 範本：語言 & 連結 & 程式碼

    ````markdown
    ```java
    // 在這裡輸入您的程式碼
    ```
   [SourceFile.java#L100-L110](https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    ````
    
2. 範本：語言 & 換行 & 高亮行 & 連結 & 程式碼

    ````markdown
    ```java {100-110} (https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    // 在這裡輸入您的程式碼
    ```
    ````
    
3. 範本：語言 & 程式碼

    ````markdown
    ```java
    // 在這裡輸入您的程式碼
    ```
    ````
    

## 版本 1.0.2 的更新內容

* 修正了一個問題，其中生成永久連結時使用了commitId而不是分支名稱。
* 改進了預設範本，使用通用的 Markdown 語法，並新增了更多範本選項。

升級您的 Markdown 寫作體驗，使用 MarkdownQuote！立即獲取該外掛程式，在您的 Markdown 文件中輕鬆引用程式碼。祝您編碼愉快！