# ChatGPT Android版本1.0.0 APK解包分析：功能设计、安全评估与市场表现预测

本文将对ChatGpt Android版本1.0.0 APK进行静态解包分析和抓包分析，从ChatGpt Android APK功能的设计、校验过程和代码内包含的信息来预测OpenAI的大致走向。

![img.png](/images/img_5.png)

>Sensor Tower指出，在美国市场，iOS版ChatGPT应用下载量在6月份环比下降了38%；而根据Similarweb的数据，ChatGPT今年6月的全球桌面和移动设备流量较上月下降9.7%，其网站的独立用户访问量下降5.78%，6月的访客花在该网站上的时间也减少了8.5%。
《流量增长乏力 ChatGPT要进安卓 - 北京商报》

目前Android版本上线仅支持美国、印度、孟加拉国和巴西使用。但从今天应用上线的情况来看，截至7月26日早上，在Google Play上的下载数量为**10+**。然而，在几个小时后的下午，下载数量已经达到了**100K+**，这充分证明了AI的热度。尽管AI概念整体跌幅2%，但市场上对AI仍然持有浓厚兴趣。

Android版本目前还只处于灰度测试阶段，即在部分国家上线，一周内逐步覆盖其他可以使用Google Play的国家。目前需要**强制绑定Google Play**的服务，后文将介绍通过hook的方式解决这个问题，但不提供重打包APK的方法。


![img.png](/images/img_7.png)

## 静态分析

这份分析报告提供了ChatGPT Android APK的各种信息，包括安全评分、文件信息、应用程序信息和活动等。其中，核心的内容包括：

1. 安全评分：ChatGPT的安全评分为62/100，这意味着它在安全性方面存在一些潜在的风险。
2. 文件信息：APK文件的名称为base.apk，大小为**5.42MB**，MD5为5ed65284c0962370b9dc9030a7342e61，SHA1为62a64392bca4fa127c70a7231dd38c72025a663a，SHA256为f66c90fdc3863c30cdbda0d84675c2cddb60cfbf36744df4718bcf6ec53f3498。
3. 应用程序信息：ChatGPT的包名为**com.openai.chatgpt**，主要活动为**com.openai.chatgpt.MainActivity**，目标SDK为**33**，最小SDK为**23**。
4. 活动：ChatGPT包含4个活动、9个服务、2个接收器和0个提供程序。
5. 导出的组件：ChatGPT中有1个导出的活动、1个导出的服务和2个导出的接收器。
6. 文本信息：分析报告中还包含了一些文本信息，例如应用程序中使用的字符串和控件的名称。

**支持最小Android版本为 6.0**，对于首个版本而言，目标就是覆盖足够多的用户

### 权限分析
这个应用使用了以下权限：
1. **android.permission.RECEIVE_BOOT_COMPLETED**  
    允许ChatGpt 应用开机自启，即系统开机后自动启动，不过国内的OS上面，这种自启行为不会被支持。

2. **android.permission.RECORD_AUDIO**  
    允许应用程序访问音频记录路径, 目前ChatGpt Android版本是支持语音输入。

3. **android.permission.VIBRATE**  
    允许应用程序控制振动器，用来优化语音输入的体验

4. **android.permission.WAKE_LOCK**  
    这个权限用于，防止手机在和Chatgpt 聊天的过程中进入睡眠状态（灭屏）

5. **com.android.vending.CHECK_LICENSE**  
   用于 Android 应用程序中与 Google Play 商店（Google Play Store）的许可验证相关的广播。这个广播通常由 Google Play 服务自动发送，用于检查应用程序是否已经在设备上获得了有效的许可或授权。
当你在应用程序中集成了 Google Play 许可验证服务时，应用程序将使用这个广播来与 Google Play 商店进行通信，以验证用户是否已经购买了该应用程序或应用程序内购买的许可，这对于防止未经授权的使用、确保用户购买了正版应用或在应用内购买中获得许可等方面非常有用。
从这个权限上来看，目前ChatGpt的Android版本和Google Play的证书校验有一个强绑定关系，在短期内，Android市场上不会脱离Google Play，所以国内的用户想用上官方的Android 版本基本是不可能的。

6. **com.openai.chatgpt.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION**  
    openai 自定义的权限

从定义的权限上来看，权限上中规中矩，没有涉及到信息的采集，强绑定了 Google Play服务，基础功能不多，但够稳定，属于稳定迭代的阶段，不足以看出 OpenAi 着急的情况。

## 界面
一共两个主要界面
com.auth0.android.provider.RedirectActivity
com.openai.chatgpt.MainActivity

## 统计分析
APK内除了OpenApi 自有的 域名，用来校验和数据传输实现基本的功能，还用了两家公司数据统计功能。

- api.mixpanel.com  
>Progress is possible
Simple and powerful analytics that helps everyone make better decisions.

- api.statsig.com  
  Statsig是一个位于华盛顿州西雅图的新起的平台，它使产品团队能够评估新功能的影响并向客户交付产品，Statsig提供了一个平台，使产品开发人员能够运行快速、高质量的产品实验并分析用户如何响应新特性和功能，就像 Facebook、亚马逊、Airbnb 和优步的产品团队一样今天做。
其实验分析和决策工具（例如 Pulse、Experiments+ 和 AutoTune）允许产品团队每周运行数百次实验并评估其产品每天的表现。
>Vijaye Raji是初创公司Statsig的创始人兼CEO。这家公司致力于打造企业的测试和验证的工具，为产品决策提供数据支持，其灵感来源于Facebook用于试验新产品功能的内部工具。
在Vijaye看来，企业打造产品不可闭门造车，要尽快把最小可行产品推向潜在客户，并通过真实的数据推动决策，实践出真知。
“数据通常更多是在小范围内正确，跟着数据走，你就能找到这个范围内的最优解。”他说，“但想找到更优的结果，你就要扩大数据范围，将更多局部数据综合起来。你必须要对数据有一定的产品思维才行。”

这两个统计工具的目标均是进行简单的数据分析，为决策提供思路。OpenAI很可能通过小范围的灰度测试来实现数据驱动决策，并观察市场表现，以做出下一步的决策。



## 开源
>OpenAI 是一个人工智能研究实验室，由营利组织 OpenAI LP 与母公司非营利组织 OpenAI Inc 所组成，目的是促进和发展友好的人工智能，使人类整体受益。OpenAI 成立于 2015 年底，总部位于旧金山，组织目标是通过与其他机构和研究者的“自由合作”，向公众开放专利和研究成果。

不过现在的所有功能和代码都不会有任何开源的可能性，通过对APK内部资源的提取，在说明关于里面已经包含了这样一句描述：
>"no_licenses_available" : "This app does not have any open source licenses."


## 强绑定Google Play
如果没有Google服务，安装后会出现
"Check that Google Play is enabled on your device and that you're using an up-to-date version before opening the app. If the problem persists try reinstalling the app."

然后你只能选择Close，然后退出应用。

因此，没有Google Play的国家，基本上无法使用该Android版本。

![img.png](/images/img_11.png)

通过对APK的反编译分析，在 `com.pairip.licensecheck3.LicenseClientV3` 类中发现有这段逻辑进行了控制：
```java
private void showErrorDialog() {
    licenseCheckState = LicenseCheckState.CHECK_REQUIRED;
    try {
        this.activity.runOnUiThread(new LicenseClientV3$$ExternalSyntheticLambda4(this));
    } catch (RuntimeException ex) {
        Log.d(TAG, "Couldn't show the error dialog. " + Log.getStackTraceString(ex));
    }
}

/* access modifiers changed from: package-private */
/* renamed from: lambda$showErrorDialog$2$com-pairip-licensecheck3-LicenseClientV3  reason: not valid java name */
public /* synthetic */ void m17x91ba8288() {
    new AlertDialog.Builder(this.activity).setTitle("Something went wrong").setMessage("Check that Google Play is enabled on your device and that you're using an up-to-date version before opening the app. If the problem persists try reinstalling the app.").setPositiveButton("Close", new LicenseClientV3$$ExternalSyntheticLambda1(this)).setCancelable(false).show();
}

```
刚好我这台设备是 **userdebug** 的版本，通过 `frida` 进行一个拦截操作，这里是 `frida js` 的写法，通过拦截 `LicenseClientV3-showErrorDialog` 方法，然后将 `return` 给拦截掉，因此不会弹出弹框。

```js
console.log("loaded chatgpt js successfully");
Java.perform(function () {
    var Log = Java.use("android.util.Log");
    var LicenseClientV3 = Java.use('com.pairip.licensecheck3.LicenseClientV3');
    LicenseClientV3.showErrorDialog.implementation = function (){
        Log.d("10cl", 'intercept showErrorDialog' );
        //return this.showErrorDialog();
    };

});
```
[#file-chatgpt_android_hook-js-L5-L6](https://gist.github.com/10cl/2fbc3e7c173e7aaeed4df57f60d3bc72#file-chatgpt_android_hook-js-L5-L6)

通过拦截后的应用不会弹出弹框，但是通过日志打印发现，还是在不断的连接证书校验的服务，因此如果需要跳过这块的逻辑，需要对整个 Google Play 的校验过程进行 **hook**， 应该还是有一定的工作量，
不过 chatgpt 的主体逻辑还是自己的校验，如果保证 chatgpt 自己的流程走通，然后拦截 Google Play 的校验，应该还是可以正常使用。
![img.png](/images/img_9.png)

简单抓包的结果：

**com.pairip.licensecheck3** 这个是 Google Play 的证书校验功能，当拦截后，点击登录，就会请求登录，然后请求跳转到浏览器登录， 301 跳转到 chatgpt 的网页端， 输入账号密码
抓包的结果如下：
![img.png](/images/img_10.png)

OpenAI属于AI公司，对Android安全和反编译方面可能没有做太多处理，主要逻辑依赖于三方公司，并直接禁用敏感地区。
如果允许在国内使用并且没有依赖Google Play，国内的玩家可以重打包并实现登录持久化，从而形成一个数据产生一层模糊网的产业。然而，OpenAI很可能不会在短期内允许这种情况发生。



