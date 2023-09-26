//qution live coding

//to show infinite prime number

for (let i=0; i<=100; i++){
    if(i%2 !==1 ){
        console.log(i)
    }
}

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

//show 3 digit random number 100
// for (let i=0; i<=100; i++){
//     const arr= Math.floor(Math.random()*900)+100
//     console.log(arr)
// }


// Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
  
//     if (num % 2 === 0 || num % 3 === 0) return false;
  
//     let i = 5;
//     while (i * i <= num) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//       i += 6;
//     }
  
//     return true;
//   }
  
//   // Generate and display the first 100 prime numbers
//   let count = 0;
//   let num = 2;
  
//   while (count < 100) {
//     if (isPrime(num)) {
//       console.log(num);
//       count++;
//     }
//     num++;
//   }
  

// var prime = function (){
//     var num;
//     for (num = 0; num < 101; num++){
//         if (num % 2 === 0){
//             break;
//         }
//         else if (num % 3 === 0){
//             break;
//         }
//         else if (num % 4=== 0){
//             break;
//         }
//         else if (num % 5 === 0){
//             break;
//         }
//         else if (num % 6 === 0){
//             break;
//         }
//         else if (num % 7 === 0){
//             break;
//         }
//         else if (num % 8 === 0){
//             break;
//         }
//         else if (num % 9 === 0){
//             break;
//         }
//         else if (num % 10 === 0){
//             break;
//         }
//         else if (num % 11 === 0){
//             break;
//         }
//         else if (num % 12 === 0){
//             break;
//         }
//         else {
//             return num;
//         }
//     }
//     };
//     console.log(prime());


































































































