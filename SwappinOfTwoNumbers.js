let input = prompt('Enter two number(eg 10, 20):');

let splitedValue = input.split(',');

console.log(splitedValue[0],splitedValue[1]);

let a = splitedValue[0];
let b = splitedValue[1];

[a,b] = [b,a]


console.log(`Swapped value of a, b: ${a} ,${b}`);
