const _0x553373 = (function () {
    let _0x5d425e = true
    return function (_0x50ddd0, _0x5b4c03) {
      const _0x51131b = _0x5d425e
        ? function () {
            if (_0x5b4c03) {
              const _0xd2be0c = _0x5b4c03.apply(_0x50ddd0, arguments)
              return (_0x5b4c03 = null), _0xd2be0c
            }
          }
        : function () {}
      return (_0x5d425e = false), _0x51131b
    }
  })(),
  _0x357c79 = _0x553373(this, function () {
    return _0x357c79
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x357c79)
      .search('(((.+)+)+)+$')
  })
_0x357c79()
const _0x245d69 = (function () {
  let _0x14f25d = true
  return function (_0x112054, _0x1ecb53) {
    const _0x887357 = _0x14f25d
      ? function () {
          if (_0x1ecb53) {
            const _0x3d4e73 = _0x1ecb53.apply(_0x112054, arguments)
            return (_0x1ecb53 = null), _0x3d4e73
          }
        }
      : function () {}
    return (_0x14f25d = false), _0x887357
  }
})()
const _0x5dc6dc = _0x245d69(this, function () {
  const _0x240256 = function () {
      let _0x14a319
      try {
        _0x14a319 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x46a8c1) {
        _0x14a319 = window
      }
      return _0x14a319
    },
    _0x3594d = _0x240256()
  const _0x1d2638 = (_0x3594d.console = _0x3594d.console || {}),
    _0x142c6d = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (let _0x474d76 = 0; _0x474d76 < _0x142c6d.length; _0x474d76++) {
    const _0x3e8126 = _0x245d69.constructor.prototype.bind(_0x245d69),
      _0x2ad2fe = _0x142c6d[_0x474d76],
      _0x25c9d9 = _0x1d2638[_0x2ad2fe] || _0x3e8126
    _0x3e8126['__proto__'] = _0x245d69.bind(_0x245d69)
    _0x3e8126.toString = _0x25c9d9.toString.bind(_0x25c9d9)
    _0x1d2638[_0x2ad2fe] = _0x3e8126
  }
})
_0x5dc6dc()
var PRIV_KEY = atob('ZGRhcm1vcmlzYmVzdA==')
const buff_to_base64 = (_0x1dbf55) =>
    btoa(String.fromCharCode.apply(null, _0x1dbf55)),
  base64_to_buf = (_0x1b1ae0) =>
    Uint8Array.from(atob(_0x1b1ae0), (_0x5e8a62) => _0x5e8a62.charCodeAt(null))
const enc = new TextEncoder()
async function encrypt(_0x316235, _0x9d27a1) {
  const _0x4fc781 = await encryptData(_0x316235, _0x9d27a1)
  return _0x4fc781
}
const getPasswordKey = (_0x1dba4c) =>
  window.crypto.subtle.importKey(
    'raw',
    enc.encode(_0x1dba4c),
    'PBKDF2',
    false,
    ['deriveKey']
  )
const _0x55683a = {}
_0x55683a.name = 'AES-GCM'
_0x55683a.length = 256
const deriveKey = (_0x175838, _0x321722, _0x3d108d) =>
  window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: _0x321722,
      iterations: 1500,
      hash: 'SHA-256',
    },
    _0x175838,
    _0x55683a,
    false,
    _0x3d108d
  )
async function encryptData(_0x3370ce, _0x45eb89) {
  try {
    const _0x2f9ece = window.crypto.getRandomValues(new Uint8Array(16)),
      _0x766c8d = window.crypto.getRandomValues(new Uint8Array(12)),
      _0x38de55 = await getPasswordKey(_0x45eb89),
      _0x268a82 = await deriveKey(_0x38de55, _0x2f9ece, ['encrypt']),
      _0x170eab = {
        name: 'AES-GCM',
        iv: _0x766c8d,
      }
    const _0x4a3b1c = await window.crypto.subtle.encrypt(
        _0x170eab,
        _0x268a82,
        enc.encode(_0x3370ce)
      ),
      _0x39a128 = new Uint8Array(_0x4a3b1c)
    let _0x226061 = new Uint8Array(
      _0x2f9ece.byteLength + _0x766c8d.byteLength + _0x39a128.byteLength
    )
    _0x226061.set(_0x2f9ece, 0)
    _0x226061.set(_0x766c8d, _0x2f9ece.byteLength)
    _0x226061.set(_0x39a128, _0x2f9ece.byteLength + _0x766c8d.byteLength)
    const _0x3de7e9 = buff_to_base64(_0x226061)
    return _0x3de7e9
  } catch (_0x1d7ca1) {
    return console.log('Error - ' + _0x1d7ca1), ''
  }
}
