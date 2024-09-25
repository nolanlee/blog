---
date: 2020-11-18
author: Nolan
location: Beijing
tags:
  - 基本功
---

## 🦍 Promise.all

今天看到一位候选人面试记录里有一道笔试题 -- 实现 Promise.all。想了想，没有特别巧的方法。这里实现一个常规写法，供参考。


```js
Promise.allPolyfill = function(arr) {
  const result = []
  let count = 0
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        result[index] = res
        count++
        if(count === arr.length) resolve(result)
      }).catch(reject)
    })
  })
}

// test case
const p0 = new Promise((resolve) => {
  setTimeout(() => resolve(0), 1000)
})

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 500)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1500)
})

const p3 = 3

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error(4)), 800)
})

Promise.allPolyfill([p0, p1, p2, p3]).then(console.log).catch(console.error) // output: [0, 1, 2, 3]
Promise.allPolyfill([p0, p1, p2, p3, p4]).then(console.log).catch(console.error) // output: Error: 4

```
