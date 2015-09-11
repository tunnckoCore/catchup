/*!
 * catchup <https://github.com/tunnckoCore/catchup>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var util = require('util')
var Emitter = require('component-emitter')

/**
 * Singleton `Catchup` constructor.
 */

function Catchup () {
  if (!(this instanceof Catchup)) {
    return new Catchup()
  }
  Emitter.call(this)
  this.errored = false
  process.once('newListener', function (name) {
    this.removeAllListeners(name)
  })
}

util.inherits(Catchup, Emitter)

Catchup.create = function () {
  return new Catchup()
}

/**
 * Function to run and handle thrown errors from it.
 *
 * @name  run
 * @param  {Function} `fn`
 * @return {Mixed} any value that is returned from it
 * @api public
 */

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
 * Expose `Catchtup`.
 */

module.exports = Catchup
module.exports.Catchup = Catchup

