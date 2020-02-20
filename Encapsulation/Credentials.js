class Credentials{

username = "cybertek";
password = "cybertek123";

get getUserName(){
    return this.username
}

set setUserName(username){
    this.username = username;
}

get getPassWord(){
    return this.password;
}

set setPAssWord(password){
    this.password = password;
}

}

var obj = new Credentials();
console.log(obj.getUserName);      //getter

obj.setUserName = "UserName123";   //setter
console.log(obj.getUserName);      //getter 

console.log(obj.getPassWord);

obj.setPAssWord = "PassWord123";
console.log(obj.getPassWord);