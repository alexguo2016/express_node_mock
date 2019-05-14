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

// 新增指定文件的data项
var writeFile = function(filePath, data, callback) {
  fs.readFile(filePath, function(err, file){
    if(err){
        return console.error(err);
    }
    var originData = JSON.parse(file)
    var tempData = originData.data
    tempData.push(data)
    const str = JSON.stringify(originData, null, 4)
    fs.writeFile(filePath, str, function(err){
        if(err){
            console.error(err);
        }
        callback(data)
    })
})
}

const myTools = {
  readFile,
  writeFile
}

module.exports = myTools