(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{328:function(t,_,e){"use strict";e.r(_);var a=e(5),v=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-概要"}},[t._v("#")]),t._v(" HTTP 概要")]),t._v(" "),_("p",[t._v("HTTP是是互联网上应用最为广泛的一种网络协议,全称为 Hypertext Transfer Protocol (超文本传输协议).")]),t._v(" "),_("h2",{attrs:{id:"http的相关元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http的相关元素"}},[t._v("#")]),t._v(" HTTP的相关元素")]),t._v(" "),_("h3",{attrs:{id:"_1-web客户端和服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-web客户端和服务器"}},[t._v("#")]),t._v(" 1. Web客户端和服务器")]),t._v(" "),_("ul",[_("li",[t._v("Web 客户端"),_("code",[t._v("(浏览器)")]),t._v("发送 "),_("em",[t._v("HTTP请求")]),_("code",[t._v("(输入百度网址)")]),t._v(", 请求 Web 服务器存储的数据"),_("code",[t._v("(请求百度服务器的百度首页)")]),t._v(".")]),t._v(" "),_("li",[t._v("Web 服务器"),_("code",[t._v("(百度的服务器)")]),t._v("接受 "),_("em",[t._v("HTTP 请求")]),_("code",[t._v("(接受到浏览器的请求)")]),t._v(", 在 "),_("em",[t._v("HTTP 响应")]),t._v("中回送所请求的数据"),_("code",[t._v("(将百度的 html 页面返回给浏览器进行渲染展示)")]),t._v(".")])]),t._v(" "),_("h3",{attrs:{id:"_2-资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-资源"}},[t._v("#")]),t._v(" 2. 资源")]),t._v(" "),_("p",[t._v("Web 服务器是 Web 资源的宿主,而 Web 资源是 Web 内容的源头.")]),t._v(" "),_("ul",[_("li",[t._v("静态资源 "),_("code",[t._v("(图片,视频,文本)")]),t._v(",此时的资源就是内容.")]),t._v(" "),_("li",[t._v("动态资源 "),_("code",[t._v("(由程序动态生成的内容,比如实时天气,股票交易,在线购物)")]),t._v(",此时的资源是生成内容的工具.\n")])]),t._v(" "),_("h4",{attrs:{id:"_3-媒体类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-媒体类型"}},[t._v("#")]),t._v(" 3. 媒体类型")]),t._v(" "),_("p",[t._v("Web 内容的类型成千上万,客户端需要通过从服务端请求回来的内容进行判断类型从而以正确的方式打开.")]),t._v(" "),_("p",[t._v("操作系统一般是通过文件名后缀来判断文件类型,而在 Web 客户端中,一般通过"),_("em",[t._v("HTTP 响应")]),t._v("结果中携带的 "),_("code",[t._v("MIME")]),t._v("类型来判断其内容的格式.")]),t._v(" "),_("p",[t._v("MIME(MultipurposeInternetMailExtension, 多用途因特网邮件扩展),最初设计于决电子邮件中,后来被 HTTP 采纳.")]),t._v(" "),_("p",[t._v("MIME 类型是一种文本标记,格式为 "),_("code",[t._v("抽象类型/子类型")]),t._v(", 比如 png 格式的图片为 "),_("code",[t._v("image/png")]),t._v(".")]),t._v(" "),_("h4",{attrs:{id:"_4-uri"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-uri"}},[t._v("#")]),t._v(" 4. URI")]),t._v(" "),_("p",[t._v("Web 资源会在服务器中暴露自己的名字从而让客户端可以访问到,该名称被称为 "),_("code",[t._v("URI(Uniform Resource Identifier, 统一资源标识符)")]),t._v(".")]),t._v(" "),_("h5",{attrs:{id:"url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),_("p",[_("code",[t._v("URL(统一资源定位符)")]),t._v("是 URI 最常见的形式.它描述了 Web 资源的位置.")]),t._v(" "),_("p",[t._v("URL 由网络协议,服务器地址和资源地址组成, 比如 "),_("code",[t._v("http://(协议)www.baidu.com(服务器地址)/example.png(资源地址)")]),t._v(".")]),t._v(" "),_("h5",{attrs:{id:"urn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#urn"}},[t._v("#")]),t._v(" URN")]),t._v(" "),_("p",[_("code",[t._v("URN(统一资源名)")]),t._v("指用名称作为唯一标识. 如 "),_("code",[t._v("urn:internet:china:tiananmen")]),t._v(".")]),t._v(" "),_("p",[t._v("由于缺乏一个支撑架构解析资源的位置,URN 仍处于试验阶段,还未大范围使用.")]),t._v(" "),_("h4",{attrs:{id:"_5-事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-事务"}},[t._v("#")]),t._v(" 5. 事务")]),t._v(" "),_("p",[t._v("一个 HTTP 事务有一个 HTTP 请求命令和 HTTP 响应结果组成.")]),t._v(" "),_("p",[t._v("请求和响应是以名为 HTTP message(报文)来格式化数据的.")]),t._v(" "),_("p",[t._v("如 HTTP 请求报文:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("GET /example.png HTTP/1.0\nHost: www.baidu.com\n\n")])])]),_("p",[t._v("如 HTTP 响应报文:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("HTTP/1.0 200 OK\nContent-type: image/png\nContent-length: 8529\n\n(此处应该是 example.png 这个图片)\n\n")])])]),_("h5",{attrs:{id:"方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),_("p",[_("strong",[t._v("待续")])])])}),[],!1,null,null,null);_.default=v.exports}}]);