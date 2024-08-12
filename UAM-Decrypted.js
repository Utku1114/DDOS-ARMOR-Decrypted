var _0x3ac6bc = (function () {
  var _0x45131d = true
  return function (_0x3467a0, _0x58fd1a) {
    var _0x44c63b = _0x45131d
      ? function () {
          if (_0x58fd1a) {
            var _0x21e0e2 = _0x58fd1a.apply(_0x3467a0, arguments)
            return (_0x58fd1a = null), _0x21e0e2
          }
        }
      : function () {}
    return (_0x45131d = false), _0x44c63b
  }
})()
var _0x1b5384 = _0x3ac6bc(this, function () {
  return _0x1b5384
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x1b5384)
    .search('(((.+)+)+)+$')
})
_0x1b5384()
var _0x3fc180 = (function () {
  var _0x1b27ea = true
  return function (_0x49c1b2, _0x3efb1b) {
    var _0x2688a3 = _0x1b27ea
      ? function () {
          if (_0x3efb1b) {
            var _0x372ac2 = _0x3efb1b.apply(_0x49c1b2, arguments)
            return (_0x3efb1b = null), _0x372ac2
          }
        }
      : function () {}
    return (_0x1b27ea = false), _0x2688a3
  }
})()
;(function () {
  _0x3fc180(this, function () {
    var _0x5cd3f0 = new RegExp('function *\\( *\\)'),
      _0x2efa0c = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x2ffa8d = _0x195faf('init')
    if (
      !_0x5cd3f0.test(_0x2ffa8d + 'chain') ||
      !_0x2efa0c.test(_0x2ffa8d + 'input')
    ) {
      _0x2ffa8d('0')
    } else {
      _0x195faf()
    }
  })()
})()
var _0x50f2bf = (function () {
    var _0x4a9e26 = true
    return function (_0x3f790a, _0x54eaf0) {
      var _0x4d7339 = _0x4a9e26
        ? function () {
            if (_0x54eaf0) {
              var _0x499db7 = _0x54eaf0.apply(_0x3f790a, arguments)
              return (_0x54eaf0 = null), _0x499db7
            }
          }
        : function () {}
      return (_0x4a9e26 = false), _0x4d7339
    }
  })(),
  _0x567bd9 = _0x50f2bf(this, function () {
    var _0x169837
    try {
      var _0x4c9138 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x169837 = _0x4c9138()
    } catch (_0x4a45d2) {
      _0x169837 = window
    }
    var _0x4be9ae = (_0x169837.console = _0x169837.console || {})
    var _0x713062 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x35848a = 0; _0x35848a < _0x713062.length; _0x35848a++) {
      var _0x376311 = _0x50f2bf.constructor.prototype.bind(_0x50f2bf)
      var _0x9606c5 = _0x713062[_0x35848a]
      var _0x4c5263 = _0x4be9ae[_0x9606c5] || _0x376311
      _0x376311['__proto__'] = _0x50f2bf.bind(_0x50f2bf)
      _0x376311.toString = _0x4c5263.toString.bind(_0x4c5263)
      _0x4be9ae[_0x9606c5] = _0x376311
    }
  })
_0x567bd9()
const COOKIE_NAME = 'DDoSArmor_1'
;(function () {
  var _0x3d2701 = function () {
    var _0x640205
    try {
      _0x640205 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x40fd1a) {
      _0x640205 = window
    }
    return _0x640205
  }
  var _0x5587a9 = _0x3d2701()
  _0x5587a9.setInterval(_0x195faf, 4000)
})()
const COOKIE_NAME_CAPTCHA = 'DDoSArmor_2',
  SITE_KEY = '6LfdMiwbAAAAAHcOJZSWdPW10IJq-IkF6rLQyjKu'
var Cooldown = 3
$(document).ready(function () {
  deleteCookie(COOKIE_NAME)
  deleteCookie(COOKIE_NAME_CAPTCHA)
  UAMMesaj.innerText = 'Tarayıcınız kontrol ediliyor...'
})
var onSubmit = async function (_0x517a42) {
  if (_0x517a42 != null) {
    const _0x1bad69 = await encrypt(_0x517a42, PRIV_KEY)
    var _0x182ea9 = { captcha: _0x517a42 }
    var _0x99923b = _0x182ea9
    $.ajax({
      type: 'POST',
      url: 'https://ddosarmor.net/reCaptcha',
      data: _0x99923b,
      dataType: 'json',
      encode: true,
      error: function (_0x5ebeb2, _0x35cd66, _0x45d164) {
        ErrorMsg('Tarayıcınız doğrulanırken hata oluştu: ' + _0x5ebeb2.status)
      },
      success: function (_0x27285b, _0x4d9e04, _0x344bc7) {
        console.log(_0x27285b)
        if (_0x27285b.success) {
          UAMMesaj.innerText =
            'Tarayıcınız kontrol ediliyor, ' + Cooldown + 'sn...'
          var _0x48d318 = setInterval(() => {
            Cooldown = Cooldown - 1
            UAMMesaj.innerText =
              'Tarayıcınız kontrol ediliyor, ' + Cooldown + 'sn...'
            if (Cooldown <= 0) {
              clearInterval(_0x48d318)
              var _0x51e130 = new Date(),
                _0x238621 = _0x51e130.getTime()
              _0x238621 += 3600000
              _0x51e130.setTime(_0x238621)
              var _0x4947ed = $('#DDoSArmorUAMToken').attr('value')
              document.cookie =
                COOKIE_NAME +
                '=' +
                _0x4947ed +
                '; expires=' +
                _0x51e130.toGMTString() +
                '; path=/'
              document.cookie =
                COOKIE_NAME_CAPTCHA +
                '=' +
                _0x1bad69 +
                '; expires=' +
                _0x51e130.toGMTString() +
                '; path=/'
              if (
                getCookie(COOKIE_NAME) &&
                getCookie(COOKIE_NAME_CAPTCHA) &&
                screen.width != null &&
                screen.height != null
              ) {
                SuccessMsg('Kontrol başarılı, yönlendiriliyorsunuz!')
                setTimeout(() => {
                  location.reload()
                }, 1000)
              } else {
                deleteCookie(COOKIE_NAME)
                deleteCookie(COOKIE_NAME_CAPTCHA)
                ErrorMsg(
                  'Tarayıcınız doğrulanamadı, çerezleri temizleyip tekrar deneyiniz!'
                )
              }
            }
          }, 1000)
        } else {
          ErrorMsg('Robot olarak algılandınız!')
        }
      },
    })
  }
}
function SuccessMsg(_0x325604) {
  UAMStatusIcon.innerHTML =
    '<i style="width: 75px; height: 75px;" class="fas fa-check-circle"></i>'
  UAMStatusIcon.style.color = 'green'
  UAMMesaj.innerText = _0x325604
}
function ErrorMsg(_0x3478d1) {
  UAMStatusIcon.innerHTML =
    '<i style="width: 75px; height: 75px;" class="fas fa-exclamation-circle"></i>'
  UAMStatusIcon.style.color = '#B00020'
  UAMMesaj.innerText = _0x3478d1
}
function DetectionTests() {
  if (/HeadlessChrome/.test(navigator.userAgent)) {
    return false
  }
  if (navigator.webdriver) {
    return false
  }
  if (!isIOS()) {
    if (!window.chrome) {
      return false
    }
    ;(async () => {
      var _0x5b48b6 = { name: 'notifications' }
      const _0xe2b504 = await navigator.permissions.query(_0x5b48b6)
      if (
        Notification.permission === 'denied' &&
        _0xe2b504.state === 'prompt'
      ) {
        return false
      }
    })()
  }
  if (!window.mobileCheck) {
    if (navigator.plugins.length === 0) {
      return false
    }
  }
  if (!navigator.languages || navigator.languages.length === 0) {
    return false
  }
  return true
}
function isIOS() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  )
}
window.mobileCheck = function () {
  let _0x88ba24 = false
  return (
    (function (_0x370403) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          _0x370403
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          _0x370403.substr(0, 4)
        )
      ) {
        _0x88ba24 = true
      }
    })(navigator.userAgent || navigator.vendor || window.opera),
    _0x88ba24
  )
}
var onloadCallback = function () {
  var _0x5b1e75 = {
    sitekey: SITE_KEY,
    callback: onSubmit,
  }
  grecaptcha.render('gRecaptcha', _0x5b1e75)
  grecaptcha.execute()
}
function deleteCookie(_0x33a1ff) {
  document.cookie =
    _0x33a1ff + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
function getCookie(_0x639467) {
  var _0x11570b = document.cookie,
    _0x174613 = _0x639467 + '='
  var _0x497893 = _0x11570b.indexOf('; ' + _0x174613)
  if (_0x497893 == -1) {
    _0x497893 = _0x11570b.indexOf(_0x174613)
    if (_0x497893 != 0) {
      return null
    }
  } else {
    _0x497893 += 2
    var _0x211cb0 = document.cookie.indexOf(';', _0x497893)
    if (_0x211cb0 == -1) {
      _0x211cb0 = _0x11570b.length
    }
  }
  return decodeURI(_0x11570b.substring(_0x497893 + _0x174613.length, _0x211cb0))
}
function _0x195faf(_0x42e692) {
  function _0x3acb83(_0x5c83f6) {
    if (typeof _0x5c83f6 === 'string') {
      return function (_0x186e4d) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x5c83f6 / _0x5c83f6).length !== 1 || _0x5c83f6 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x3acb83(++_0x5c83f6)
  }
  try {
    if (_0x42e692) {
      return _0x3acb83
    } else {
      _0x3acb83(0)
    }
  } catch (_0x96a6ed) {}
}
