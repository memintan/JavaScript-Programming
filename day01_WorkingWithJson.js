var testData = require("../JavaScript Programming/TestData/Data.json");

console.log(testData.Name);
console.log(testData.ID);

var students = require("../JavaScript Programming/TestData/Students.json");

console.log(students.Erhan);
console.log(students.Nurzat);
console.log(students["Erhan"]);
console.log(students.Erhan.Salary);

console.log(students["Nurullah"]["ID"]);

