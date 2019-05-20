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

// 以下是小程序开发用到的mock接口
const index_init = {
  path: '/index_init',
  method: 'get',
  jsonFile: './data/index_page.json',
  callback: function(req, res) {
    var filePath = "./data/index_page.json";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
}

// 选择地区页面
const index_change_location_init = {
  path: '/index_change_location_init',
  method: 'get',
  jsonFile: './data/index_change_location_init.json',
  callback: function(req, res) {
    var filePath = "./data/index_change_location_init.json";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
}

// 美食搜索页面
const index_food_search_init = {
  path: '/index_food_search_init',
  method: 'get',
  jsonFile: './data/index_food_search_init.json',
  callback: function(req, res) {
    var filePath = "./data/index_food_search_init.json";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
}
// 美食搜索页面
const index_food_blog_init = {
  path: '/index_food_blog_init',
  method: 'get',
  jsonFile: './data/index_food_blog_init.json',
  callback: function(req, res) {
    var filePath = "./data/index_food_blog_init.json";
    readFile(filePath, function(result) {
      res.send(result);
    });
  }
}

const routers = {
  root,
  data,
  file,
  edit,

  index_init,
  index_change_location_init,
  index_food_search_init,
  index_food_blog_init
};

module.exports = routers;
