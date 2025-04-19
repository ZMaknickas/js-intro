function walk(arr){
let n=0;
let s=0;
let e=0;
let w=0;
let i=0;
if (arr.length===10){
while (i<10) {
if (arr[i]==='n')
n+=1;
if (arr[i]==='s')
s+=1;
if (arr[i]==='e')
e+=1;
if (arr[i]==='w')
w+=1;
i+=1;           
}
}    
if (n===s && e===w) 
{
return true;
}
else
{
return false;    
}    
}
console.log(walk(['n','s','n','s','n','n','n','s','n','s']));