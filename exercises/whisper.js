'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = str => str.toLowerCase()

//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper('FOO'), 'foo')
assert.strictEqual(whisper('BAR'), 'bar')
// End of tests */
