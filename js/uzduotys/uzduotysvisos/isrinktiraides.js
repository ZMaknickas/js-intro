function teks(tekst, a) {
    let result = ' ';
   if (typeof tekst !== 'string') 
    return 'pirmasis kintamas nera teksto tipo';
   if (tekst === 'number')
    return 'Pirmasis kintamasis turi buti tekstas';
else if (tekst !== '' && tekst.length>100)
    return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
if (typeof a !== 'number')
    return 'Antrasis kintamasis yra netinkamo tipo';
if (a<=0)
    return 'Antrasis kintamasis turi būti didesnis uz nuli';
if (tekst.length<a)
    return 'Antrasis kintamas turi būti ne didesnis už teksto ilgi.';
for (let i=0; i<tekst.length; i+=a)
    result +=tekst[i];
    return result;
}

console.log(teks('abcdefg', 2));
console.log(teks('abcdefghijkl', 3));
console.log(teks('abc', 0));
console.log(teks('1561', 2));

// Dalyba

function dalyba(a,b) {
    if (typeof a === 'NaN')
        return 'Pirmas kintamasis turi buti normalus skaicius.'
    if (a%1 !== 0) 
       return 'Pirmas kintamsis turi buti sveikasis skaicius.'
    if (a === 'Infinity' || a=== '-Infinity')
        return 'Kintamasis turi buti normalus skaicius';
    if (typeof a === 'string')
        return 'Pirmasis kintamasi negali buti eilute'
    if (a === 0 || b === 0)
        return 'Dalyba is nulio negalima.';
    if (a === 'undefined') 
        return 'a kintamasis turi buti normalus skaicius.';
    if (b === 'undefined')
        return 'b kintamasis turi buti normalus skaicius.';
    if (b%1 !== 0)
        return 'b kintamasis turi buti sveikasis skaicius.';
    c = a/b;
    return c;
}

console.log(dalyba(10,5));
console.log(dalyba(5,10));
console.log(dalyba(33, 7));
console.log(dalyba(-4, NaN));
console.log(dalyba(-1,0));
