// map(): Creates a new array be transforming each element 

const numbers = [1, 2, 3, 4]; 

const doubled = numbers.map(num => num * 2); 

console.log(doubled); 

// filter(): Creates a new array containig only matching elements 
const evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log(evenNumbers)

// find(): Returns the first element that match a condition

const result = numbers.find(num => num > 2); 
console.log(result); 