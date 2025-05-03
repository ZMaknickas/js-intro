/* 
BOOLean -logine reiksme
-true
-false

Loginiai operatoriai:
&&  - and (ir)
||  - or  (arba)
*/

const isEven = true;
const isOdd = false;

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||_____________');

console.log(true || true);
console.log(true || false);
console.log("~~~~~~~~~~~");

console.log(false || true);
console.log(false || false);

console.clear();

console.log('Ar mergina eis i paimatyma');
const arGrazus = true;
const arTurtingas = true;
console.log(arGrazus && arTurtingas);

//ND surasyti visas imanomas kombinacijas su && ir ||
//kai yra naudojamos 4 boolean reiksmes
//ND kiek gavosi kombinaciju.


console.log('--------');

console.log(true&&true&&true&&true);
console.log(true&&true&&true&&false);
console.log(true&&true&&false&&true);
console.log(true&&false&&true&&true);
console.log(false&&true&&true&&true);
console.log(true&&true&&false&&false);
console.log(true&&false&&true&&false);
console.log(false&&true&&true&&false);
console.log(true&&false&&false&&true);
console.log(false&&false&&false&&false);
console.log(false&&false&&false&&true);
console.log(false&&false&&true&&false);
console.log(false&&true&&false&&false);
console.log(true&&false&&false&&false);
console.log(false&&false&&true&&true);
console.log(false&&true&&false&&true);

console.log(true||true||true||true);
console.log(true||true||true||false);
console.log(true||true||false||true);
console.log(true||false||true||true);
console.log(false||true||true||true);
console.log(true||true||false||false);
console.log(true||false||true||false);
console.log(false||true||true||false);
console.log(true||false||false||true);
console.log(false||false||false||false);
console.log(false||false||false||true);
console.log(false||false||true||false);
console.log(false||true||false||false);
console.log(true||false||false||false);
console.log(false||false||true||true);
console.log(false||true||false||true);

console.log(true||true||true&&true);
console.log(true||true||true&&false);
console.log(true||true||false&&true);
console.log(true||false||true&&true);
console.log(false||true||true&&true);
console.log(true||true||false&&false);
console.log(true||false||true&&false);
console.log(false||true||true&&false);
console.log(true||false||false&&true);
console.log(false||false||false&&false);
console.log(false||false||false&&true);
console.log(false||false||true&&false);
console.log(false||true||false&&false);
console.log(true||false||false&&false);
console.log(false||false||true&&true);
console.log(false||true||false&&true);

console.log(true||true&&true||true);
console.log(true||true&&true||false);
console.log(true||true&&false||true);
console.log(true||false&&true||true);
console.log(false||true&&true||true);
console.log(true||true&&false||false);
console.log(true||false&&true||false);
console.log(false||true&&true||false);
console.log(true||false&&false||true);
console.log(false||false&&false||false);
console.log(false||false&&false||true);
console.log(false||false&&true||false);
console.log(false||true&&false||false);
console.log(true||false&&false||false);
console.log(false||false&&true||true);
console.log(false||true&&false||true);

console.log(true&&true||true||true);
console.log(true&&true||true||false);
console.log(true&&true||false||true);
console.log(true&&false||true||true);
console.log(false&&true||true||true);
console.log(true&&true||false||false);
console.log(true&&false||true||false);
console.log(false&&true||true||false);
console.log(true&&false||false||true);
console.log(false&&false||false||false);
console.log(false&&false||false||true);
console.log(false&&false||true||false);
console.log(false&&true||false||false);
console.log(true&&false||false||false);
console.log(false&&false||true||true);
console.log(false&&true||false||true);

console.log(true||true&&true&&true);
console.log(true||true&&true&&false);
console.log(true||true&&false&&true);
console.log(true||false&&true&&true);
console.log(false||true&&true&&true);
console.log(true||true&&false&&false);
console.log(true||false&&true&&false);
console.log(false||true&&true&&false);
console.log(true||false&&false&&true);
console.log(false||false&&false&&false);
console.log(false||false&&false&&true);
console.log(false||false&&true&&false);
console.log(false||true&&false&&false);
console.log(true||false&&false&&false);
console.log(false||false&&true&&true);
console.log(false||true&&false&&true);

console.log(true&&true||true&&true);
console.log(true&&true||true&&false);
console.log(true&&true||false&&true);
console.log(true&&false||true&&true);
console.log(false&&true||true&&true);
console.log(true&&true||false&&false);
console.log(true&&false||true&&false);
console.log(false&&true||true&&false);
console.log(true&&false||false&&true);
console.log(false&&false||false&&false);
console.log(false&&false||false&&true);
console.log(false&&false||true&&false);
console.log(false&&true||false&&false);
console.log(true&&false||false&&false);
console.log(false&&false||true&&true);
console.log(false&&true||false&&true);

console.log(true&&true&&true||true);
console.log(true&&true&&true||false);
console.log(true&&true&&false||true);
console.log(true&&false&&true||true);
console.log(false&&true&&true||true);
console.log(true&&true&&false||false);
console.log(true&&false&&true||false);
console.log(false&&true&&true||false);
console.log(true&&false&&false||true);
console.log(false&&false&&false||false);
console.log(false&&false&&false||true);
console.log(false&&false&&true||false);
console.log(false&&true&&false||false);
console.log(true&&false&&false||false);
console.log(false&&false&&true||true);
console.log(false&&true&&false||true);


console.log('isdestymo kiekis ' + '128');