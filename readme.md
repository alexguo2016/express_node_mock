# 使用express框架的简易服务器

## 简介

- 读写json文件
- 用来做mock服务器, 帮助开发

## 文件结构

- app.js 入口文件
- util.js 工具文件, 一些工具函数
- routers.js 路由对应表
- data文件夹, 保存json文件

## 使用

- git clone
- npm install
- node app.js

## 增加个人设置

例如, 在routers.js文件里面增加

```js
const root = {
  path: "/test",
  method: "get",
  jsonFile: "",
  callback: function (req, res) {
    res.send('Hello World!')
  }
};

const routers = {
  // 其他路由
  root // 刚刚增加的路由
};
```

如上, 可以在浏览器中输入localhost:3000/test来验证, 页面会出现“Hello World!”

- path 路径
- method 访问方式, 例如可以修改为post
- jsonFile 对应data文件夹里面的json文件, 暂时不可用, 待优化
- callback 回调函数, 其中req是发送请求的request, res是response
