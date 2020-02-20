/*
concat()
toLowerCase()
toUpperCase()
trim()
indexOf()
substring()
startsWith()
endsWith()
CharAt()
length()

*/

var str = "    Cybertek";
str = str.concat(" School");
console.log(str);

str = str.trim();
console.log(str);

console.log(str.startsWith('Z'));

console.log( str.substring(1,3)); //ending index is excluded
console.log(str.substring(0));

console.log(str.charAt(2));

console.log(str.length);