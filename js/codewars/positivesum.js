function positiveSum(arr) {
    return arr.filter(n=> n>=0).reduce((total, n)=>total+n, 0);  
}
console.log(positive)

/*
var [a,b]=[1,2];   //the old method is var a=1,b=2;
console.log(a);
console.log(b);

//output:
1
2
*/