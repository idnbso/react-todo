// Example 1
// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// let toAdd = [9, 5];
// console.log(add(...toAdd));

// Example 2
// let groupA = ['Idan', 'Busso'];
// let groupB = ['James', 'Allen'];
// let final = [...groupA, ...groupB];
// console.log(final);

// Example 3
let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

function greet(name, age) {
    return `Hi ${name}, you are ${age} years old.`;
}

console.log(greet(...person));
console.log(greet(...personTwo));

let names = ['Mike', 'Ben'];
let final = ['Andrew'];
final = [...final, ...names];

final.forEach(name => console.log(`Hi ${name}!`));