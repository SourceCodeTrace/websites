# MarkdownQuote: Simplify Code Quoting in Markdown!

![jet_plugin_search](/images/jet_plugin_search.png)

Are you tired of manually formatting code blocks in your Markdown documents? MarkdownQuote is here to save the day! This powerful JetBrains plugin makes code quoting a breeze, allowing you to focus on what matters most: writing excellent content.

## Why MarkdownQuote?

* **Effortless Installation**: Simply head to Jetbrains IDE Plugins Search and search for "MarkdownQuote." With just a few clicks, you'll have MarkdownQuote up and running. It supports all IDE versions above 193, ensuring compatibility with your favorite Jetbrains IDE.

* **Flexible Templates**: MarkdownQuote provides customizable templates to suit your unique needs. You can easily change the template according to your preferences.

* **Quick and Convenient**: With MarkdownQuote, quoting code is as simple as a right-click! Choose "Markdown Quote..." to get the code block exactly as you want it.


## How to Get MarkdownQuote

You can get MarkdownQuote from various sources:

* **Jetbrains Plugin Repository**: Visit the official MarkdownQuote page on the [Jetbrains Plugin Repository](https://plugins.jetbrains.com/plugin/22311-markdownquote) and click "Install" to add it to your IDE.

* **GitHub**: For those who prefer the GitHub approach, you can find MarkdownQuote's repository at [https://github.com/10cl/MarkdownQuote](https://github.com/10cl/MarkdownQuote).

* **Jetbrains Market**: If you have the MarkdownQuote.jar file, you can easily install it directly from your local path.


## How to Use MarkdownQuote

1. **Choose a Template**: Select the template of your choice from the settings menu. ![settings](/images/settings.png)

2. **Quote Code Snippets**: Right-click on the desired code snippet. ![right_click](/images/right_click.png)

3. **Copy and Paste**: MarkdownQuote will generate the correctly formatted code block. Simply copy it and paste it into your Markdown document. ![copied](/images/copied.png)


## Available Templates

MarkdownQuote offers various templates to cater to different use cases. Here are some examples:

1. Template: language & link & code

    ````markdown
    ```java
    // Your code goes here
    ```
   [SourceFile.java#L100-L110](https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    ````
    
2. Template: language & wrap lines & high lines & link & code

    ````markdown
    ```java {100-110} (https://github.com/yourusername/repo/blob/master/SourceFile.java#L100-L110)
    // Your code goes here
    ```
    ````
    
3. Template: language & code

    ````markdown
    ```java
    // Your code goes here
    ```
   ````


## What's New in Version 1.0.2

* Fixed a bug where the permalink was generated from the commit id instead of branch name.
* Improved default template to use common markdown syntax and added more template options.

Upgrade your Markdown writing experience with MarkdownQuote! Access the plugin now and enjoy effortless code quoting in your Markdown documents. Happy coding!