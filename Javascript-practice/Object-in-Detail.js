// in javascript every thing is object

// 1) What is Object

//it is collection of similar or related data or related functionality
//we can create with key and value pair
// inside an object differnt type of data we can store

//2) two ways to create an object
let user = {
  name: 'sayyed',
  age: 38,
  getData: function () {
    return 'data received';
  },
  inner: {
    name: 'inner man',
    age: 54,
  },
  getCity: function () {
    return this.city;
  },
};
// const member = new Object();

// user.name = 'vali';
// member.name = 'sayyed';

user.city = 'vijayawada';
console.log(user);
console.log(user.getData());
console.log(user.inner.name);
console.log(delete user.inner);
console.log(user);
console.log(user.getCity());

// Interview Questions on Object
// How to make Object
// Function inside object
// Add Property in Object
// Update Property in Object
// Delete Property in Object
// Tricks with Object
// Short Hand Property in Object
// Check object values
// Loop with Object
// Sum of Object Value (A logical Question)
// insta: code.steps

console.log('===========================');

let str = 'hello world how are you';
console.log(str.split());
console.log([str]);
console.log([...str]);
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('a'));
console.log(str.replace(/h/i, 'H'));
//and
console.log(str.replace('h', 'H'));
console.log(str.replace(/h/g, 'H'));
console.log(str.substring(4, 8));
console.log(str.substring(1, str.length));
console.log(str.substring(0, str.length - 1));
let temp = str.split('o');
console.log(temp);
console.log(temp[0]);
console.log('=========');
console.log(str.split('').reverse().join(''));
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

// Array

let data = [4, 7, 1, 4, 9, 2, 4, 1];
console.warn(data);
//data.length = 4;
console.warn(data);
let sum = data.reduce((acc, x) => (acc += x), 4);
console.log(sum);
let unique = new Set(data);
console.log([...unique]);

//comma operator
// it print the second parameter
let x = 10;
let output = (x++, x);
console.log(output);
let output1 = (x++, 5);
console.log(output1);
let y = 40;
let output2 = (x++, y);
console.log(output2);

/// swaping

let x1 = 20,
  y1 = 30;
console.log([x1, y1]);

[x1, y1] = [y1, x1];

console.log([x1, y1]);

//Nullish Coalescing Operator

let users = {
  student: {
    name: '',
    age: 0,
  },
};
// console.log(users.student.name || 'unknown');
// console.log(users.student.age || '21');

// bool, empty -- it wont check these
// undefined, null   ---use ??
console.log(users.student.name ?? 'unknown');
console.log(users.student.age ?? '21');

//1
(function () {
  var C = (D = 3);
})();
console.log(typeof C);
console.log(typeof D);

//2

function foo() {
  return {
    name: 'sayyed',
  };
}
console.log(foo());

//3
console.log(1 + 1);
console.log(1 + '2' + '2'); //122
console.log(1 + +'2' + '2'); //32
console.log(1 + +'2' + +'2'); //5
console.log(1 + -'1' + '2'); //02
console.log('A' - 'B' + '2'); //NAN2 , as we can not do math opetions on strings
console.log('A' - 'B' + 2); //NAN

//4
console.log('---------------------');
var z = 0;
function testfun() {
  z = 10;
  return;
  var z = function () {
    return 10;
  };
  console.log(z);
}
testfun();
console.log(z); //0
