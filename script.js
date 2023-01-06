"use strict";

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
// return a - b;
// }


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
// console.log(`${i}: ${item} внутри массива ${arr}`)
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));


const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(array, item){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item ) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(array, 5));


const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (value === arr[middle] ) {
            return middle;
        } 
        
            if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    } 
    return "negative";
}; 
console.log(binarySearch(array, 5));

const array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binnarySearch = (arr, value) =>{
let start = 0;
let end = arr.length - 1;

while(start <= end) {

    let middle = Math.floor((start + end) / 2);
    
    if(value === arr[middle]) {
        return middle;
    }
    if( value < arr[middle]) {
        end = middle -1;
    }else {
        start = middle +1 ;
    }
} return "fuck you";
};
console.log(binnarySearch(array, 6));

const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];
function bubleSearch (arr) { 
    for(let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1] ) {
                let tmp = arr [j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubleSearch(arr));

