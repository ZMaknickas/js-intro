function century(year) {
let sum=1;
if (year<101 && year===0)
    {
    return 0;
    } 
for (let i=101; i<=year; i+=100) 
{
sum+=1
}
return sum;
}

console.log(century(2001))