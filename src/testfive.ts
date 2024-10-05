// i/p: aabbbcddbaa
// o/p: a1b2cd1ba1

// function test1(input: string): string {
// input
// for over input
// store in temp variable
// if same, increment count starting from 0
// if not match, just push and move to  next
//     // return the string
//     let tempInp;
//     let tempVal = 0;
//     let output = '';
//     for (let i = 0; i < input.length; i++) {
//         console.log();
//         // if already exist in temp, then increment the count
//         // else add new value in temp
//         if (tempInp === input[i]) {
//             tempVal++;
//         }
//         if (tempInp !== input[i] && tempInp && tempVal) {
//             output += `${tempVal}`;
//         }

//         if (i === input.length - 1 && tempInp && tempVal) {
//             output += `${tempVal}`;
//         }

//         if (tempInp !== input[i]) {
//             output += `${input[i]}`;
//             tempVal = 0;
//             tempInp = input[i];
//         }
//     }
//     return output;
// }

// console.log(test1('ab'));
