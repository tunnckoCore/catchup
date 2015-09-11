/*!
 * catchup <https://github.com/tunnckoCore/catchup>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var Dual = require('dual-emitter')

function Catchup () {
  if (!(this instanceof Catchup)) {
    return new Catchup()
  }
  Dual.call(this)
  this.errored = false
  process.once('newListener', function (name) {
    this.removeAllListeners(name)
  })
}
Dual.extend(Catchup)

Catchup.create = function () {
  return new Catchup()
}

Catchup.prototype.run = function (fn) {
  var ret = null

  try {
    ret = fn.apply(this, arguments)
  } catch (err) {
    this.errored = true
    return this.emit('error', err)
  }

  process.once('uncaughtException', function onError (err) {
    this.errored = true
    this.emit('error', err)
  }.bind(this))

  return ret
}

/**
 * Expose `Catchtup`
 */

module.exports = Catchup
module.exports.Catchup = Catchup

