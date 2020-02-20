
var MyCars = {
    BMW: {
        Year:2020,
        Model: "X5",
        MadeIn: "Germany"
    },
    Toyota:{
        Year : 2018,
        Model: "Corolla",
        MadeIn: "Japan"
    },
    Mercedes:{
        Year :2016,
        Model : "C class",
        MadeIn : "China"
    }

}
console.log(MyCars);
console.log(MyCars.BMW.Model);
console.log(MyCars["BMW"]);
console.log(MyCars["BMW"]["Model"]); //X5

console.log("======================================");
for ( eachCar in MyCars){
    var str = eachCar;
    console.log(MyCars[eachCar]);
}
console.log("======================================");
var YearOfToyota = MyCars.Toyota.Year;
console.log(YearOfToyota); //2018

console.log(MyCars["Toyota"]["Year"]); //2018
console.log("======================================");

// copy objects
var oldCars = JSON.parse(JSON.stringify(MyCars));
console.log(oldCars);




