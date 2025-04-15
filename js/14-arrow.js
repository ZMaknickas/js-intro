const n1 = 7;
const n2 =5;
// function declaration
function sum(a,b) {
    return a+b;
}
console.log(`${n1}+${n2} = ${sum(n1,n2)}`);


//kintamajam priskirta anonimine funcija
const minus = function (a, b) {
    return a-b;
}
console.log(`${n1}-${n2} = ${minus(n1,n2)}`);

//3) arrow function
const multi = function (a, b) {
    return a * b;
}
console.log(`${n1}*${n2} = ${multi(n1,n2)}`);

//3a) arrow function
//jei logikos bloke yra tik viena salyga 
//tai galima nerasyti {return}
const div = (a,b) => a/b;
console.log(`${n1}/${n2} = ${div(n1,n2)}`);

//3b)
const sqr = a => a*a;    

console.log(`${n1}*${n1} = ${sqr(n1)}`);
console.log(`${n1}*${n1} = ${sqr(n1)}`);

// funkcija grazina atbulini teksta
const reverseString = text => text.split('').reverse().join('');
console.log(reversestring('labas'));
console.log(reversestring('sedek'));