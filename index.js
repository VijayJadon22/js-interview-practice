// let arr = [, , ,]; //3
// let arr2 = [1, 2, 3, 4]; //4
// let arr3 = [[1, 2, 3], [4, 5, 6]]; //2

// console.log(arr.length);
// console.log(arr2.length);
// console.log(arr3.length);


// let arr = [1, 18, 9, 81, 98, 124];


// arr.sort((a, b) => a - b);


// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[j] < arr[i]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }
// console.log(arr);

// ******

// if ([]) {
//     console.log("Vijay is absent");
// } else {
//     console.log("Vijay is present");
// }

// let arr1 = [, , ,];
// console.log(arr1.length);

//***** */

// let arr = [10, 9, 6, 2, 12];

// arr.sort((a, b) => b - a);
// console.log(arr);


// *****
// Example for map function

// let arr = [1, 2, 3, 4, 5, 6];

// let arr1 = arr.map(ele => ele ** 2);
// console.log(arr1);


// Question on map function if we do ele>100 what will be the output
// let arr = [1, 2, 3, 4, 5, 6,102];

// let arr1 = arr.map(ele => ele > 100);
// console.log(arr1);



//Question on fiter method if we do ele>100 what will be the output
// let arr = [1, 2, 3, 4, 5, 6,102];

// let arr1 = arr.filter(ele => ele > 100);
// console.log(arr1);




//**** */
//Difference between slice and splice method

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(0,3)); //1 2 3 will print from 0 index to 2, 3 index wont be counted

// console.log(arr.slice(2)); // will slice the array from 2 index all the ele will be printed starting from 2index

// let newArr = arr.slice(0, 3);
// console.log(newArr);


// // array.splice(start, deleteCount, item1, item2, ...)
// console.log(arr.splice(1, 2, 4)); // 2 3 will print the items removed
// const remainingValues = arr.splice(1, 2, 89, 79);
// console.log(arr);

// let arr2 = arr.splice(1, 0);
// console.log(arr2); // splice returns the deleted values inside an array




//**** */
// Does slice and splice make changes in the original array itself

// let a= [1, 2, 3, 4, 5];
// let b = a.slice(1, 3);
// console.log(b); // b =[2,3] as slice will return the new array
// console.log(a); // a=[1,2,3,4,5] but a will be same, slice is non destructive

// let c = a.splice(1, 1);
// console.log(c); //c=[2] as splice returns the deleted items in new array or empty array
// console.log(a); //a=[1,3,4,5] 2 is not included slice makes changes in the original array splice is destructive




//**** */
// what are the ways to empty an array
// let a = [1, 2, 3, 4, 5];

//1 method by using splice from 0 inde then removing all elements
// a.splice(0, 5);
// console.log(a);

//2method  assign to new array
// a = [];
// console.log(a);

//3method equate length to 0
// a.length = 0;
// console.log(a);

//4method using loop
// while (a.length) {
//     a.pop();
// }
// console.log(a);




//**** */
// what are the ways to create an array object

//1method directly assign values
// let a = [1, 2, 3];

// //2method by using Using the Array Constructor, using new keyword creating a new object
// let b = new Array(2, 3, 4);
// let c = new Array(3); //if we pass single number then create array of that many empty items
// console.log(b);
// console.log(c);

//3method from string using Array.from()
// let strArr = Array.from("vijay");
// console.log(strArr); //[ 'v', 'i', 'j', 'a', 'y' ]

//4method using Array.of
// let a = Array.of(1, 2, 3);
// console.log(a); //[1,2,3]





//**** */
// How to remove the duplicate values from an array
// let a = [1, 2, 3, 81, 4, 78, 78, 81];

//1method using set
// const newArr = [...new Set(a)];
// console.log(newArr);


// //using filter method
// let b = a.filter((ele, index, arr) => arr.indexOf(ele) === index); //as indexOf returns the first occurence index
// console.log(b);





//**** */
// What does .length property return on functions
// function abc(a,b,c) {

// }

// function pqr(a=0,b,c) {

// }
// console.log(abc.length, pqr.length); //3 0

//explanation:- The .length property of a function returns the number of parameters before the first one with a default value.

// Function Signature	       .length Value
// function f(a, b, c)	           //3
// function f(a = 0, b, c)	       //0
// function f(a, b = 1, c)	       //1
// function f(a, b, c = 3)	       //2





//**** */
// type checking of empty array with double equals to and triple equals to

// console.log([] === []);
// console.log([] == []);

// In JavaScript, arrays are objects, and object comparisons follow reference equality, not value equality.

// So:
// [] === [] // false
// [] == []  // false
// Each [] creates a new array object in memory.
// Even though they look identical, they have different memory addresses.

// JavaScript sees them as two completely different things.

// 📦 Reference vs. Value
// Comparison Type	What’s Compared	Result
// ===	Reference (strict)	false
// ==	Reference (loose)	false
// 🔍 Even loose equality (==) won't coerce objects into being equal—it still checks by reference.









//****** */
// 🧱 Primitive Data Types
// These are the basic building blocks. They’re stored by value, which means each variable holds its own copy.

// 🔹 Characteristics
// Immutable (can’t be changed directly)
// Compared by value *********************************
// Stored in stack memory

// Fast and simple

// ✅ Examples:
// Type	Example	Description
// Number	42, 3.14	Numeric values
// String	"Vijay"	Sequence of characters
// Boolean	true, false	Logical true or false
// null	null	Intentional absence of value
// undefined	undefined	Variable declared but not set
// Symbol	Symbol("id")	Unique and immutable identifier
// BigInt	123n	Large integers beyond Number limits



// 🧩 Non-Primitive (Reference) Data Types
// These are complex structures, stored by reference—you hold a pointer to the actual data in memory.
// 🔸 Characteristics
// Mutable (can be changed)
// Compared by reference //******************** */
// Stored in heap memory
// Powerful but sometimes tricky

// ✅ Examples:
// Type	Example	Description
// Object	{name: "Vijay", age: 25}	Key-value pair collection
// Array	[1, 2, 3]	Ordered collection
// Function	function greet() {}	Executable block of code
// Date	new Date()	Date and time object
// RegExp	/abc/	Regular expression object
// Map/Set	new Map(), new Set()	Collections with unique keys/values
// 🔍 Quick Recap
// Feature	Primitive	Non-Primitive
// Stored as	Value	Reference (address)
// Mutability	Immutable	Mutable
// Compared using	Value comparison	Reference comparison
// Examples	42, "hello"	{}, [], ()=>{}









// //************* */
// //given a string capitalize the first letter of each word and also print each word in new line
// let str = "this is vijay jadon";
// let newStr = "";

// function capitalize(str) {
//     let words = str.split(" ");
//     for (let word of words) {
//         let split = word.split("");
//         split[0] = split[0].toUpperCase();
//         if (words.indexOf(word) === 0) {
//             newStr += split.join("");
//         } else {
//             newStr += "\n" + split.join("");
//         }
//     }
// }

// capitalize(str);

// console.log(newStr);




// console.log(typeof (NaN)); //Number
//  console.log(typeof ([])); //object

// console.log(NaN === NaN);
// console.log(NaN == NaN);



//********** */
//Pre and post increment
// var a = 10;
// console.log(++a); //11
// console.log(a++); //11
// console.log(a); //12





// *************
// if ([]) {
//     console.log("Vijay is present");  // as emptry array is turthy value
// } else {
//     console.log("Vijay is absent");
// }


// if ([]===true) {
//     console.log("Vijay is present");
// } else {
//     console.log("Vijay is absent"); //compraing primitive with non primitive
// }


// if ([]===true) {
//     console.log("Vijay is present");
// } else {
//     console.log("Vijay is absent");//compraing primitive with non primitive
// }








// *******
// let obj = {
//     a: {
//         b:undefined
//     }
// }

// console.log(obj.a?.b?.c?.d??"vijay"); //Nullish coalescing operator (??)
// // Returns the right-hand value if the left-hand is undefined or null.

