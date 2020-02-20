/*
declaration of array
    var variableName = [data1, data2, ...]

*/

var names = ["Muhtar", "Madina", "Holy Erhan", "Mihribana"];
//index:        0          1            2            3

console.log(names);
console.log(names[2]);
console.log(names[4]);  // undefined

/*
sort()
push(value) : adds the value to the array
pop() : Last in first out
shift() : first in first out
unshift(value): inserts the given value to the index 0
length
*/

var numbersArray = [9,8,7,6,5,4,3];
numbersArray.sort(); //sorts in ascending order
console.log(numbersArray);

var nums = [1,2];
nums.push(4);  //[1,2,4]
console.log(nums);

var nums2 = [5,6,7,8];

var n =nums2.pop(); //8
console.log(n);
console.log(nums2);  //[5,6,7]

var arr1 = ["A", "B", "C", "D"];

var str1 = arr1.shift(); //"A"
console.log(str1);
console.log(arr1); 

var arr2 = [9,10,11];
arr2.unshift(8);
console.log(arr2);

console.log(arr2.length);







