
//Atvirksciai uzrasytas vardas AIDAS;
// vardas Aidas;
let vardas= 'Aidas';
let rev=0;
rev=vardas.split('').reverse().join('');
console.log(rev);


console.log('____________');

let group = ('lietuvis, '+'ukraines, '+'lenkas');
console.log(group) ;


const suma = (a,b,c,d,e) => a + b + c + d + e; 
console.log(suma(1,2,3,4,5))

// Patikrinkite, ar masyvas tuscias.
// a. Pavyzdys: patikrinkite, ar sarasas [] yra tuscias

//Nustatyti, ar sarase yra teigiamas skaicius
function f(n){
for (let i=0; i<3; i++)
if (n[i]>0)
return true;
}
console.log(f([-1, -2, 3, -4]))


let a = ('2'+' pav'+' tetris'+' 5'+ ' mouse');
console.log(a);

let jausmas = ('kita'+' kazkas'+ ' ojej'+ ' xxxx'+ ' abejing');
console.log(jausmas);

function alge(a1,b1,c1,d1,e1){
    return a1 - b1 + c1 - d1 + e1;
}
 
console.log(alge(1,2,3,4,5));

const sk = 16

if (sk > 5 ) {
    console.log('pomidoras');
}
else if (sk<3) {console.log('badykite dar karta') };
//Patikrinkite, ar masyve yra daugiau nei 3 to paties skaiciaus elementai.
//a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau 
// nei 3 skaičiaus 2 elementus.
console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIII')
let count=0;
let c=[2, 2, 2, 2, 2, 5, 6];
for (let i=0; i<6; i++){
if (c[i]===2)
count++;}
console.log(count);
