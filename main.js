var myNum = 10;
var myStr = 'строка';
myBool = true;
myArr = [1, 2, 3, 4];
myObj = {
  first: 'First Name',
  last: 'Last Name'
};

var decimal2 = myNum.toFixed(2);
console.log(decimal2);


var i = 10;
console.log(++i);
console.log(--i);
console.log(i++);
console.log(i--);


var myTest = 20;
myTest += 10;
console.log(myTest);
myTest -= 10;
console.log(myTest);
myTest *= 10;
console.log(myTest);
myTest /= 10;
console.log(myTest);
myTest %= 10;
console.log(myTest);


var myPi = Math.PI;
console.log(myPi);
var myRound = Math.round(89.279);
console.log(myRound);
var myRandom = Math.round(Math.random() * 10);
console.log(myRandom);
var myPow = Math.pow(3,5);
console.log(myPow);


var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
};
strObj.length = strObj.str.length;
console.log(strObj.length);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log(strReplace);

console.log(strReplace.toUpperCase());
console.log(strObj.str.toLowerCase());
