//funkcija, kuri graintu skaiciaus faktoriala.
function fakt(n){
let end=1;
for (let i=1; i<=n; i++){
end*=i;
}
return end;
}
console.log(fakt(6));

//Parasykite funkcija, kuri apskaiciuotu kiek kartu tam tikra raide pasikartojo 
// zodyje arba sakinyje.

function rem(n){
let result=[];
let my=0;
for (const x of n){
if (x!==n[x])n   
my=result.push(x)}
return result;
}
console.log(rem([1,2,3,2,1,1,2]));
