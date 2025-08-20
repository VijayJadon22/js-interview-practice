// let c=2;
// let b="2";
// console.log(c==b);
// console.log(c===b);


for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[i]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);
