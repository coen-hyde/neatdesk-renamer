var fs = require('fs')
  , path = require('path');

module.exports = function(dir) {
  var files = fs.readdirSync(dir);
  
  files.forEach(function(file) {
    var matches = file.match(/Receipt\-([\w\s]*) ([0-9]{4}\-[0-9]{2}\-[0-9]{2}) (\$[0-9]*)\.pdf/)

    if (matches === null) {
      return
    }

    var oldPath = dir+'/'+file;
    var newPath = dir+'/'+matches[2]+' '+matches[3]+' '+matches[1]+'.pdf';
    fs.renameSync(oldPath, newPath);
  });
}
