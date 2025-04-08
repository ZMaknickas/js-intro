const marks= [10, 2, 8, 4, 6];
let sum=0;

for (let i=0; i<marks.length; i++) {
    sum+=marks[i];

}
console.log(sum);

let sum2=0;
let i=0;
while (i < marks.length) {
    sum2 +=marks[i];
    i+=2;
}

console.log(sum2);

let sum3=0;
let count=0;
while (sum3 <1000000) {
    sum3 +=count++;
}

console.log(count);
console.log(sum3);