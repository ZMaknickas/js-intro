const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(person['0']);

// const keys =['age', 'isMarried', 'name'];
const keys =Object.keys(person);
console.log(keys);

for (const key of keys) {
    console.log(person[key]);
}

for (const key in person) {
    console.log(person[key]);
}


const text = 'papajus';
const count = {
    'L':1,
    'a':2,
    'b':1,
    's':1,
}

const obj = {
    name:'Maryte',
};
console.log(obj);
// overridinti sukurta ojekta
//pridedamas key ir reiksme.
obj.age=88;
console.log(obj);

obj.age=88;
obj.isMarried= false;
console.log(obj);

const symbols = {};

for (const s of text) {
    if (symbols[s]) {
    symbols[s]++;
    }else {
        symbols[s] = 1;
    }
}
console.log(symbols);

let max=0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max= symbols[s]
    }
}
console.log(max);

const maxSymbols =[];
for (const s in symbols) {
    if (symbols[s]===max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);