---
date: 2019/12/26
author: Nolan
location: Beijing
tags:
  - Fresh Tech
---
# VS Code 的语言扩展

## 概述

在 VS Code 中一个语言的声明性的功能有：

- 语法高亮 Syntax highlighting
- 代码片段 Snippet completion
- 括号匹配 Bracket matching
- 括号自动闭合 Bracket auto-closing
- 括号自动环绕 Bracket auto-surrounding
- 注释切换 Comment toggling
- 自动缩进 Auto indentation
- 折叠 Folding



编程性的功能有：

- 悬停信息 Hover information
- 自动完成 Auto completion
- 跳转到定义 Jump to definition
- 错误检查 Error checking
- 格式化 Formatting
- 重构 Refactoring
- 折叠 Folding
- ……

这些功能依赖于静态代码分析工具。微软定义了一个语言服务协议 [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/)，用于开发语言扩展的开发者可以通过这个协议来完成一个可以在多个编辑器是用的代码分析程序。



## 语法高亮

语法高亮分为两部分：

- 通过语法进行区分符号（token）和适用范围（scope）
- 用一种主题颜色的映射表映射每一种适用范围



VS Code 用一种叫 [TextMate](https://macromates.com/manual/en/language_grammars) 语法作为分词的描述。TextMate 是一个可以用 JSON 描述的结构。TextMate也提供了一组公共 scope 列表，尽量用公共 scope，这样可以让新建的语法有更广的支持度。

VS Code 提供了可以 debug 展示 scope 的功能 Inspect TM Scopes，如图：

<img :src="$withBase('/images/vsc-1.webp')">

- 当前的 token 名称
- 元信息，包括外观的属性等
- 应用到 token 的主题规则
- 完整的 scope 列表



## VS Code 中语言描述

VS Code 将所有扩展的需要通过一组 contributes 结构来完成注册，如下，表示注册一个新的语言以及对应的语法描述

<img :src="$withBase('/images/vsc-2.webp')">

<img :src="$withBase('/images/vsc-3.webp')">

```
a               keyword.letter, source.abc
(               punctuation.paren.open, expression.group, source.abc
    b           keyword.letter, expression.group, source.abc
)               punctuation.paren.close, expression.group, source.abc
x               source.abc
(               punctuation.paren.open, expression.group, source.abc
    (           punctuation.paren.open, expression.group, expression.group, source.abc
        c       keyword.letter, expression.group, expression.group, source.abc
        xyz     expression.group, expression.group, source.abc
    )           punctuation.paren.close, expression.group, expression.group, source.abc
)               punctuation.paren.close, expression.group, source.abc
(               source.abc
a               keyword.letter, source.abc
```

<img :src="$withBase('/images/vsc-4.webp')">

如下是 Dracula 的源码 dracula.yml：

<img :src="$withBase('/images/vsc-4-1.webp')">

<img :src="$withBase('/images/vsc-5.webp')">



VS Code 提供了一个创建扩展插件的脚手架 yo code，如下，

<img :src="$withBase('/images/vsc-6.webp')">

通过一些列引导，可以生产一个创建新语言支持的工程。

<img :src="$withBase('/images/vsc-7.webp')">

语言的贡献点（contributes.languages）可以用来定义以下功能：

- Comment toggling 定义备注
- Brackets definition 括号定义，用于高亮
- Autoclosing 自动补全close
- Autosurrounding 用对应的符号环绕
- Folding 折叠
  - 默认：缩进折叠
  - 语言配置
  - 语言服务
- Word pattern 定义语言中什么是一个单词，用于 code suggestion 功能
- Indentation Rules 定义缩进规则

### 举个 🌰

<img :src="$withBase('/images/vsc-8.webp')">

## 参考文献

> https://code.visualstudio.com/api/language-extensions/overview
>
> https://github.com/Microsoft/monaco-editor/blob/master/test/playground.generated/extending-language-services-custom-languages.html
>
> https://github.com/microsoft/monaco-languages
