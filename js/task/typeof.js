/*
TYPEOF - DUOMENU TIPO NUSTATYMO OPERATORIUS
*/

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.145664);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof 'a', 'b', 'c');
console.log(typeof [true, false]);
console.log(typeof sum);
console.log(typeof undefined);
console.log(typeof null);

const a = null;
if (a===null) {
    console.log('Null');
}

const b = [];
if (Array.isArray(b)) {
    console.log(Array);
}

const c = [5];
if (Array.isArray(c)) {
    console.log(Array)}
    else {
console.log('not Array')
}