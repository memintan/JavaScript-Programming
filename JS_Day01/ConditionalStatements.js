/*
if statement: 100% same with java

ternary : 100% same with java

switch statement : 85% same with java

*/

if (9>10){
    console.log("Hello");
}else if(11>12){
    console.log("Nihao");
}else{
    console.log("hola");
}

var str = (9>10) ? "Hello": (11>12) ? "Nihao" : "Hola";
console.log(str);

//boolean, decimals, long java does not accept in switch statement

var bool = true;
switch (bool){  // accepts any data type
    case true:
        console.log("true");
        break;
        case false:
            console.log("False");
            break;
            default:
                console.log("Maybe");
}