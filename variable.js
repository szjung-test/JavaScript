// 1. Use strict
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3.Constants
// 값을 변경할 수 없음
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
const count = 17;
const size = 17.1;
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type:${typeof size}');

// number - specila numeric values: infinity, -infinity, 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet)
const bigInt = 12323456432346754321n;
console.log('value: ${bigInt}, type: ${typeof bigInt}');

//string
const char = 'c';

// boolean
// false: 0,null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log('value: ${canRead}, type:${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');

// null
let nothing = null;
console.log('value: ${nothing}, type:${typeof nothing}');

//undefined
let x;
console.log('value: ${x}, type: ${typeof x}');

