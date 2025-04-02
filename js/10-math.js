console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// abs
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt
console.log('\ncbrt')
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil
console.log('\nceil')
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.cbrt(8.5));
console.log(Math.cbrt(8.0000004));

// floor
console.log('\nfloor');
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.2));
console.log(Math.floor(88.99999));

// round
console.log('\n round');
console.log(Math.round(8));
console.log(Math.round(8.1));
console.log(Math.round(8.5));
console.log(Math.round(8.9));

// truc
console.log('\ntrunc')
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.0001));
console.log(Math.trunc(4.9999));
console.log(Math.trunc(-4.9999));

// max
console.log('\nmax');
console.log(Math.max(10, 3, 6, 15));
console.log(Math.max(10, 3, 6, 15, 'asfd'));

// pow
console.log(Math.pow(2, 0)); 
console.log(Math.pow(2, 1)); 
console.log(Math.pow(2, 2)); 
console.log(Math.pow(2, 3)); 
console.log(Math.pow(2, 4)); 
console.log(Math.pow(2, 5)); 
console.log(Math.pow(2, 6)); 
console.log(Math.pow(2, 7)); 
console.log(Math.pow(2, 8)); 
console.log(Math.pow(2, 9)); 
console.log(Math.pow(2,10));  

// sign
// random [0..1)
console.log('\nrandom');
console.log(Math.random());

// Random skaicius: 3 arba 7
// [0..1) = [0 .. 0.5) + [0.5 .. 1)

let count3= 0;
let count7= 0;

for (let i = 0; i < 1000000; i++)
{    
    if (Math.random()< 0.5) {
        count3++;
    } else {
        count7++;
    }
}

console.log(count3, count7);
// [13..149]
function randomnumber(min, max) {
    return Math.floor(Math.random() * (ma-min+1) + min);
}
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));

const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i=0; i<1000000; i++) {
    console.log(randomNumber(0, 9));
    counts[index]++;
}

console.log(count);

const counts2 = [0, 0];

for (let i=0; i<10; i++) {
    console.log(randomNumber(0, 1));
    counts[index]++;
}

console.log(counts2);