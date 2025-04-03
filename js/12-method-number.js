//developer.mozilla.org/en-US/docs/Web/JavaScript/Referenceglobal_Objects/Number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-3.14));

console.log('-----------')
console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN('asdf'), isNaN('asdf'));
// ([]) array;
// ({}) object;
const input = '22';
const userNumber = parseInt(input);
const date= userNumber+5;
console.log(date);
//prase sveikieji
//float desimtainiai
console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseFloat('244'));
console.log(parseFloat('2.2'));
console.log(parseFloat('-2.2'));

// Number.EPSILON suzinoti skaiciaus intervala

//console.log(Number.EPSILON());

const a=12.3456789
console.log(a);
console.log(typeof a);

const b=a.toFixed(4);
console.log(b);
console.log(typeof b);

const c = parseFloat(b);
console.log(c);
console.log(typeof c);
