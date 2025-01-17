---
date: 2019-07-25
author: Nolan
location: Beijing
tags:
  - Fresh Tech
---
# Chrome 的资源加载

## 资源分类

Chrome 将资源分为以下几类：
+ MainResource (主页面、iframe页面)
+ CSS
+ Font
+ Script
+ Raw (XHR)
+ ImportResource
+ XSL
+ Image
+ Media
+ SVG
+ TextTrack (video 字幕)
+ Prefetch Link

## 加载过程

1. 预处理请求
   - 每发起请求会生成一个 ResourceRequest 对象，包含了 http 请求所有信息
   - 安全检查，检查请求是否合法并做响应处理
     - 内容安全策略检查 （content security policy），防止 XSS 攻击，`<meta http-equiv="Content-Security-Policy" content="img-src 'self';">`
     - 协议升级 `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`
     - 阻止非被动混合内容 （optionally-blockable mixed content）audio、favicon、image、video
       - `<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">`
       - 对于blockable，如果用户允许情况下，可以加载
     - 源阻塞 （origin block），比如 svg 资源请求不能跨域
       - 和同源策略的区别是，同源策略阻塞请求的返回结果，源阻塞是阻塞请求发出
   - 根据优先级规则（属性、位置）进行优先级计算和排序
     - 主要针对 prefetch/preload 的资源进行调整
     - 发送消息给 IO 线程
2. 资源加载
   - IO 线程有三个时机来触发资源下载
     - 收到渲染线程的请求加载资源消息
     - 每个请求完成之后，触发加载 pending requests queue 里未加载的请求
     - 定时循坏 pending requests queue
   - 请求按照优先级分为 delayable 和 none-delayable 两种，优先级在 Net:Medium 及其以上的为 none-delayable
   - 请求按照优先级在 Net:medium 及其以上的和 body 标签是未开始解析的请求，设置为 layout-blocking 请求
   - 下载之前会进行判断当前资源是否能开始加载，条件有：
     - none-delayable 的资源、同步请求和非http的请求能够立刻加载
     - 如果有一个 layout-blocking 的资源在加载，或者 body 标签没有解析完成，最多只能加载一个 delayable 的资源
     - 如果没有 none-delayable 和 layout-blocking 的资源在加载，则可以开始加载 delayable 的资源
     - 最多只能同时存在 10 个delayable的请求 （超过同域 TCP 连接数为 6 则需要等待）
     - 相同域名下最多同时存在 6 个delayable的请求
3. 推测加载

现代浏览器为了提高页面加载速度，在遇到 script 的时候，DOM 会停止构建，但是会继续搜索页面需要加载的资源，如果有 img/script 标签，则进行预加载，而不用等到解析到标签的时候再进行加载


## 优先级列表
 |                       |                               |                                              |                 |                |                |
   | --------------------- | ----------------------------- | -------------------------------------------- | --------------- | -------------- | -------------- |
   | Layout-blocking       | Load in layout-blocking phase | Load one-at-a-time in layout-blocking phase  |                 |                |                |
   | **Net Priority**      | **Highest**                   | **Medium**                                   | **Low**         | **Lowest**     | **Idle**       |
   | **Blink Priority**    | **VeryHigh**                  | **High**                                     | **Medium**      | **Low**        | **VeryLow**    |
   | **DevTools Priority** | **Highest**                   | **High**                                     | **Medium**      | **Low**        | **Lowest**     |
   |                       | Main Resource                 |                                              |                 |                |                |
   |                       | CSS (match)                   |                                              |                 |                | CSS (mismatch) |
   |                       |                               | Script (early** or not from preload scanner) | Script (late**) | Script (async) |                |
   |                       | Font                          | Font (preload)                               |                 |                |                |
   |                       |                               | Import                                       |                 |                |                |
   |                       |                               | Image (in viewport)                          |                 | Image          |                |
   |                       |                               |                                              |                 | Media          |                |
   |                       |                               |                                              |                 | SVG Document   |                |
   |                       |                               |                                              |                 |                | Prefetch       |
   |                       |                               | Preload*                                     |                 |                |                |
   |                       |                               | XSL                                          |                 |                |                |
   |                       | XHR (sync)                    | XHR/fetch* (async)                           |                 |                |                |
   |                       |                               |                                              | Favicon         |                |                |

* Preload using “as” or fetch using “type” use the priority of the type they are requesting. (e.g. preload as=stylesheet will use Highest priority). With no “as” they will behave like an XHR.

** “Early” is defined as being requested before any non-preloaded images have been requested (“late” is after).

## 参考

> [Resource Fetch Prioritization and Scheduling in Chromium](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit)
>
> [从Chrome源码看浏览器如何加载资源](https://www.rrfed.com/2017/10/29/chrome-fetch-resource/)
>
> [https://chromium.googlesource.com/chromium/src](https://chromium.googlesource.com/chromium/src)
