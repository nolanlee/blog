---
date: 2019-12-11
author: Nolan
location: Beijing
tags:
  - Fresh Tech
---
# Hello, WebAssembly

> MDN: WebAssembly是一种新的编码方式，可以在现代浏览器中运行 － 它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如C / C ++等语言提供一个编译目标，以便它们可以在Web上运行。它也被设计为可以与JavaScript共存，允许两者一起工作。

## 起源

### JS 简史

JavaScript 的设计初衷是为非专业编程人员和设计师使用的，用作轻量级的简单操作的一种胶水语言。JS 的作者 Brendan Eich 认为让非专业人员学习了解什么是类型、编译器（CPU工作原理）、泛型、操作符重载是一件很“残忍”的事情。万万没想到的是，JS 发布以后火的一塌糊涂，各大浏览器纷纷支持或者效仿（JScript，VBScript）。后来随着 ECMA 的协调，各大浏览器终于统一了 JS 的标准。随着 Web2.0 的发展，DOM、BOM、JS的功能越来越丰富，Web 应用也越来越复杂，浏览器的 JS 引擎也开始出现了性能瓶颈。

JS 的性能瓶颈主要由语言本身的问题引起的，因为 JS 是动态类型语言。在静态类型语言中，比如 C++ 和 Java，一个对象的变量类型是确定的，内存分配的字节数是确定的，可以用数组来存储变量的值，所以事先知道存取这些变量所在的内存中的偏移量，读写速度很快。而大部分 JS 引擎使用哈希表存取属性和寻找方法，跟直接用偏移量寻址比会费时。

然后，大家都知道的，V8 引擎应运而生，JS 的性能提升了20-50倍。

### V8 为什么快

V8 引入了一种及时编译技术（JIT，just-in-time）来生成机器语言。这是个普遍用来改善解析速度的方法，在 Java 和 .NET 等语言中也运用了这种技术。V8 不是将原始程序转换成中间语言，而是将抽象语法树直接产生机器语言并加以执行。没有虚拟机，就不需要中间处理，程序处理会更早开始了。然而，另一方面，它也丧失了虚拟机的好处，例如透过字节码解释器和混合模式等，所带来的高可移植性和优化的简易性等。

JIT 基于运行时分析编译，而 JS 是一个没有类型的语言，于是， 大部分时间，JIT 编译器其实是在猜测 JS 中的类型。猜总会有猜错的时候，猜错以后只能推倒重来。JIT 带来的性能提升，有时候还没有重编的开销大。事实上，大部分时间 JIT 都不会生成优化代码，有因为 JIT 自己也需要时间，除非是一个函数被使用过很多遍，否则不会被编译成机器码，因为编译花的时间可能比直接跑字节码还多，也因此触碰到了 V8 性能的天花板。

### 打破天花板

既然 JIT 遇到的问题是类型不确定问题，那能否有一种方法把类型标注出来呢？按照这种思路，业界出现了两种方案：

以 Typescript，Dart 为代表的以 JS 为编译目标的强类型语言。由于强类型范式，会使得 TS 编译后的 JS 更容易被 JIT 优化。

以 Asm.js 为代表标注方法。Asm.js 是 Mozilla 开发的 JS 的严格子集，目的是用于将传统的强类型语言可以编译为 Asm.js 后直接在浏览器执行。Firefox 也是唯一一个支持解析 Asm.js 的浏览器。

```js
function f(i) {
  i = i|0;
  return (i + 1)|0;
}
```

巨头们（Google, Apple，MicroSoft）发现 Asm.js 这种方式更有前途，并且可以更激进的，直接将强类型语言编译成浏览器可以执行的字节码。虽然 JS 足够强大到能够解决人绝大部分问题，但遇到3D游戏、AR/VR、计算机视觉、图像/视频编辑等大量的要求原生性能的其他领域的时候，性能问题暴露无遗。

于是 W3C 工作组主导开发 WebAssembly 标准，并得到了来自各大主要浏览器厂商的积极参与，旨在提供了一条途径，以使得以各种语言编写的代码都可以以接近原生的速度在 Web 中运行。

## BOOM💥, WebAssembly

WebAssembly 是一门低阶语言（类汇编），所以它是一种人类可读的文本格式，以便编写和调试。它不是用来取代 JS 的，而是被设计与 JS 协同工作。所以现代浏览器可以加载并执行 WASM  和 JS 两种语言。而 Web 开发者既可以享受作为高级语言 JS 的灵活、可读、富有表达力以及庞大的生态，同时也能在需要高性能的场景编写以接近于原生性能的程序。

WebAssembly 是一种基于 symbolic-expression （如 Lisp）语法的语言，其文本格式的文件后缀为 .wat，用来在文本编辑器、浏览器开发者工具等工具中显示的中间形式。

```
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i))
```

.wasm 是二进制格式的文件，通过 XHR 或 Fetch 引入到浏览器。

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg)
    }
  }
}

fetch('example.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  results.instance.exports.exported_func();
});
```

[https://github.com/appcypher/awesome-wasm-langs](https://github.com/appcypher/awesome-wasm-langs) 维护了一个可编译到 WASM 语言的列表:

(稳定，可用于生产环境的编译器 - 截止到 19-11-28)

+ .Net
+ AssemblyScript
+ Brainfuck
+ C
+ C#
+ C++
+ Clean
+ Forth
+ Go
+ Lobster
+ Lua
+ Rust
+ TypeScript
+ Wah
+ Zig

浏览器兼容性：
<img :src="$withBase('/images/can-i-use-wasm.webp')" alt="can-i-use-wasm">

## 未来

> [https://github.com/WebAssembly/design/blob/master/FutureFeatures.md](https://github.com/WebAssembly/design/blob/master/FutureFeatures.md)

+ 多线程：Web 已经支持使用Web Workers来进行多线程执行，这刚好可以用来作为在 WebAssembly 中引入多线程执行的基础。
+ Web IDL绑定：Web IDL 是一个接口定义语言，它可以用来定义在Web中实现的接口。简单的说就是在 WASM 中直接调用 Web API。
+ GC
+ 尾递归优化
+ 异常处理
+ ES module
