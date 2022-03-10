// Odd or Even?
// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
// Sample Output:
// "0 is even" 
// "1 is odd" 
// "2 is even"

let i;
for (let i=0; i<=15; i ++){
    if (i === 0 ){
        console.log('"',i + '  even"');
    } else if (i % 2 === 0) {
        console.log('"', i + '  even"');
    } else {
        console.log('"', i + '  odd"');
    }
 }
