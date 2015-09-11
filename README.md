# [catchup][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Graceful error handling. Because core [domain](https://nodejs.org/api/domain.html) module is deprecated. Shares almost the same API.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i catchup --save
```


## Usage
> For more use-cases see the [tests](./test.js)


```js
var fs = require('fs')
var domain = require('catchup').create()

domain.once('error', function (err) {
  console.log('central error handling, ftw!', err)
})
domain.run(function () {
  fs.createReadStream('not_existing_file')
})
```


## Related
- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks, thunks, generators, promises, observables, child processes and streams. Can power applications that need to have plugins. Useful for creating task, test and bench runners.
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [hybridify](https://github.com/hybridables/hybridify): Building hybrid APIs. You can use both callback and promise in same time.  Like `asyncFn(name, cb).then().catch()`
- [is-emitter](https://github.com/tunnckocore/is-emitter): Check that given value is EventEmitter, not so strict as `is-node-emitter`.
- [merz](https://github.com/tunnckocore/merz): Wrapper to handle completion and errors of sync and async functions, promises, generators, streams, observables and child processes.
- [vez](https://github.com/tunnckocore/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`, `koa-compose` and `composition` packages. Allows you to use callbacks, promises, generators and async/await functions as middlewares.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/catchup/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/catchup
[npmjs-img]: https://img.shields.io/npm/v/catchup.svg?label=catchup

[license-url]: https://github.com/tunnckoCore/catchup/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/catchup
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/catchup.svg

[travis-url]: https://travis-ci.org/tunnckoCore/catchup
[travis-img]: https://img.shields.io/travis/tunnckoCore/catchup.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/catchup
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/catchup.svg

[david-url]: https://david-dm.org/tunnckoCore/catchup
[david-img]: https://img.shields.io/david/tunnckoCore/catchup.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg