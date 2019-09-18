//引入express中间件
var express = require("express");
var app = express();
var bodyParser = require('body-parser');// 用于req.body获取值的
app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: true }));

//设置跨域访问
app.use((req, res, next) => {
  // 设置是否运行客户端设置 withCredentials
  // 即在不同域名下发出的请求也可以携带 cookie
  res.header("Access-Control-Allow-Credentials",true)
  // 第二个参数表示允许跨域的域名，* 代表所有域名  
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS') // 允许的 http 请求的方法
  // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if (req.method == 'OPTIONS') {
      res.sendStatus(200)
  } else {
      next()
  }
})

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
