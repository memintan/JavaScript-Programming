
class TestBase{
    static username = "cybertek";
    static password ="cybertek12345";

    static LogIn(){      
            console.log("Logged In");
        }
    
    }

    module.exports = TestBase;


    class Test1 extends TestBase{

}
/*
console.log(TestBase.username);
console.log(Test1.username);

TestBase.LogIn();
Test1.LogIn();
*/


