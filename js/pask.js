console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIII');
let men=10000;
let result=0;
let count=0;
let result2=0;
while (result<=1000000) {
result+=men
result*=1.1
count++
console.log(Math.round(result))
}
console.log(count);
console.log('Iki susikaups mln praeis '+count +' menesiu.');

let j=[2,4,5,6,7,8,9,4,67,88,898,4,34,667,99,56];
const hj=j.map(x=>x-100);
console.log(hj);

const pff=j.filter(x=>x>66)
console.log(pff);

let x=String.fromCharCode(60);
console.log(x);

let str='vakaras';
let tekstas='sargis pakalikas dvojke vakaras pakalimas pakaltinamas';
let tekstas2=['sargis', 'pakalikas', 'dvojke', 'vakaras', 'pakalimas', 'pakaltinamas'];
const ned=tekstas.match('pakal');
console.log(ned);
console.log(tekstas);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result45 = inventory.find(({ name }) => name === "cherries");
  console.log(result45);

console.clear();

let i1=0; 
let i2=0; 
let i3=0; 
let mul=0;
while (i1+i2+i3<1000000){
i1+=1200;
i2+=2000;
i2+=200;
mul++;
}
console.log((mul/12).toFixed(1));

const wg=[400, 600, 800, 1400, 800, 1600];

let all=wg.reduce((total, n)=>total+n);
console.log(all);
let m=1000000/(all*12);
console.log(m.toFixed(1));
let best=wg.sort((a,b)=>a-b);
console.log(best);
