'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = str => str.slice(0, 2)
const keepLast = str => str.slice(-2)
const keepFirstLast = str => keepFirst(str) + keepLast(str)

//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof keepFirst, 'function', 'Should be a function')
assert.strictEqual(keepFirst.length, 1, 'Should takes 1 argument')
assert.strictEqual(keepFirst('SuperGreen'), 'Su')

assert.strictEqual(typeof keepLast, 'function', 'Should be a function')
assert.strictEqual(keepLast.length, 1, 'Should takes 1 argument')
assert.strictEqual(keepLast('SuperGreen'), 'en')

assert.strictEqual(typeof keepFirstLast, 'function', 'Should be a funtion')
assert.strictEqual(keepFirstLast.length, 1, 'Should takes 1 argument')
assert.strictEqual(keepFirstLast('SuperGreen'), 'Suen')
// End of tests */
