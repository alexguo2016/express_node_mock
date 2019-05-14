let fs = require("fs"); // 文件读写模块

// 读取指定文件, 可以是json, 
var readFile = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, file) {
    if (err) {
      console.log(err);
      return false;
    }
    callback(file)
  });
}

const myTools = {
  readFile,
}

module.exports = myTools