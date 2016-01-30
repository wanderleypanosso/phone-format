# Phone Format

International standard Phone Number formatter. 

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build][travis-image]][travis-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
const phoneFormat = require('phone-format');

let numbers = [
        '01511999999999',
        '88888-8888',
        '(35)8888-8888',
        '(021)7777-7777',
    ];
    
let formatted = phoneFormat.normalizeArraySync(numbers);

console.log(formatted);

```

## Installation

```bash
$ npm install phone-formatter
```

## Features

Normalizes phone numbers to the international standard. Supported international formats:
  * +55 (Brazil).
    * (DD) 99999-9999
    * (0DD) 99999-9999
    * (0XXDD) 99999-9999
    * Supports 8 and 9 digits long phone numbers
    * Skips all non-numeric digits
    * Numbers started with (+) are not adjusted (special chars are dropped)
    * Formatted version follows the pattern: +55DD999999999

## Usage

  Install the package:

```bash
$ npm install phone-format --save
```

  Require the package:

```js
const phoneFormatter = require('phone-format');
```

## Documentation

### normalizeArraySync()

  * Parameters
    * Phone Number(s) : (Required). Accepts an Array of Phone Number strings,
    * DDI: (Default: `'55'`). Specifies which formatting rule to be used (Only support +55 for now)
    * DDD: (Default: `'11'`). Specifies the default Area Code, if not present.
  
  * Returns
    * Array of objects as bellow:
      
```js
[
    {
        formattedNumber: '01511999999999',
        originalNumber: '+5511999999999'
    },
    {
        formattedNumber: '88888-8888',
        originalNumber: '+5511888888888'
    },
    {
        formattedNumber: '(35)7777-7777',
        originalNumber: '+553577777777'
    },
    {
        formattedNumber: '(021)6666-6666',
        originalNumber: '+552166666666'
    }
]
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/phone-format.svg
[npm-url]: https://npmjs.org/package/phone-format
[downloads-image]: https://img.shields.io/npm/dm/phone-format.svg
[downloads-url]: https://npmjs.org/package/phone-format
[travis-image]: https://img.shields.io/travis/wanderleypanosso/phone-format/master.svg
[travis-url]: https://travis-ci.org/wanderleypanosso/phone-format
[coveralls-image]: https://img.shields.io/coveralls/wanderleypanosso/phone-format/master.svg
[coveralls-url]: https://coveralls.io/r/wanderleypanosso/phone-format?branch=master
