/*
java:
Access-modifier specifier 
*/


function addTwoNum(num1,num2){
    console.log(num1+num2);
}

addTwoNum (10, 20)

function reverseStr(str){
    if (typeof str =="string"){
    var result ="";
    for ( var i = str.length-1; i>=0; i--){
        result = result.concat(str.charAt(i));
    }
    console.log(result);
    }else{
        console.log("No string is given");
    }
}

reverseStr(123)

// typeof

var num1 = '$';
console.log(typeof num1);


console.log("=======================");

function MultiplyTwoNum(num1, num2){
    var result = num1*num2;
    return result;
}
var total = MultiplyTwoNum(10, 20);
console.log(total);