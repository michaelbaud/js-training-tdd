'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')

//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(typeof jadenCase, 'function', 'Should be a function')
assert.strictEqual(jadenCase.length, 1, 'Should takes 1 argument')
assert.strictEqual(jadenCase('super green'), 'Super Green')
// End of tests */
