/*
methods in java:
access-modifier  specifier returnType methodName(parameter(s)){
    statements;
}

functions:
    functions functionName(parameter(s)){
        statement
    }

*/

function addnums(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
function addnums2 (num1, num2, num3){
    let result = num1+num2+num3;
    console.log(result);
}

addnums(10,20);  //30
addnums2(10,20,30); //60

// return functions

function MultiplyTwoNums(num1, num2){
    let result = num1*num2;
    return result;
}
console.log(MultiplyTwoNums(10,20));

function concatTwoWords(str1, str2){
    return str1+" "+str2;
}

var str = concatTwoWords("Cybertek", "School");
console.log(str);