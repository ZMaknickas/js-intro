// vardas Aidas;
let vardas= 'Aidas';
vardas.split('').reverse().join(',');
console.log(vardas);

a = [1, 2, 3, 4];
for (let i= 0; i<a.length; i++)
if (a[i] === 3)
    lex=i+1;
    console.log('sarase 3 yra --> '+lex);

/*
 Patikrinkite, ar sąrašas [] yra tuščias
 */
a = [];
if(a.length===0)
console.log('sarasas yra tuscias');

/* Patikrinkite ar 
sarase [1, -2, 3, -4] yra teigiamu skaiciu.
*/

a= [1, -2, 3, -4]
for (let i=0; i<a.length; i++)
    if (a[i]<0)
        console.log('')
else console.log('sarase yra teig skaiciu')

/*
Patikrinkite, ar [2, 4, 6] 
yra tik lyginiai skaiciai.
*/    

a = [2, 4, 6] 
for 