# quse
Bored of typing "document.querySelector()" ? use quse : continue

## Installation

`npm i quse --save`

## Usage
```javascript

const QUSE = require('quse');
const _q = QUSE.qs;
const _qa = QUSE.qsa;

// _q stands for querySelector
// It gets one instance of any HTML object using selectors
let obj = _q('#content');

// _qa stands for querySelectorAll
// It gets multiple instances of any HTML objects using selectors
let objects = _qa('.mansnothot');

```

## Why?

1) Why not
2) Save time
