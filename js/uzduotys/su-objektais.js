/*1.Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sum*/
function kvad(n) {
let end=0;
for (let i=1; i<=n; i++) {
end+=i*i;
}
return end;
}

console.log(kvad(5));
/*2.Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos.*/
function anagram(a, b) {
if (b.includes(a.)    
}

/*3 Parašykite funkciją, kuri pašalina dublikatus iš masyvo.*/

/*5.Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis.*/

function arpirminis(c) {    
if (c===2 || c===3 || c===5 || c===7)  
return true;
if (c%2===0 || c%3===0 || c%5===0 || c%7===0) 
return false;
else return true; 
}
console.log(arpirminis(14));

let keleivis= {name: "Maryte",
    age: 34,
    city: "Ukmerge",
};
let name="Petras";

console.log(name);

function min(...list) {
    let better=[1,2,3,'a','b']
    let mju=better.concat([...list])
    return mju;
    }
    console.log(min('c', 'd',4,5,6))