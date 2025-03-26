function pavadas () {
// logika    
}

pavadas ();
const a = pavadas();
console.log(a);
console.log(pavadas());

function penki() {
    return 5;
}
const c = penki();

function hi () {
    return 'Labas!';
}

const d = hi();
console.log(d);

//Jonas Labas, Jonas
//Maryte Lbas, Maryte!
//Petras Labas, Petras!

function hiPerson(name){
return 'Labas, ' + name + '!';
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson());

// 2+2 = 4
// 7+5 = 12

function sum(i,j) {
    return i + j;
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f)

console.clear();

// 100 -> 121 Eur
// 200 -> 242 Eur
// 73  

function priceWithVat(price) {
    const updatedPrice = price * 1.21;
    return updatedPrice + ' Eur'

}


const p1 = priceWithVat(100);
console.log(p1);

const p2 = priceWithVat(200);
console.log(p2);

const p3 = priceWithVat(73);
console.log(p3);

// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.
// Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu.
// Petras -> Zodis "Petras" yra sudarytas is 6 raidziu.
// Ona -> Zodis "Ona" yra sudarytas is 3 raidziu.

function nameLength(name) {
    const size = name.length;
    return `Zodis "${name}" yra sudarytas is ${size} raidziu`;
}

const nl1= nameLength('Jonas');
const nl2= nameLength('Maryte');
const nl3= nameLength('Petras');
const nl4= nameLength('Ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);

console.clear()

// 5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.

function gotNumber(n){
    return 'Gautas skaicius: ' + n + '.';
}
const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);
console.log(gn1);
console.log(gn2);
console.log(gn3);

// 2, 2    ->  2 + 2 = 4
// 7, 5    ->  7 + 5 = 12
// -7, 25  ->  -7 + 25 = 8

function sum(a, b){
return a + b;
}

console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-8, 25));

//ND - perdaryti analogiskai su -, * ir /kombinacijomis.

function mul(a, b){
return a * b
}

console.log(mul(2, 2));
console.log(mul(7, 5));
console.log(mul(-8, 25));

function deduct(a, b){
    return a - b
}

console.log(' ')
console.log(deduct(2, 2));
console.log(deduct(7, 5));
console.log(deduct(-8, 25));

function div(a, b){
    return a / b
}

console.log(' ')
console.log(div(2, 2));
console.log(div(7, 5));
console.log(div(-8, 25));

