// 这里放的是访问页面的路由和操作
const myTools = require("./util");
const { readFile, writeFile } = myTools;

const root = {
  path: "/",
  method: "get",
  jsonFile: "",
  callback: function(req, res) {
    res.send("Hello World!");
  }
};
const data = {
  path: "/data",
  method: "get",
  jsonFile: "",
  callback: function(req, res) {
    var filePath = "./data/data.json";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
};
const file = {
  path: "/file",
  method: "get",
  jsonFile: "./data/testData.txt",
  callback: function(req, res) {
    var filePath = "./data/testData.txt";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
};

const edit = {
  path: "/edit",
  method: "post",
  jsonFile: "./data/data.json",
  callback: function(req, res) {
    const params = req.body;
    // console.log("params", params);
    var filePath = './data/data.json'
    writeFile(filePath, params, function(params) {
      res.send(params)
    });
  }
};

const routers = {
  root,
  data,
  file,
  edit
};

module.exports = routers;
