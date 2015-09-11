/*!
 * catchup <https://github.com/tunnckoCore/catchup>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var catchup = require('./index')
var Catchup = require('./index').Catchup

test('should handle basic errors', function (done) {
  var domain = new Catchup()
  domain.once('error', function (err) {
    test.ifError(!err)
    test.ok(err instanceof Error)
    test.equal(err.message, 'foo bar')
    test.equal(domain.errored, true)
    done()
  })
  domain.run(function () {
    throw new Error('foo bar')
  })
})

test('should handle ENOENT errors', function (done) {
  var domain = catchup()
  domain.once('error', function (err) {
    test.ok(err instanceof Error)
    test.equal(err.code, 'ENOENT')
    test.equal(domain.errored, true)
    done()
  })
  domain.run(function () {
    fs.createReadStream('foo bar')
  })
})

test('should have static `.create` method', function (done) {
  var domain = Catchup.create()
  var res = domain.run(function () {
    return 'foo bar baz qux'
  })
  test.equal(res, 'foo bar baz qux')
  test.equal(domain.errored, false)
  done()
})
