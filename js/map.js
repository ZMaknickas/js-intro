let marks=[10, 2, 8, 4, 6];

const sum = marks.map((n, i, arr)=> n*i*arr.length);

console.log(sum);

const sum2 = marks.map((n, index, array)=> n*index*array.length);

console.log(sum2);

let gg='2300';
console.log(gg);
console.log(+gg);
pl
