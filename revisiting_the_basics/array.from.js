/**
 * Array.from() more than just [...arr] in disguise
 */

// Use 'Array-like' object as input 
const like = { length: 3 };
const emptyArray = Array.from(like);
// emptyArray => [undefined, undefined, undefined]

// Initialize the array using the index
// Well known way: Use map() on the created array
const mapPost = Array.from(like).map((_, idx) => idx);
// ❌ creates unnecessary array before mapping

// Better way: map using from()'s second argument => a mapping function
const mapDuring = Array.from(like, (_, idx) => idx);
// ✅ no temporary array

// Example, why to use the second approach
const input = [300, 400];

// create a new Uint8Array from input with all values divided by 2
const overflowed = Uint8Array.from(input).map(x => x / 2); 
// overflowed => [22, 72]
// not [150, 200] as expected, because of overflow in temporary array

const noCutOff = Uint8Array.from(input, x => x / 2);
// noCutOff => [150, 200], result as expected
