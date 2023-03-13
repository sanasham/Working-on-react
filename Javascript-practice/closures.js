// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// let m = x();
// console.log(m);
// m();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     console.log('start: ', i);
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       // put the setT function inside new function close()
//     }
//     console.log('inside: ', i);
//     close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log('test: ', i);
//   console.log('Namaste Javascript');
// }
// x();

// const radius = [2, 4, 5, 6];

// const area = function (val){
//  return Math.PI *
// }

// const calculateArea = function (val) {
//   const output = [];
//   for (let i = 0; i < val.length; i++) {
//     output.push(Math.PI * val[i] * val[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// const calculateCircumfarance = function (val) {
//   const output = [];
//   for (let i = 0; i < val.length; i++) {
//     output.push(2 * Math.PI * val[i]);
//   }
//   return output;
// };
// console.log(calculateCircumfarance(radius));

// const calculateCDiameter = function (val) {
//   const output = [];
//   for (let i = 0; i < val.length; i++) {
//     output.push(2 * val[i]);
//   }
//   return output;
// };
// console.log(calculateCDiameter(radius));

const myValues = [1, 2, 3, 4, 5, 5, 1, 5, 4];

const double = (x) => x * x;

let first = myValues.map(double);
console.log(first);

/// remove doplicate values

console.log('using set ', [...new Set(myValues)]);

function removeDuplicates(arr) {
  let output = [];
  arr.map((x) => {
    !output.includes(x) && output.push(x);
  });
  return output;
}

console.log('using function', removeDuplicates(myValues));

// using reduce fuction remove duplicates

function removeDuplicatesUsingReduce(arr) {
  let unique = [];
  arr.reduce((acc, current) => {
    !unique.includes(current) && unique.push(current);
  }, []);
  return unique;
}

console.log('using reduce function', removeDuplicatesUsingReduce(myValues));

// number of times occurs

function numberOfTimesOccurs(arr) {
  let unique = {};
  arr.reduce((acc, current) => {
    let key1 = current.toString();
    // unique[key] = ++current || 1;
    // if (key1 in unique) {
    //   unique[key1] = unique[key1] + 1;
    // } else {
    //   unique[key1] = 1;
    // }
    key1 in unique ? (unique[key1] = unique[key1] + 1) : (unique[key1] = 1);
  }, []);
  return unique;
}

console.log(
  'using numberOfTimesOccurs function',
  numberOfTimesOccurs(myValues)
);

const myName = 'namaste eusbvali sayyed';

const splited = myName.split('').filter((x) => x != ' ');
function stringCount(arr) {
  let output = {};
  arr.map((x) => {
    let key1 = x.toString();
    if (key1 in output) {
      output[key1] = output[key1] + 1;
    } else {
      output[key1] = 1;
    }
  });
  return output;
}

// let output = [];
// if (!x != null) {
//   output.push(x);
// }
// return output;
// })
// console.log('splited :', splited);
// console.log(splited.filter((x) => x != ' '));

console.log(' splited function calling : ', stringCount(splited));

const users = [
  { firstName: 'Alok', lastName: 'Raj', age: 23 },
  { firstName: 'Ashish', lastName: 'Kumar', age: 29 },
  { firstName: 'Ankit', lastName: 'Roy', age: 29 },
  { firstName: 'Pranav', lastName: 'Mukherjee', age: 50 },
];

console.log(users.filter((x) => x.age > 30).map((x) => x.firstName));

/// fuction currying

let multiply = function (x, y) {
  return;
};

// call , apply , bind

let name = {
  firstName: 'esub vali',
  lastName: 'sayyed',
  printFullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: 'Diya shamreen',
  lastName: 'sayyed',
};

/// using call method we can do function barrowing
//we can barrow functions from other objects

name.printFullName.call(name2);

// sum(1)(2)(3)(4)

// let sum = function (x) {
//   return function (y) {
//     return function (z) {
//       return function (a) {
//         console.log(x + y + z + a);
//       };
//     };
//   };
// };

let sum = (x) => (y) => (z) => (a) => console.log(x + y + z + a);

sum(1)(2)(3)(4);

// prototype chain

let object1 = {
  firstName: 'Diya shamreen',
  lastName: 'sayyed',
};

object1.__proto__ === object1.prototype;
object1.__proto__.__proto__ === null;

stringCount.__proto__ === Function.prototype;
stringCount.__proto__.__proto__ === Object.prototype;

myValues.__proto__ === Array.prototype;
myValues.__proto__.__proto__ === Object.prototype;
