// -> make one array who have value from 1 to 10
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 1. print 9th and 10th index of array
// console.log(array[8]);
// console.log(array[9]);


// 2. print every element of array by map and for loop
//  map
// let mapArr = array.map(element => console.log(element));


// for loop
// for (let i = 0; i < array.length; i++)
//     console.log(array[i])



// 3. change a value of 6th index with 100
// array[6] = 100
// console.log(array)


// 4. print a array till element value not gratter then 100
// let arr = [1, 2, 3, 4, 5, 11, 235, 6, 366]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 100) {
//         break;
//     }
//     console.log(arr[i]);
// }



// 5. pluse 1 in every element of an array
// console.log(array.map(function (element) {
//     return element + 1;
// }));



// 6. add 0 in start of array
// array.unshift(0)
// console.log(array)

// array.splice(0, 0, 0);
// console.log(array)


// 7. add  99 in end of array
// array.push(99)
// console.log(array)

// array.splice(10, 0, 99)
// console.log(array)


// 8. remove 1 element from start of  array
// array.shift(0)
// console.log(array)


// 9. remove 1 element from end of array
// array.pop(10)
// console.log(array);


// 10. do sum of all value of an array with use of map, reduce and for-loop
// map

// reduce

// for-loop


// 11. sort a array in acending decending
// arr = [1, 2, 4, 6, 8, 3, 5, 9, 10, 7]
// arr.sort((a, b) => a - b)
// console.log(arr);

// arr.sort((a, b) => b - a)
// console.log(arr);

// 12. reverce an array with use of method
// array.reverse()
// console.log(array);


// 13. reverce an array with use of for-loop-> use unsift



// ___________________________________________________________________________________

// task-2
// let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

// 1. give all value which can devided by 2 - not use filter


// 2. give all value above 3 by use of filter
// a = arr.filter((value) => {
//     return value > 3
// })
// console.log(a);

// 3. give index of 56
// a = arr.indexOf(56);
// console.log(a)

// 4. give true/false result when check given vale is exists in array or not
// let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8];
// anyValue = 10;

// let exists = arr.includes(anyValue);
// console.log(exists);
// ___________________________________________________________________________________

// task-3
// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']
// let array = ['i', 'am', 'urvish']
// array.reverse()
// console.log(array);

// by use of map and loop
// map


// loop



// 2. want "i am urvish" without use join method
// ___________________________________________________________________________________

// task-4

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'  ]
// by use of map and loop

// map
// let arr = ['i', 'am', 'urvish'];

// let reversedArr = arr.map(str => str.split('').reverse().join(''));

// console.log(reversedArr);

// loop
//  -> use concat