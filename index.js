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





//Difference between slice and splice method

let arr = [1, 2, 3, 4, 5, 6];
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


