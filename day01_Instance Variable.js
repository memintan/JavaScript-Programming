class TestData{
    static str = "Cybertek";

    username = "cybertek123";

}



//static variables
console.log(TestData.str);

var name1 = TestData.str;
console.log(name1);

//instance variables
var obj = new TestData();
obj.username = "username123";
console.log(obj.username);

var obj2 = new TestData;
console.log(obj2.username);

obj2.username = "Hakan123";
console.log(obj2.username);