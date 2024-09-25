(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{332:function(t,v,_){"use strict";_.r(v);var e=_(5),r=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"chrome-的资源加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-的资源加载"}},[t._v("#")]),t._v(" Chrome 的资源加载")]),t._v(" "),v("h2",{attrs:{id:"资源分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#资源分类"}},[t._v("#")]),t._v(" 资源分类")]),t._v(" "),v("p",[t._v("Chrome 将资源分为以下几类：")]),t._v(" "),v("ul",[v("li",[t._v("MainResource (主页面、iframe页面)")]),t._v(" "),v("li",[t._v("CSS")]),t._v(" "),v("li",[t._v("Font")]),t._v(" "),v("li",[t._v("Script")]),t._v(" "),v("li",[t._v("Raw (XHR)")]),t._v(" "),v("li",[t._v("ImportResource")]),t._v(" "),v("li",[t._v("XSL")]),t._v(" "),v("li",[t._v("Image")]),t._v(" "),v("li",[t._v("Media")]),t._v(" "),v("li",[t._v("SVG")]),t._v(" "),v("li",[t._v("TextTrack (video 字幕)")]),t._v(" "),v("li",[t._v("Prefetch Link")])]),t._v(" "),v("h2",{attrs:{id:"加载过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[t._v("#")]),t._v(" 加载过程")]),t._v(" "),v("ol",[v("li",[t._v("预处理请求\n"),v("ul",[v("li",[t._v("每发起请求会生成一个 ResourceRequest 对象，包含了 http 请求所有信息")]),t._v(" "),v("li",[t._v("安全检查，检查请求是否合法并做响应处理\n"),v("ul",[v("li",[t._v("内容安全策略检查 （content security policy），防止 XSS 攻击，"),v("code",[t._v('<meta http-equiv="Content-Security-Policy" content="img-src \'self\';">')])]),t._v(" "),v("li",[t._v("协议升级 "),v("code",[t._v('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">')])]),t._v(" "),v("li",[t._v("阻止非被动混合内容 （optionally-blockable mixed content）audio、favicon、image、video\n"),v("ul",[v("li",[v("code",[t._v('<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">')])]),t._v(" "),v("li",[t._v("对于blockable，如果用户允许情况下，可以加载")])])]),t._v(" "),v("li",[t._v("源阻塞 （origin block），比如 svg 资源请求不能跨域\n"),v("ul",[v("li",[t._v("和同源策略的区别是，同源策略阻塞请求的返回结果，源阻塞是阻塞请求发出")])])])])]),t._v(" "),v("li",[t._v("根据优先级规则（属性、位置）进行优先级计算和排序\n"),v("ul",[v("li",[t._v("主要针对 prefetch/preload 的资源进行调整")]),t._v(" "),v("li",[t._v("发送消息给 IO 线程")])])])])]),t._v(" "),v("li",[t._v("资源加载\n"),v("ul",[v("li",[t._v("IO 线程有三个时机来触发资源下载\n"),v("ul",[v("li",[t._v("收到渲染线程的请求加载资源消息")]),t._v(" "),v("li",[t._v("每个请求完成之后，触发加载 pending requests queue 里未加载的请求")]),t._v(" "),v("li",[t._v("定时循坏 pending requests queue")])])]),t._v(" "),v("li",[t._v("请求按照优先级分为 delayable 和 none-delayable 两种，优先级在 Net:Medium 及其以上的为 none-delayable")]),t._v(" "),v("li",[t._v("请求按照优先级在 Net:medium 及其以上的和 body 标签是未开始解析的请求，设置为 layout-blocking 请求")]),t._v(" "),v("li",[t._v("下载之前会进行判断当前资源是否能开始加载，条件有：\n"),v("ul",[v("li",[t._v("none-delayable 的资源、同步请求和非http的请求能够立刻加载")]),t._v(" "),v("li",[t._v("如果有一个 layout-blocking 的资源在加载，或者 body 标签没有解析完成，最多只能加载一个 delayable 的资源")]),t._v(" "),v("li",[t._v("如果没有 none-delayable 和 layout-blocking 的资源在加载，则可以开始加载 delayable 的资源")]),t._v(" "),v("li",[t._v("最多只能同时存在 10 个delayable的请求 （超过同域 TCP 连接数为 6 则需要等待）")]),t._v(" "),v("li",[t._v("相同域名下最多同时存在 6 个delayable的请求")])])])])]),t._v(" "),v("li",[t._v("推测加载")])]),t._v(" "),v("p",[t._v("现代浏览器为了提高页面加载速度，在遇到 script 的时候，DOM 会停止构建，但是会继续搜索页面需要加载的资源，如果有 img/script 标签，则进行预加载，而不用等到解析到标签的时候再进行加载")]),t._v(" "),v("h2",{attrs:{id:"优先级列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优先级列表"}},[t._v("#")]),t._v(" 优先级列表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Layout-blocking")]),t._v(" "),v("td",[t._v("Load in layout-blocking phase")]),t._v(" "),v("td",[t._v("Load one-at-a-time in layout-blocking phase")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Net Priority")])]),t._v(" "),v("td",[v("strong",[t._v("Highest")])]),t._v(" "),v("td",[v("strong",[t._v("Medium")])]),t._v(" "),v("td",[v("strong",[t._v("Low")])]),t._v(" "),v("td",[v("strong",[t._v("Lowest")])]),t._v(" "),v("td",[v("strong",[t._v("Idle")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Blink Priority")])]),t._v(" "),v("td",[v("strong",[t._v("VeryHigh")])]),t._v(" "),v("td",[v("strong",[t._v("High")])]),t._v(" "),v("td",[v("strong",[t._v("Medium")])]),t._v(" "),v("td",[v("strong",[t._v("Low")])]),t._v(" "),v("td",[v("strong",[t._v("VeryLow")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("DevTools Priority")])]),t._v(" "),v("td",[v("strong",[t._v("Highest")])]),t._v(" "),v("td",[v("strong",[t._v("High")])]),t._v(" "),v("td",[v("strong",[t._v("Medium")])]),t._v(" "),v("td",[v("strong",[t._v("Low")])]),t._v(" "),v("td",[v("strong",[t._v("Lowest")])])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("Main Resource")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("CSS (match)")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("CSS (mismatch)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Script (early** or not from preload scanner)")]),t._v(" "),v("td",[t._v("Script (late**)")]),t._v(" "),v("td",[t._v("Script (async)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("Font")]),t._v(" "),v("td",[t._v("Font (preload)")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Import")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Image (in viewport)")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Image")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Media")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("SVG Document")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Prefetch")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Preload*")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("XSL")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("XHR (sync)")]),t._v(" "),v("td",[t._v("XHR/fetch* (async)")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Favicon")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("ul",[v("li",[t._v("Preload using “as” or fetch using “type” use the priority of the type they are requesting. (e.g. preload as=stylesheet will use Highest priority). With no “as” they will behave like an XHR.")])]),t._v(" "),v("p",[t._v("** “Early” is defined as being requested before any non-preloaded images have been requested (“late” is after).")]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resource Fetch Prioritization and Scheduling in Chromium"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.rrfed.com/2017/10/29/chrome-fetch-resource/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从Chrome源码看浏览器如何加载资源"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://chromium.googlesource.com/chromium/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://chromium.googlesource.com/chromium/src"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);