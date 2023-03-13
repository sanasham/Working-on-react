//charAt()
var str = 'Hello World';
console.log(str.charAt(1));

//concatenate

var str1 = 'Hello';
var str2 = 'world';
console.log(str1.concat(' ').concat(str2));

//indexOf()

var str3 =
  "Lorem 'ipsum' dolor sit amet consectetur adipisicing elit. Saepe ex porro";
console.log(str3.indexOf('sit'));
console.log(str3.indexOf('amet'));
console.log(str3.indexOf('con'));

//lastIndexOf()

var str4 =
  'Lorem ipsum dolor ipsum sit amet consectetur adipisicing elit. Ea, consequatur?';
console.log(str4.lastIndexOf('dolor'));
console.log(str4.lastIndexOf('ipsum')); //last occurence of ipsum

// replace()
var str5 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consequ';
var str6 = 'esub vali sayyed';
console.log(
  str5.replace('Lorem ipsum dolor sit amet consectetur adipis', 'my name is')
);

//search()

var str7 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, con';
console.log(str7.search('sit'));

//slice()
var str8 = 'Lorem ipsum dolor sit';
console.log(str8.slice(4, 8));

//substring()
var str9 = 'Lorem ipsum dolor sit';
console.log(str9.substring(4, 8));
