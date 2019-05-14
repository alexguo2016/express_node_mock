//引入express中间件
var express = require("express");
var app = express();
var bodyParser = require('body-parser');// 用于req.body获取值的
app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: true }));
// 读取文件的工具函数
var myTools = require('./util.js')
// const {pathRegiste} = myTools

// 路由文件
const routers = require('./routers')

const __main = function() {
  // 注册路由
  pathRegiste(routers)
}

function pathRegiste(routers) {
  for (const router in routers) {
    const item = routers[router]
    const { path, method, jsonFile, callback } = item;
    app[method](path, callback);
  }
}

__main()

//监听端口为3000
var server = app.listen(3000, function() {
  
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
