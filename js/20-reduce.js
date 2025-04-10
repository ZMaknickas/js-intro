const marks=[10, 2, 8, 4, 6];

let sum= 0;
for (const n of marks) {
    sum+=n;
}
console.log(sum);

const sum2= marks.reduce((total, n) => total+n);
console.log(sum2);
//10-2-8-4-6
const minus= marks.reduce((total, n) => total-n);
console.log(minus);
//0-10-8-4-6
const minus2= marks.reduce((total, n) => total-n, 0);
console.log(minus2);

const names=['Jonas', 'Maryte', 'Petras', 'Ona'];
const abbr2=names.reduce((total, name) => total+name[0]+'.','');
console.log(abbr2);