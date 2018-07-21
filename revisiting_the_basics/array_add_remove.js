/**
 * Add/remove entries at the head and tail of arrays
 */

// Let's say you've got an array like that:
const array = [1, 2, 3, 4, 5];

// remove (and save) last element
const poppedItem = array.pop();
// poppedItem => 5
// array => [1, 2, 3, 4]

// remove (and save) first element
const shiftedOut = array.shift();
// shiftedOut => 1
// array => [2, 3, 4]

// add element(s) to head of array
const lengthAfterUnshift = array.unshift(10, 9);
// lengthAfterUnshift = 5
// array => [10, 9, 2, 3, 4]

// add element(s) to head of array
const lengthAfterPush = array.push(99, 100);
// lengthAfterPush => 7
// array => [10, 9, 2, 3, 4]

// @snippet_js
