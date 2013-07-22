var renamer = require('../')
  , fs = require('fs')
  , touch = require('touch')
  , should = require('should');

var receiptsDir = __dirname+'/tmp'

var beforeFiles = [
  receiptsDir+'/Receipt-USPS 2013-06-19 $22.pdf',
  receiptsDir+'/Receipt-Starbucks 2013-07-03 $2.pdf',
  receiptsDir+'/Receipt-UPS 2013-07-18 $31.pdf'
];

var afterFiles = [
  receiptsDir+'/2013-06-19 $22 USPS.pdf',
  receiptsDir+'/2013-07-03 $2 Starbucks.pdf',
  receiptsDir+'/2013-07-18 $31 UPS.pdf'
];

var removeFiles = function() {
  var files = fs.readdirSync(receiptsDir);

  files.forEach(function(file) {
    var path = receiptsDir+'/'+file
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  });
}

before(function() {
  removeFiles();

  beforeFiles.forEach(function(file) {
    touch.sync(file);
  });
});

after(removeFiles);

describe('NeatDesk pdf export renamer', function() {
  it('should', function(done) {
    renamer(receiptsDir);

    afterFiles.forEach(function(file) {
      fs.existsSync(file).should.equal(true);
    });

    done();
  });
});