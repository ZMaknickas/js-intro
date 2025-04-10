const a1=[1,11,111];
const a2=[2,22,222];
const a3=[3,33,333];
const a4=[4,44,444];

const a12= a1.concat(a2);
console.log(a12);

const b12 = [...a1, ...a2];
console.log(b12);

const b423 =[...a4, ...a2, ...a3];
//[7, 4, 44, 444, 88]
const c1=[7, ...a4, 88];
console.log(c1);

const o1={name: 'Jonas'};
const o2={age: 99};
const o3={isMarried: true};

const o123 ={...o1, ...o2, ...o3};
console.log(o123);

const p1={a:1};
const p2={b:2};
const p3={c:3, a:7};

const p123 ={...p1, ...p2, ...p3};
console.log(p123);

const p321 ={...p3, ...p2, ...p1};
console.log(p321);
// galutinis objekto narys persidengia ir pakeicia reiksme.
const c= {d:4};
const p32 ={...c,...p3, ...p2, a:1};
console.log(p32);
console.log('-------')
const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest]=marks;
console.log(first);
console.log(second);
console.log(rest);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1=names[0];
const n2=names[1];
const n34=names.slice(2);// grazina reiksmes nuo 2 numerio

console.log(n1);
console.log(n2);
console.log(n34);
console.log('------------')
const [x,y, ...z] = names;
console.log(x);
console.log(y);
console.log(z);

const mix=[1, 'asd', true, [], {}, undefined];
const [m1, m2, m3, ...mRest]=mix;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest);

const person= {
    name:'Jonas',
    age: 99,
    isMarried: true,
};   
const {name, age, ...p}=person;
console.log(name);
console.log(age);
console.log(p);


const students =[
    {name: 'Jonas', age: 99},
    {name:  'Petras', age: 88},
    {name: 'Ona', age: 77},
    {name: 'Maryte', age: 66},
];
//Studentui, vardu Jonas, yra 99 metai.

for (let i=0; i<students.length; i++) {
const student= students[i];
const name= student.name;
const age= student.age;
const result= `Studentui, vardu ${name}, yra ${age} metai`
console.log(result);
}

for (const student of students) {
    const name= student.name;
    const age= student.age;
    const result= `Studentui, vardu ${name}, yra ${age} metai`
    console.log(result);
}

for (const student of students) {
    const {name, age}= student;
    const result= `Studentui, vardu ${name}, yra ${age} metai`
    console.log(result);
}

for (const {name, age} of students) {
    const result= `Studentui, vardu ${name}, yra ${age} metai`
    console.log(result);
}

// for of eina per masyva
// for in eina per objekta

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 33333],
    [4],
    [5],
    [6],
];

// Pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for (const [first, ...rest] of numbers) {
    const result= `Pirmas skaicius yra ${first} ir dar yra ${rest} papildomu skaiciu.`
console.log(result);
}
console.clear();

Math.min(1)
const ddd= [1,2,3];
console.log(Math.min(...ddd));

function min(...list) { //parasome array vienu zodziu.
let min =

return min;
}