# insertion-index [![Build Status](https://travis-ci.org/aslafy-z/insertion-index.svg?branch=master)](https://travis-ci.org/aslafy-z/insertion-index) [![Coverage Status](https://coveralls.io/repos/aslafy-z/insertion-index/badge.svg?branch=master&service=github)](https://coveralls.io/github/aslafy-z/insertion-index?branch=master) [![Dependency Status](https://david-dm.org/aslafy-z/insertion-index.svg)](https://david-dm.org/aslafy-z/insertion-index)

Get insertion index for item in array.

## Installation

```sh
npm install --save insertion-index
```

## Usage

```js
const insertionIndex = require('insertion-index');

const array = [1, 2, 3, 5];
const item = 4;
const compareNb = (i, j) => i < j;

const index = insertionIndex(array, item, compareNb);
// => 3

array.splice(index, 0, item);
// => [1, 2, 3, 4, 5]
```

## TODO

- [ ] add more tests

## Thanks

All thanks goes to [@Izhaki](https://github.com/Izhaki) for [his gist](https://gist.github.com/Izhaki/834a9d37d1ad34c6179b6a16e670b526) itself based on [@primaryobjects](https://github.com/primaryobjects)'s [one](https://gist.github.com/primaryobjects/117017f85769124c28c858f8735f27d8).
