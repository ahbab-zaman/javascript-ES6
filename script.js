// Default parameter
// function add(x = 2, y = 5){
//     return x + y;
// }
// console.log(add(undefined))
// console.log(add());
// Output : 7


// Without default parameter
// function add(x, y){
//     return x + y;
// } console.log(add(5, 4));
// Output : 9

// Problem 1
// Arrow function

const multiply = (x, y, z) =>{
     result = x * y * z;
     return result;
}
// console.log(multiply(2, 4, 6));


// Problem 2
// template literals

const sentence = `
I am a web developer.
I work hard.
I love to eat biriyani.
`
// console.log(sentence);


// Problem 3

// const friends = (arr) =>{
//     let newArr = [];
//     for(item of arr){
//         if (item.length % 2 === 0 ) {
//            newArr.push(item);
//         }
//     }
//     return newArr;
// }
// console.log(friends(['talha', 'sazeed', 'emad', 'abdullah', 'ahbab', 'azim']))

// Problem 4

// const makeSqr = (arr) =>{
//     let sum = 0;
//     for(item of arr){
//         sum = sum +  (item * item);  
//         average = sum / arr.length;
//     }   
//     return average; 
// }
// console.log(makeSqr([1, 2, 3, 4, 5, 6]));


// Problem 5

// const combineArray = (arr1, arr2) =>{
//     newArr = [...arr1, ...arr2];
//     result = Math.max(...newArr);
//     return result;
// }
// console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Problem 6

