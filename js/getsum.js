function difference(ages) {
let res= [];
let did= Math.max(...ages);
res.push(did);
let maz= Math.min(...ages);
res.push(maz);
let dif=did-maz;
res.push(dif);
return res;
}

console.log(difference([3, 41, 45, 68, 70]));