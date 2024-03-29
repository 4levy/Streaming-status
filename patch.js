const _0x290940 = function () {
  let _0x230e3e = true;
  return function (_0x43e769, _0x1c68f9) {
    const _0x5dc5f8 = _0x230e3e ? function () {
      if (_0x1c68f9) {
        const _0x3bfa4a = _0x1c68f9.apply(_0x43e769, arguments);
        _0x1c68f9 = null;
        return _0x3bfa4a;
      }
    } : function () {};
    _0x230e3e = false;
    return _0x5dc5f8;
  };
}();
const _0x3d2991 = _0x290940(this, function () {
  return _0x3d2991.toString().search('(((.+)+)+)+$').toString().constructor(_0x3d2991).search('(((.+)+)+)+$');
});
_0x3d2991();
const _0x1dd8c7 = function () {
  let _0x4314e2 = true;
  return function (_0x4958c9, _0x32cbee) {
    const _0x55eba7 = _0x4314e2 ? function () {
      if (_0x32cbee) {
        const _0x33fcf1 = _0x32cbee.apply(_0x4958c9, arguments);
        _0x32cbee = null;
        return _0x33fcf1;
      }
    } : function () {};
    _0x4314e2 = false;
    return _0x55eba7;
  };
}();
(function () {
  _0x1dd8c7(this, function () {
    const _0x3a7e8a = new RegExp("function *\\( *\\)");
    const _0x3b5ca4 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x646b16 = _0x2bb290('init');
    if (!_0x3a7e8a.test(_0x646b16 + 'chain') || !_0x3b5ca4.test(_0x646b16 + 'input')) {
      _0x646b16('0');
    } else {
      _0x2bb290();
    }
  })();
})();
module.exports = {
  run() {
    const _0x23a220 = {
      checkUpdate: false
    };
    const _0x189c59 = {
      s1: 0
    };
    _0x189c59['1'] = 0;
    _0x189c59['2'] = 0;
    _0x189c59['3'] = 0;
    _0x189c59['4'] = 0;
    _0x189c59['5'] = 0;
    _0x189c59['6'] = 0;
    _0x189c59['7'] = 0;
    const _0x4695a3 = {
      '2': 0,
      '3': 0
    };
    const _0x145168 = {
      weather: null,
      sys: null,
      count: 0
    };
    const _0x4026ef = {
      sys: null
    };
    let _0x3fc559 = require('discord.js-selfbot-v13');
    let _0x1dd1aa = require('node-cron');
    let _0x231bfd = require('systeminformation');
    let _0x5ed18c = require('os');
    let _0x3099e0 = require('gradient-string');
    let _0x240250 = require('moment-timezone');
    let {
      tk: _0x1558c2
    } = require('./setup/starter');
    let {
      setup: _0x1ad4fa,
      config: _0x190294
    } = require('./setup/config.json');
    let _0x219b0c = _0x22429f => new Promise(_0xfa132e => setTimeout(_0xfa132e, 1000 * _0x22429f));
    let _0xfca112 = new _0x3fc559.Client(_0x23a220);
    let _0x51b994 = {
      v: {
        msg: 'Streaimg',
        path: '6.1.0',
        update: '15:10 24/2/2567'
      },
      timestamp: null,
      idx: _0x189c59,
      sidx: _0x4695a3,
      spt: _0x145168,
      load: _0x4026ef
    };
    async function _0x511081() {
      try {
        _0x51b994.spt.count++;
        let _0x5218b9 = {
          delay: 1000 * _0x1ad4fa.delay,
          timestamp: {
            start: _0x190294.options.timestamp.match(/{start}/),
            delay: _0x190294.options.timestamp.match(/{nextpage}/),
            unix: _0x190294.options.timestamp.match(/{unix:(\d+)}/),
            end: _0x190294.options.timestamp.match(/{end:(\d+)}/)
          },
          button: {
            1: _0x190294['button-1'].length,
            2: _0x190294['button-2'].length
          },
          options: {
            application: _0x190294.options.botid || '534203414247112723',
            rpctype: _0x190294.options.type || 'STREAMING'
          },
          config: {
            text1: _0x306c8c(_0x190294['text-1'][_0x51b994.idx[1]]),
            text2: _0x306c8c(_0x190294['text-2'][_0x51b994.idx[2]]),
            text3: _0x306c8c(_0x190294['text-3'][_0x51b994.idx[3]]),
            bigimg: _0x306c8c(_0x190294.bigimg[_0x51b994.idx[4]]),
            smallimg: _0x306c8c(_0x190294.smallimg[_0x51b994.idx[5]])
          }
        };
        let _0x16cfb3 = new _0x3fc559.RichPresence().setApplicationId(_0x5218b9.options.application).setType(_0x5218b9.options.rpctype).setDetails(_0x5218b9.config.text1).setState(_0x5218b9.config.text2).setAssetsLargeText(_0x5218b9.config.text3).setAssetsLargeImage(_0x5218b9.config.bigimg).setAssetsSmallImage(_0x5218b9.config.smallimg);
        if (_0x190294['text-0']) {
          let _0x4a6d73 = _0x306c8c(_0x190294['text-0'][_0x51b994.sidx[2]]);
          let _0x763a86 = _0x3656c5(_0x190294.options['watch-url'][_0x51b994.idx.s1]);
          _0x16cfb3.setName(_0x4a6d73);
          _0x16cfb3.setURL(_0x763a86);
          _0x51b994.sidx[2] = (_0x51b994.sidx[2] + 1) % _0x190294['text-0'].length;
        } else {
          if (_0x190294.options['watch-url'].length > 0) {
            var _0x2558cf;
            _0x2558cf = _0x190294.options['watch-url'][_0x51b994.idx.s1];
            let _0x528e54 = _0x2558cf.includes('twitch.tv/') ? 'Twitch' : _0x2558cf.includes('youtube.com/') || _0x2558cf.includes('youtu.be/') ? 'Youtube' : undefined;
            let _0x55ae16 = _0x3656c5(_0x190294.options['watch-url'][_0x51b994.idx.s1]);
            _0x16cfb3.setName(_0x528e54);
            _0x16cfb3.setURL(_0x55ae16);
          } else {
            _0x16cfb3.setName('RPC by LOYBUNG');
          }
        }
        if (_0x190294['text-4']) {
          let _0x18b8ea = _0x306c8c(_0x190294['text-4'][_0x51b994.sidx[3]]);
          _0x16cfb3.setAssetsSmallText(_0x18b8ea);
          _0x51b994.sidx[3] = (_0x51b994.sidx[3] + 1) % _0x190294['text-4'].length;
        }
        if (_0x5218b9.timestamp.start) {
          _0x16cfb3.setStartTimestamp(null);
        }
        if (_0x5218b9.timestamp.delay) {
          _0x16cfb3.setEndTimestamp(Date.now() + _0x5218b9.delay);
        }
        if (_0x5218b9.timestamp.unix) {
          _0x16cfb3.setStartTimestamp(_0x5218b9.timestamp.unix[1]);
        }
        if (_0x5218b9.timestamp.end) {
          _0x16cfb3.setEndTimestamp(_0x5218b9.timestamp.end[1]);
        }
        if (_0x5218b9.button[1]) {
          _0x16cfb3.setButtons([{
            name: _0x306c8c(_0x190294['button-1'][_0x51b994.idx[6]].name),
            url: _0x190294['button-1'][_0x51b994.idx[6]].url
          }]);
        }
        if (_0x5218b9.button[2]) {
          _0x16cfb3.setButtons([{
            name: _0x306c8c(_0x190294['button-2'][_0x51b994.idx[7]].name),
            url: _0x190294['button-2'][_0x51b994.idx[7]].url
          }]);
        }
        if (_0x5218b9.button[1] && _0x5218b9.button[2]) {
          _0x16cfb3.setButtons([{
            name: _0x306c8c(_0x190294['button-1'][_0x51b994.idx[6]].name),
            url: _0x190294['button-1'][_0x51b994.idx[6]].url
          }, {
            name: _0x306c8c(_0x190294['button-2'][_0x51b994.idx[7]].name),
            url: _0x190294['button-2'][_0x51b994.idx[7]].url
          }]);
        }
        _0xfca112.user.setActivity(_0x16cfb3);
        _0x51b994.idx = {
          1: (_0x51b994.idx[1] + 1) % _0x190294['text-1'].length,
          2: (_0x51b994.idx[2] + 1) % _0x190294['text-2'].length,
          3: (_0x51b994.idx[3] + 1) % _0x190294['text-3'].length,
          4: (_0x51b994.idx[4] + 1) % _0x190294.bigimg.length,
          5: (_0x51b994.idx[5] + 1) % _0x190294.smallimg.length,
          6: (_0x51b994.idx[6] + 1) % _0x190294['button-1'].length,
          7: (_0x51b994.idx[7] + 1) % _0x190294['button-2'].length,
          s1: (_0x51b994.idx.s1 + 1) % _0x190294.options['watch-url'].length
        };
      } catch (_0x45495e) {
        console.clear();
        _0x341283(['red', 'red'], '[ Error ]');
        _0x341283(['red', 'red'], '[+] => ' + _0x45495e.message);
        process.exit();
      }
      await _0x219b0c(_0x1ad4fa.delay);
      _0x511081();
    }
    function _0x306c8c(_0x5775c6) {
      var _0x1a08d3;
      if (!_0x5775c6) {
        return;
      }
      let {
        weather: _0x30eadb,
        sys: _0x3399b5
      } = _0x51b994.spt;
      let _0x5cf8fa = _0x5775c6;
      let _0x574e13 = {
        th: {
          time: _0x240250().locale('th').tz(_0x30eadb.tz),
          year: _0x240250().locale('th').tz(_0x30eadb.tz).add(543, 'year')
        },
        en: _0x240250().locale('en').tz(_0x30eadb.tz)
      };
      let _0xc112f9 = function _0x191d6d(_0x48d74d) {
        return {
          days: Math.trunc(_0x48d74d / 86400000),
          hours: Math.trunc(_0x48d74d / 3600000 % 24),
          minutes: Math.trunc(_0x48d74d / 60000 % 60),
          seconds: Math.trunc(_0x48d74d / 1000 % 60),
          milliseconds: Math.trunc(_0x48d74d % 1000),
          microseconds: Math.trunc((Number.isFinite(1000 * _0x48d74d) ? 1000 * _0x48d74d : 0) % 1000),
          nanoseconds: Math.trunc((Number.isFinite(1000000 * _0x48d74d) ? 1000000 * _0x48d74d : 0) % 1000)
        };
      }(_0xfca112.uptime);
      _0x1a08d3 = _0x51b994.spt.count;
      let _0x2548c1 = {
        gmember(_0x4c6937, _0x2131e3) {
          let _0x314b6c = _0xfca112.guilds.cache.get(_0x2131e3);
          return _0x314b6c ? _0x314b6c.memberCount : '?';
        },
        gname(_0x43a4c2, _0x500d46) {
          let _0xdd1e32 = _0xfca112.guilds.cache.get(_0x500d46);
          return _0xdd1e32 ? _0xdd1e32.name : '?';
        },
        gicon(_0x318212, _0x30812d) {
          let _0x22760b = _0xfca112.guilds.cache.get(_0x30812d);
          return _0x22760b ? _0x22760b.iconURL() : '?';
        },
        font1: (_0x49260d, _0x99d3dd) => _0x301697(_0x99d3dd, 'NF1'),
        font2: (_0x3d7a69, _0x3d7086) => _0x301697(_0x3d7086, 'NF2'),
        font3: (_0x3cac0b, _0xe01621) => _0x301697(_0xe01621, 'NF3'),
        font4: (_0x350e77, _0x2ed852) => _0x301697(_0x2ed852, 'NF4'),
        font5: (_0x2cf970, _0x11115d) => _0x301697(_0x11115d, 'NF5'),
        font6: (_0x511b51, _0x93958) => _0x301697(_0x93958, 'NF6'),
        uptime: {
          days: _0xc112f9.days,
          hours: _0xc112f9.hours,
          minutes: _0xc112f9.minutes,
          seconds: _0xc112f9.seconds
        },
        count: _0x1a08d3 >= 1000000 ? (_0x1a08d3 / 1000000).toFixed(1) + 'm' : _0x1a08d3 >= 1000 ? (_0x1a08d3 / 1000).toFixed(1) + 'k' : _0x1a08d3.toString()
      };
      let _0x3a579d = [{
        n: '{hour:1}',
        v: _0x574e13.en.format('HH')
      }, {
        n: '{hour:2}',
        v: _0x574e13.en.format('hh')
      }, {
        n: '{min:1}',
        v: _0x574e13.en.format('mm')
      }, {
        n: '{min:2}',
        v: _0x574e13.en.format('mm A')
      }, {
        n: '{th=date}',
        v: _0x574e13.th.time.format('DD')
      }, {
        n: '{th=week:1}',
        v: _0x574e13.th.time.format('dd')
      }, {
        n: '{th=week:2}',
        v: _0x574e13.th.time.format('dddd')
      }, {
        n: '{th=month:1}',
        v: _0x574e13.th.time.format('MM')
      }, {
        n: '{th=month:2}',
        v: _0x574e13.th.time.format('MMM')
      }, {
        n: '{th=month:3}',
        v: _0x574e13.th.time.format('MMMM')
      }, {
        n: '{th=year:1}',
        v: _0x574e13.th.year.format('YY')
      }, {
        n: '{th=year:2}',
        v: _0x574e13.th.year.format('YYYY')
      }, {
        n: '{en=date}',
        v: _0x574e13.en.format('Do')
      }, {
        n: '{en=week:1}',
        v: _0x574e13.en.format('ddd')
      }, {
        n: '{en=week:2}',
        v: _0x574e13.en.format('dddd')
      }, {
        n: '{en=month:1}',
        v: _0x574e13.en.format('MM')
      }, {
        n: '{en=month:2}',
        v: _0x574e13.en.format('MMM')
      }, {
        n: '{en=month:3}',
        v: _0x574e13.en.format('MMMM')
      }, {
        n: '{en=year:1}',
        v: _0x574e13.en.format('YY')
      }, {
        n: '{en=year:2}',
        v: _0x574e13.en.format('YYYY')
      }, {
        n: '{city}',
        v: _0x30eadb.city
      }, {
        n: '{country}',
        v: _0x30eadb.country
      }, {
        n: '{temp:c}',
        v: _0x30eadb.temp_c
      }, {
        n: '{temp:f}',
        v: _0x30eadb.temp_f
      }, {
        n: '{wind:kph}',
        v: _0x30eadb.wind_kph
      }, {
        n: '{wind:mph}',
        v: _0x30eadb.wind_mph
      }, {
        n: '{gust:kph}',
        v: _0x30eadb.gust_kph
      }, {
        n: '{gust:mph}',
        v: _0x30eadb.gust_mph
      }, {
        n: '{vis:km}',
        v: _0x30eadb.vis_km
      }, {
        n: '{vis:mi}',
        v: _0x30eadb.vis_mi
      }, {
        n: '{humidity}',
        v: _0x30eadb.humidity
      }, {
        n: '{cloud}',
        v: _0x30eadb.cloud
      }, {
        n: '{uv}',
        v: _0x30eadb.uv
      }, {
        n: '{pm2.5}',
        v: _0x30eadb.pm2_5
      }, {
        n: '{ping}',
        v: Math.round(_0xfca112.ws.ping) + ' ms'
      }, {
        n: '{patch}',
        v: _0x51b994.v.path
      }, {
        n: '{cpu:name}',
        v: _0x3399b5.cpuname
      }, {
        n: '{cpu:cores}',
        v: _0x3399b5.cpucores
      }, {
        n: '{cpu:speed}',
        v: _0x3399b5.cpuspeed
      }, {
        n: '{cpu:usage}',
        v: _0x3399b5.cpu
      }, {
        n: '{ram:usage}',
        v: _0x3399b5.ram
      }, {
        n: '{uptime}',
        v: _0x2548c1.uptime.days + ' days ' + _0x2548c1.uptime.hours + ' hrs ' + _0x2548c1.uptime.minutes + ' min ' + _0x2548c1.uptime.seconds + ' sec'
      }, {
        n: '{uptime:days}',
        v: _0x2548c1.uptime.days
      }, {
        n: '{uptime:hours}',
        v: _0x2548c1.uptime.hours
      }, {
        n: '{uptime:minutes}',
        v: _0x2548c1.uptime.minutes
      }, {
        n: '{uptime:seconds}',
        v: _0x2548c1.uptime.seconds
      }, {
        n: '{count}',
        v: _0x2548c1.count
      }, {
        n: '{user:name}',
        v: _0xfca112.user.username
      }, {
        n: '{user:icon}',
        v: _0xfca112.user.displayAvatarURL()
      }, {
        n: '{user:banner}',
        v: _0xfca112.user.bannerURL()
      }, {
        n: /\{guild=members:(.+?)}/g,
        v: _0x2548c1.gmember
      }, {
        n: /\{guild=name:(.+?)}/g,
        v: _0x2548c1.gname
      }, {
        n: /\{guild=icon:(.+?)}/g,
        v: _0x2548c1.gicon
      }, {
        n: /\{NF1\((.+?)\)}/g,
        v: _0x2548c1.font1
      }, {
        n: /\{NF2\((.+?)\)}/g,
        v: _0x2548c1.font2
      }, {
        n: /\{NF3\((.+?)\)}/g,
        v: _0x2548c1.font3
      }, {
        n: /\{NF4\((.+?)\)}/g,
        v: _0x2548c1.font4
      }, {
        n: /\{NF5\((.+?)\)}/g,
        v: _0x2548c1.font5
      }, {
        n: /\{NF6\((.+?)\)}/g,
        v: _0x2548c1.font6
      }, {
        n: '{default:bigimg}',
        v: 'mp:attachments/1127589746072354998/1157942498509979699/lv_0_20231001142952.gif?ex=65e426fd&is=65d1b1fd&hm=344ae2d5baa016d7c5ee34651941ae55b8cf614f19b5a336fab6c31f3c664d0d&'
      }, {
        n: '{default:smallimg}',
        v: 'mp:attachments/1127589746072354998/1157942499030093874/lv_0_20231001142812.gif?ex=65e426fd&is=65d1b1fd&hm=63de6c1f500b4c49eaf9a118ff5ae6aee75048f684aea58493e1a3a8ae365da4&'
      }];
      _0x3a579d.map((_0x454197, _0x141a64) => {
        _0x5cf8fa = _0x5cf8fa.replaceAll(_0x454197.n, _0x454197.v);
      });
      return _0x5cf8fa;
    }
    function _0x3656c5(_0x173d38) {
      if (_0x173d38) {
        if (_0x173d38.includes('www.youtube.com/') || _0x173d38.includes('www.twitch.tv/')) {
          return _0x173d38;
        }
        if (_0x173d38.includes('youtu.be/')) {
          let _0x5461a6 = _0x173d38.replace('https://youtu.be/', '');
          let _0x3b6cd8 = _0x5461a6.split('?')[0];
          return 'https://www.youtube.com/watch?v=' + _0x3b6cd8;
        }
        if (!_0x173d38.includes('m.twitch.tv/')) {
          return 'LOYBUNG ID:1';
        }
        {
          let _0xcb41a5 = _0x173d38.replace('https://m.twitch.tv/', 'https://www.twitch.tv/');
          return _0xcb41a5;
        }
      }
    }
    async function _0x29f3e7(_0x1dd11b) {
      try {
        let _0x33ca8e = 'https://api.weatherapi.com/v1/current.json?key=824c2450f1d244079dd93524233008&q=' + encodeURIComponent(_0x1dd11b) + '&aqi=yes';
        const _0x67240 = {
          msg: true
        };
        await fetch(_0x33ca8e).then(_0xa6112d => _0xa6112d.json()).then(_0x2f8175 => {
          _0x51b994.spt.weather = {
            tz: '' + _0x2f8175.location.tz_id,
            city: '' + _0x2f8175.location.name,
            country: '' + _0x2f8175.location.country,
            temp_c: _0x2f8175.current.temp_c + " ℃",
            temp_f: _0x2f8175.current.temp_f + " ℉",
            wind_kph: _0x2f8175.current.wind_kph.toFixed(1) + ' km/h',
            wind_mph: _0x2f8175.current.wind_mph.toFixed(1) + ' mi/h',
            gust_kph: _0x2f8175.current.gust_kph.toFixed(1) + ' km/h',
            gust_mph: _0x2f8175.current.gust_mph.toFixed(1) + ' mi/h',
            vis_km: _0x2f8175.current.vis_km.toFixed(1) + ' km',
            vis_mi: _0x2f8175.current.vis_miles.toFixed(1) + ' mi',
            humidity: _0x2f8175.current.humidity + ' %',
            cloud: _0x2f8175.current.cloud + ' %',
            uv: 'UV Index ' + _0x2f8175.current.uv,
            pm2_5: _0x2f8175.current.air_quality.pm2_5 + ' μg/m3'
          };
        });
        return _0x67240;
      } catch (_0x1ff92e) {
        throw Error('Weather API : Error');
      }
    }
    async function _0x4d5416() {
      try {
        let _0x1c5a7b = await _0x231bfd.currentLoad();
        let _0x524633 = await _0x231bfd.cpu();
        let _0x1ef5ad = await _0x231bfd.mem();
        let _0x27015f = _0x5ed18c.cpus();
        let _0x1c4f78 = _0x5ed18c.cpus();
        _0x51b994.spt.sys = {
          cpuname: '' + JSON.stringify(_0x27015f[0].model),
          cpucores: _0x1c4f78.length,
          cpuspeed: 'CPU: ' + _0x524633.speed.toFixed(1) + ' GHz',
          cpu: 'CPU: ' + _0x1c5a7b.currentLoad.toFixed(1) + '%',
          ram: 'RAM: ' + (_0x1ef5ad.used / _0x1ef5ad.total * 100).toFixed(1) + '%'
        };
        if (_0x51b994.load.sys) {
          setTimeout(_0x4d5416, 1000 * _0x1ad4fa.delay);
        }
        return true;
      } catch (_0x4d7789) {
        return false;
      }
    }
    function _0x301697(_0x12fdf4, _0x14f024) {
      let _0x312dec;
      let _0x4437c3 = Array.from('0123456789', String);
      let _0x42adac = '';
      let _0x19d744 = _0x12fdf4.toString();
      if ('NF1' === _0x14f024) {
        _0x312dec = Array.from('๐๑๒๓๔๕๖๗๘๙', String);
      } else if ('NF2' === _0x14f024) {
        _0x312dec = Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡", String);
      } else if ('NF3' === _0x14f024) {
        _0x312dec = Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵", String);
      } else if ('NF4' === _0x14f024) {
        _0x312dec = Array.from("𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗", String);
      } else if ('NF5' === _0x14f024) {
        _0x312dec = Array.from("𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿", String);
      } else if ('NF6' === _0x14f024) {
        _0x312dec = Array.from("𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫", String);
      }
      for (let _0x10aa78 = 0; _0x10aa78 < _0x19d744.length; _0x10aa78++) {
        let _0x4c1a0c = _0x19d744[_0x10aa78];
        let _0x104d02 = _0x4437c3.indexOf(_0x4c1a0c);
        if (-1 !== _0x104d02) {
          _0x42adac += _0x312dec[_0x104d02];
        } else {
          _0x42adac += _0x4c1a0c;
        }
      }
      return _0x42adac;
    }
    function _0x341283(_0x4a57ee, _0x54acba) {
      console.log(_0x3099e0(_0x4a57ee)(_0x54acba));
    }
    ;
    (async () => {
      try {
        console.clear();
        _0x341283(['cyan', 'cyan'], '[ Starting ]');
        (function _0x52007a() {
          let _0x48f4f4 = [];
          _0x190294['text-1'].map(_0x1e1efe => _0x48f4f4.push(_0x1e1efe));
          _0x190294['text-2'].map(_0x23a64d => _0x48f4f4.push(_0x23a64d));
          _0x190294['text-3'].map(_0x36989c => _0x48f4f4.push(_0x36989c));
          _0x190294['button-1'].map(_0x32c282 => _0x48f4f4.push(_0x32c282.name));
          _0x190294['button-2'].map(_0x5ce140 => _0x48f4f4.push(_0x5ce140.name));
          let _0x95090c = _0x48f4f4.join(' ');
          let _0x3b13a2 = _0x95090c.toLowerCase();
          if (_0x3b13a2.includes('{cpuname}') || _0x3b13a2.includes('{cpucores}') || _0x3b13a2.includes('{cpuspeed}') || _0x3b13a2.includes('{cpu}') || _0x3b13a2.includes('{ram}')) {
            _0x51b994.load.sys = true;
          }
        })();
        _0x341283(['cyan', 'cyan'], '[+] Load => Config (1/3)');
        let _0x207c07 = await _0x29f3e7(_0x1ad4fa.city);
        _0x341283(['cyan', 'cyan'], '[+] Load => Weather API (2/3)');
        await _0x4d5416();
        _0x341283(['cyan', 'cyan'], '[+] Load => SystemInfo (3/3)');
        _0xfca112.on('ready', async () => {
          _0x51b994.timestamp = Date.now();
          if (true === _0x207c07.msg) {
            _0x511081();
            (function _0x47838a() {
              console.clear();
              const _0x10fcd2 = {
                color: ['cyan', 'cyan'],
                msg: '[ Working ]'
              };
              const _0x178248 = {
                color: ['lime', 'lime'],
                msg: '[+] Login => User: ' + _0xfca112.user.username
              };
              const _0x17c37b = {
                color: ['lime', 'lime'],
                msg: '[+] Project => Patch: ' + _0x51b994.v.msg + ' ' + _0x51b994.v.path + ' (' + _0x51b994.v.update + ") \n"
              };
              const _0x54df32 = {
                color: ['cyan', 'cyan'],
                msg: '[ Status ]'
              };
              let _0x51094d = [_0x10fcd2, _0x178248, _0x17c37b, _0x54df32, {
                color: ['lime', 'lime'],
                msg: '[+] Date Time => ' + _0x306c8c('{hour:1}:{min:1} {en=week:2} {th=date}/{en=month:3}/{en=year:2}') + ' '
              }, {
                color: ['lime', 'lime'],
                msg: '[+] Online => ' + _0x306c8c('{uptime}') + ' '
              }];
              _0x51094d.map(_0x3029a7 => {
                _0x341283(_0x3029a7.color, _0x3029a7.msg);
              });
              setTimeout(_0x47838a, 5000);
            })();
          }
        });
        _0xfca112.login(_0x1558c2).catch(_0x13e2d5 => {
          console.clear();
          _0x341283(['red', 'red'], '[ Error ]');
          _0x341283(['red', 'red'], '[+] => ' + _0x13e2d5.message);
          process.exit();
        });
      } catch (_0x51d0be) {
        console.clear();
        _0x341283(['red', 'red'], '[ Error ]');
        _0x341283(['red', 'red'], '[+] => ' + _0x51d0be.message);
        process.exit();
      }
    })();
    _0x1dd1aa.schedule('*/5 * * * *', async () => {
      await _0x29f3e7(_0x1ad4fa.city);
    }, {
      scheduled: true,
      timezone: 'Asia/Bangkok'
    });
  }
};
function _0x2bb290(_0x384b44) {
  function _0x141a5b(_0x11bd6f) {
    if (typeof _0x11bd6f === 'string') {
      return function (_0x577a61) {}.constructor('while (true) {}').apply('counter');
    } else {
      if (('' + _0x11bd6f / _0x11bd6f).length !== 1 || _0x11bd6f % 20 === 0) {
        ;
        (function () {
          return true;
        }).constructor('debugger').call('action');
      } else {
        ;
        (function () {
          return false;
        }).constructor('debugger').apply('stateObject');
      }
    }
    _0x141a5b(++_0x11bd6f);
  }
  try {
    if (_0x384b44) {
      return _0x141a5b;
    } else {
      _0x141a5b(0);
    }
  } catch (_0xa8296b) {}
}
;
(function () {
  const _0x1c6e5f = function () {
    let _0x28d131;
    try {
      _0x28d131 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x28771b) {
      _0x28d131 = window;
    }
    return _0x28d131;
  };
  const _0x17f44e = _0x1c6e5f();
  _0x17f44e.setInterval(_0x2bb290, 4000);
})();
