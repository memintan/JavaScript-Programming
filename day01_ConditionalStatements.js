/*
if(condition){
    statement;
}else{

}

if (condition1){
    statement1:
}else if(condition2){
    statement2
}else{
    statement3
}

*/
var num = 10;

if (num<9){
    console.log(num + "less than 9");
}else{
    console.log(num + "greater than 9");
}

var str = "Muhtar";
if(str.startsWith("J")){
    console.log(str + " starts with J");
}else if (str.startsWith("M")){
    console.log(str +" starts with M");
}else{
    console.log(str + " starts with something");
}

/*
in java : the expression cannot be boolean, double, float, long
switch(expression){
    case value:
        statement;
        break;

        case value :
            statement;
            break;
}
*/

var num = 8.5;
switch(num){
    case 5.5:
        console.log("number is 5.5");
        break;

    case 8.5:
        console.log("number is 8.5");
        break;
    default:
        console.log("unknown nnumber");
}

var num = false;
switch(num){
    case true:
        console.log("number is true");
        break;

    case false:
        console.log("number is false");
        break;

    default:
        console.log("Unknown number");

}

/*
if & else : condition ? statement : statement

*/

var number = false ? 15 : 20;
console.log(number);

var n1 = 0;
if (8>9){
    n1 = 8;
}else if(8===9){
    n1 = 9;
}else{
    n1 = 0
}

console.log(n1);

var n2 = (8>9) ? 8 : (8===9) ? 9 : 0;

console.log(n2);
