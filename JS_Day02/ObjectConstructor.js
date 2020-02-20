
var car1 = {
    brand : "Mercides",
    mileage : 123450,
    year : 2020
};

var car2 = {
    brand : "Toyota",
    mileage : 150000,
    year : 2020
};

function car(brand, mileage, year){
    this.brand = brand;  // this refer to the object constructor
    this.mileage = mileage;
    this.year = year;
};


var car3 = new car("Dodge", 130000, 2020);
console.log(car3);

function Employee(Name, ID, SSN, Salary){
    this.Name = Name;
    this.ID = ID;
    this.SSN = SSN;
    this.Salary = Salary;
}

var employeeErhan = new Employee("ErhanHoly", 7 , "123-123-456", 850000);
var employeeSumeyye = new Employee("Sumeyye", 8 , "123-123-458", 100000);
console.log(employeeErhan);
console.log(employeeSumeyye);

console.log(employeeSumeyye["Name"]);
console.log(employeeErhan["Name"]);
