---
date: 2019/06/14
author: Nolan
location: Beijing
tags:
  - Fresh Tech
---
# Node.js CLI 常用工具

CLI 即 command-line interface，命令行工具。最近参与开发一个 CLI 脚手架工具，接触了一些好用的工具。

首先，Node.js 内置了对命令操作的支持，在 package.json 的 bin 字段可以定义命令名称和关联的执行文件，执行文件一般放在 bin 目录下。这样如果 node module 是全局安装的，会自动在系统的 bin 目录下关联到执行文件，如果不是全局安装，会在 node_modules/.bin 目录下挂链。这样就可以直接在终端执行命令了。

原始的 Node.js 命令行开发主要基于 process API 的 stdin 和 stdout，stdin 是一个 readable stream, stdout 是一个 writable stream，console.log 内部就是使用了 process.stdout。如下是一个简单的例子：

```js
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
```

## commander

> the complete solution for node.js command-line programs, inspired by Ruby's commander -- TJ

一个快速开发 Node.js 命令行的工具，可以在自动解析命令和参数，具体使用方法参加项目的 README 或者 API 文档 [http://tj.github.io/commander.js/](http://tj.github.io/commander.js/)，这里只列举一些简单的用法。

```js
var program = require('commander');

// 定义特定命令需要执行的函数
function range(val) {
  return val.split('..').map(Number);
}

function list(val) {
  return val.split(',');
}

// 初始化配置
program
  .version('0.1.0') // 设置版本号，用于  xxx -V 或者 --version 显示
  .usage('[options] <file ...>') // 用于 xxx -h 或者 --help 显示帮助信息
  .option('-i, --integer <n>', 'An integer argument', parseInt) // 绑定初始化命令，接受参数，描述，对应的函数
  .option('-f, --float <n>', 'A float argument', parseFloat)
  .option('-r, --range <a>..<b>', 'A range', range)
  .option('-l, --list <items>', 'A list', list)
  .parse(process.argv); // 解析输入

console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
```
<img :src="$withBase('/images/commander-demo.webp')" alt="commander-demo">

## inquirer

> A collection of common interactive command line user interfaces
> Strives to be an easily embeddable and beautiful command line interface for Node.js

用于命令行的交互，比如问题回答、选择等，通过 Promise 的方式，将问题的答案数据示例如下:

```js
const inquirer = require('inquirer')

const questions = [
  {
      type: 'input',
      name: 'name',
      message: `请输入组件名称`,
      validate: function (value) {
          if (value) return true;
          return '不能为空'
      }
  },
  {
      type: 'input',
      name: 'version',
      message: '请输入组件版本',
      validate: function (value) {
          if (value) return true;
          return '不能为空'
      },
      default: '0.0.1'
  },
  {
      type: 'list',
      name: 'ui',
      message: '请选择基础组件库',
      choices: [{
          value: 'none',
          name: '无'
      }, {
          value: 'element',
          name: 'Element UI'
      }, {
          value: 'vuetify',
          name: 'Vuetify'
      }],
      default: 'element'
  },
  {
      type: 'list',
      name: 'element-version',
      message: '请选择版本号',
      choices: ['^2.8.2', '^1.4.3'],
      default: '^2.8.2',
      when(answers) {
          return answers.ui === 'element'
      }
  },
  {
      type: 'list',
      name: 'vuetify-version',
      message: '请选择版本号',
      choices: ['^2.1.14', '^1.5.21'],
      default: '^2.1.14',
      when(answers) {
          return answers.ui === 'vuetify'
      }
  }
];

inquirer.prompt(questions).then(console.log);
```

<img :src="$withBase('/images/inquirer-demo.webp')" alt="inquirer-demo">

## chalk

提供了一组 API，可以便捷的更改终端输出文字的样式，如下是一个简单的例子，详情请移步 [https://github.com/chalk/chalk](https://github.com/chalk/chalk)。

```js
const chalk = require('chalk');

console.log(chalk.bold.blue.underline('Hello world!'));
```

## ora

> Elegant terminal spinner

ora可以用在加载等待的场景中，针对加载结果成功、失败、警告等提供默认的图标和样式。

```js
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);

spinner.stop();
```

## metalsmith

> An extremely simple, pluggable static site generator

用在批量处理模板的场景，特点是通过插件的方式来完成模板装载，本质是一个胶水框架。由于官方提供了一些 markdown 转换的插件，所以可以用来生成静态站点。

```js
const Metalsmith  = require('metalsmith');

Metalsmith(process.cwd())
  .metadata(answers)
  .clean(true)
  .source(path.resolve(__dirname, './.template'))
  .destination('./' + `${answers.name}`)
  .use((files, _metalsmith, done) => {
    const meta = _metalsmith.metadata();
    let name = `${meta.name}`;
    let camelName = _.camelCase(name);
    let kebabName = _.kebabCase(name);
    let element = meta.ui === 'element';
    let mtd = meta.ui === 'mtd';
    Object.keys(files).forEach(fileName => {
      const t = files[fileName].contents.toString('utf8');
      if (['package.json', 'description.json', 'index.js'].includes(path.basename(fileName))) {
        files[fileName].contents = Buffer.from(Handlebars.compile(t)(replaceData));
      }
    });
    done();
  })
  .build(err => {
    if (err) throw err;
  });
```

## update-notifier

> Update notifications for your CLI app

用于在命令执行时提示是否有可更新的版本。

```js
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();
```
