/*
for loop -ciklas
*/

for(let i=0; i < 5; i++) {
console.log('a) number:', i);
}


console.log('----------');

for(let i=5; i<=10; i +=2) {
    console.log('b) number:', i);
    }

console.log('----------');

for(let i=-5; i>=-10; i--) {
   console.log('c) number:', i);
    }

    let i = 20;
    let m =i-1;
    m = i--;

 for(let k=0; k<5; k++) {
    console.log(' number:', k/ 10 );
   }

   const x= 4;
console.log('-----------')
   console.log('Daugyba: ');
   for (let i=1; i<10; i++) {
    console.log(`${i} * ${x }= ${i * x}`);
}

console.clear();

const marks= [10, 2, 8, 4, 6];

let sum = 0;

sum +=marks[0];
sum +=marks[1];
sum +=marks[2];
sum +=marks[3];
sum +=marks[4];

console.log(sum);

let sum2 = 0;

for (let i=0; i<5; i++) {
    console.log('index' , i, '-->', marks[i]);
        sum2 +=marks[i];  
}

console.log(sum2);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona']

for (let i=0; i<names.length; i++)
{console.log(`${i+1}`, names[i]);
    const s = `Studento vardas yra ${names[i]}.`;
console.log(s);   
}

// "Vardas" yra sudarytas is N raidziu.

for (let i=0; i<names.length; i++) {
    const name = names[i];
    let x = name.length
const n = (`Vardas "${name}" yra sudarytas is `+ x + ` raidziu.`);
 console.log(n);
}