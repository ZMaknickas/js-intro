/*
://developer.mozilla.org/en-US/docs/Web/JavaScript/Referenceglobal_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

const numbers =[10, 2, 8, 4, 6];
const doubleNumbers = [];

for (let i=0; i<numbers.length; i++)  {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}
// push(name.toUppercase())
console.log(doubleNumbers);

const n1 =[10, 2, 8, 4, 6];
const n2 =[20 , 21, 22, 23];
const n12 = [];

for (let i=0; i<n1.length; i++)  {
    n12.push(n1[i]);
}
for (let i=0; i<n2.length; i++)  {
    n12.push(n2[i]);
}
console.log(n12);


// push(name.toUppercase())