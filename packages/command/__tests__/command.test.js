'use strict';

const command = require('..');
const assert = require('assert').strict;

assert.strictEqual(command(), 'Hello from command');
console.info('command tests passed');
