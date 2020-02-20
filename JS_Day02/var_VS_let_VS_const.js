/*
var vs let vs const:
var vs let:
var: variable name dost not have to be unique
var: var variable can never be local variable. var is global variable, even if we declare we declare it out ide the block, we can still use it outside the block
let: variable name must be unique
let : let can be local variable. if it declared within block we can not access it outside the block

const: final variable 
*/

var a = 100;
var a = "Muhtar";
console.log(a);

let b = "Marufjon";
//let b = "Cybertek";
console.log(b);

console.log("=============================================");
if (true ){
   // let i = 100;
}
//console.log(i); // var can never be local variable 

for (let z =0; z>=9; z++){

}
//console.log(z);

console.log("=============================================");
const gender = "Female";
//gender = "Male";  constant variable can not be change 
console.log(gender);

