(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{333:function(e,t,s){"use strict";s.r(t);var o=s(5),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vs-code-的语言扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-的语言扩展"}},[e._v("#")]),e._v(" VS Code 的语言扩展")]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("p",[e._v("在 VS Code 中一个语言的声明性的功能有：")]),e._v(" "),t("ul",[t("li",[e._v("语法高亮 Syntax highlighting")]),e._v(" "),t("li",[e._v("代码片段 Snippet completion")]),e._v(" "),t("li",[e._v("括号匹配 Bracket matching")]),e._v(" "),t("li",[e._v("括号自动闭合 Bracket auto-closing")]),e._v(" "),t("li",[e._v("括号自动环绕 Bracket auto-surrounding")]),e._v(" "),t("li",[e._v("注释切换 Comment toggling")]),e._v(" "),t("li",[e._v("自动缩进 Auto indentation")]),e._v(" "),t("li",[e._v("折叠 Folding")])]),e._v(" "),t("p",[e._v("编程性的功能有：")]),e._v(" "),t("ul",[t("li",[e._v("悬停信息 Hover information")]),e._v(" "),t("li",[e._v("自动完成 Auto completion")]),e._v(" "),t("li",[e._v("跳转到定义 Jump to definition")]),e._v(" "),t("li",[e._v("错误检查 Error checking")]),e._v(" "),t("li",[e._v("格式化 Formatting")]),e._v(" "),t("li",[e._v("重构 Refactoring")]),e._v(" "),t("li",[e._v("折叠 Folding")]),e._v(" "),t("li",[e._v("……")])]),e._v(" "),t("p",[e._v("这些功能依赖于静态代码分析工具。微软定义了一个语言服务协议 "),t("a",{attrs:{href:"https://microsoft.github.io/language-server-protocol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Server Protocol (LSP)"),t("OutboundLink")],1),e._v("，用于开发语言扩展的开发者可以通过这个协议来完成一个可以在多个编辑器是用的代码分析程序。")]),e._v(" "),t("h2",{attrs:{id:"语法高亮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法高亮"}},[e._v("#")]),e._v(" 语法高亮")]),e._v(" "),t("p",[e._v("语法高亮分为两部分：")]),e._v(" "),t("ul",[t("li",[e._v("通过语法进行区分符号（token）和适用范围（scope）")]),e._v(" "),t("li",[e._v("用一种主题颜色的映射表映射每一种适用范围")])]),e._v(" "),t("p",[e._v("VS Code 用一种叫 "),t("a",{attrs:{href:"https://macromates.com/manual/en/language_grammars",target:"_blank",rel:"noopener noreferrer"}},[e._v("TextMate"),t("OutboundLink")],1),e._v(" 语法作为分词的描述。TextMate 是一个可以用 JSON 描述的结构。TextMate也提供了一组公共 scope 列表，尽量用公共 scope，这样可以让新建的语法有更广的支持度。")]),e._v(" "),t("p",[e._v("VS Code 提供了可以 debug 展示 scope 的功能 Inspect TM Scopes，如图：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-1.webp")}}),e._v(" "),t("ul",[t("li",[e._v("当前的 token 名称")]),e._v(" "),t("li",[e._v("元信息，包括外观的属性等")]),e._v(" "),t("li",[e._v("应用到 token 的主题规则")]),e._v(" "),t("li",[e._v("完整的 scope 列表")])]),e._v(" "),t("h2",{attrs:{id:"vs-code-中语言描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-中语言描述"}},[e._v("#")]),e._v(" VS Code 中语言描述")]),e._v(" "),t("p",[e._v("VS Code 将所有扩展的需要通过一组 contributes 结构来完成注册，如下，表示注册一个新的语言以及对应的语法描述")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-2.webp")}}),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-3.webp")}}),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("a               keyword.letter, source.abc\n(               punctuation.paren.open, expression.group, source.abc\n    b           keyword.letter, expression.group, source.abc\n)               punctuation.paren.close, expression.group, source.abc\nx               source.abc\n(               punctuation.paren.open, expression.group, source.abc\n    (           punctuation.paren.open, expression.group, expression.group, source.abc\n        c       keyword.letter, expression.group, expression.group, source.abc\n        xyz     expression.group, expression.group, source.abc\n    )           punctuation.paren.close, expression.group, expression.group, source.abc\n)               punctuation.paren.close, expression.group, source.abc\n(               source.abc\na               keyword.letter, source.abc\n")])])]),t("img",{attrs:{src:e.$withBase("/images/vsc-4.webp")}}),e._v(" "),t("p",[e._v("如下是 Dracula 的源码 dracula.yml：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-4-1.webp")}}),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-5.webp")}}),e._v(" "),t("p",[e._v("VS Code 提供了一个创建扩展插件的脚手架 yo code，如下，")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-6.webp")}}),e._v(" "),t("p",[e._v("通过一些列引导，可以生产一个创建新语言支持的工程。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-7.webp")}}),e._v(" "),t("p",[e._v("语言的贡献点（contributes.languages）可以用来定义以下功能：")]),e._v(" "),t("ul",[t("li",[e._v("Comment toggling 定义备注")]),e._v(" "),t("li",[e._v("Brackets definition 括号定义，用于高亮")]),e._v(" "),t("li",[e._v("Autoclosing 自动补全close")]),e._v(" "),t("li",[e._v("Autosurrounding 用对应的符号环绕")]),e._v(" "),t("li",[e._v("Folding 折叠\n"),t("ul",[t("li",[e._v("默认：缩进折叠")]),e._v(" "),t("li",[e._v("语言配置")]),e._v(" "),t("li",[e._v("语言服务")])])]),e._v(" "),t("li",[e._v("Word pattern 定义语言中什么是一个单词，用于 code suggestion 功能")]),e._v(" "),t("li",[e._v("Indentation Rules 定义缩进规则")])]),e._v(" "),t("h3",{attrs:{id:"举个-🌰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个-🌰"}},[e._v("#")]),e._v(" 举个 🌰")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/images/vsc-8.webp")}}),e._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("blockquote",[t("p",[e._v("https://code.visualstudio.com/api/language-extensions/overview")]),e._v(" "),t("p",[e._v("https://github.com/Microsoft/monaco-editor/blob/master/test/playground.generated/extending-language-services-custom-languages.html")]),e._v(" "),t("p",[e._v("https://github.com/microsoft/monaco-languages")])])])}),[],!1,null,null,null);t.default=r.exports}}]);