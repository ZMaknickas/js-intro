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


// push(name.toUppercase()

const numbers2 =[10, 2, 8, 4, 6] 
numbers2.push(9);
console.log(numbers2);

const g1 = numbers.pop();
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);

numbers2.unshift(1);
numbers2.unshift(2);
numbers2.unshift(3);
console.log(numbers2);

const g3 = numbers2.shift();
const g4 = numbers2.shift();
console.log(numbers2, g3, g4);
console.clear()

const magic= [11, 22, 33, 44, 55];
console.log(magic.includes(5));
console.log(magic.includes(55));

console.log(magic.indexOf(5));
console.log(magic.indexOf(55));

const texts= ['agurkas', 'pomidoras', 'svogunas', 'paprika'];

//Reikalingi produktai: a, b, c, d.
const products = `Reikalingi produktai: ${texts.join(', ')}.`;
console.log(products);

console.clear();
console.log(texts);
texts.reverse();
console.log();
console.log(texts);

console.clear()

const c1 = [1,11];
const c2 = [1,11];
const c3 = [1,11];
const c4 = [1,11];

const c12= c1.concat(c2);
console.log(c12);

const c34= c3.concat(c4);
console.log(c34);

const c123 = c1.concat(c2).concat(c3);
console.log(c123);

const c1234 = c1.concat(c2, c3, c4);
console.log(c1234);

const h = [11, 22, 33, 44, 55];
console.log(h);

//1.The first argument is the index of the 
// element you want to remove.
//2. The second argument is the number
//  of elements to remove (1 means remove one element).
h.splice(1);
console.log(h)

h.splice(0, 3);
console.log(h);

// MAP 
const k = [10, 2, 8, 4, 6];
const k2= [];

 for (const n of k) {
    k2.push(n*2);
 }
 console.log(k2);

 function triple(n) {
    return n*3;
 }

 const k3=k.map(triple);
 console.log(k3);

 const quadro = n => n*4;

 const k4=k.map(quadro);
 console.log(k4);

 const k5 = k.map(n=> n*5);
 console.log(k5);

 const k6 = k.map(n=> n*6);
 console.log(k6);

 const k7 = k.map(n=> n+1);
 console.log(k7);

 const dict = ['pomidoras', 'agurkas', 'bulve'];
 const dict2=dict.map(w => w[0]);
 console.log(dict2);

 const dict3=dict.map(w => w.length);
 console.log(dict3);

const people = [
 {name: 'Jonas', age: 99 },
    {name: 'Petas', age: 88 },
    {name: 'Maryte', age:77 },
    {name: 'Ona', age:66},
];

const peopleNames= people.map(person => person.name);
console.log(peopleNames);

const people100= people.map(person => 
    `${person.name} iki 100 liko ${100-person.age} metai.`)
console.log(people100);

// =>
//    slkdjfs
//    dlbjddlk'
// return person;

// FILTER
const p= [10, 2, 8, 4, 6];
const p5 = [];

for (const n of p) {
    if (n>5) {
        p5.push(n)
    }
}
console.log(p5);

const p6=p.filter(n =>  n > 6);
console.log(p6);

const p7=p.filter(n => n>2 && n<8);
console.log(p7);

const text5= ['labas','', 'rytas', '', 'Lietuva']
const update=text5.filter(t=>t);
console.log(update);

const update2=text5.filter(t=> t.length>0);
console.log(update2);

//fill
const default50=[0,0,0,0,0];

const default7 = Array(7).fill(99);
console.log(default7)

const demo=[10, 2, 8, 4, 6];

demo.fill(777);
console.log(demo);

//every
const trees = ['uosis', 'egle', 'azuolas', 'tuopa'];
const allTreesValid=trees.every(s => s.length>5);
console.log(allTreesValid);
//grazina reiksme true or false

// some
const someTreesValid2=trees.some(s => s.length>5);
console.log(someTreesValid2);

const someTreesValid=trees.some(s => s.length===5);
console.log(allTreesValid);

