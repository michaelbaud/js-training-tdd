'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = str => str.substring(2)
const cutLast = str => str.slice(0, -2)
const cutFirstLast = str => str.substring(2).slice(0, -2)

//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutFirst('SuperGreen'), 'perGreen')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutLast('SuperGreen'), 'SuperGre')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirstLast('SuperGreen'), 'perGre')
// End of tests */
