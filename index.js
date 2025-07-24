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

