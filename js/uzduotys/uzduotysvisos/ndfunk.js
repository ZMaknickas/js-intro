
function tusciaFunkcija(a)
{
   return 'false';
} 
console.log(tusciaFunkcija(['']));

function skaitmenys(b) 
{
      {if (typeof b === 'string') 
         return 'Netinkamo tipo reiksme'}
      {if (typeof b === 'number')     
      c =b.toString(); 
      return 'Skaiciaus ilgis '+ c.length;}
      
}   

console.log(skaitmenys(5));
console.log(skaitmenys(781));
console.log(skaitmenys(37060123456));
console.log(skaitmenys('true'));
console.log(skaitmenys('asd'));
console.log(skaitmenys('NaN'));


function didskait(skaiciai) 
{
   if (skaiciai === ' ')
   return 'Pateiktas sarasas negali buti tuscias.'; 
   if (typeof skaiciai === 'string') 
      return 'Pateiktas netinkamo tipo kintamas';
   if (typeof skaiciai ==='array')
      if (array.length === 1)
         return skaiciai[0];
   let biggest = -Infinity;
   for (let i = 0; i < skaiciai.length; i++) {
         }
          if (skaiciai[i] > biggest) {
              biggest = skaiciai[i];
         }
}
  
      return biggest;
      
  

console.log(didskait([1])); 
console.log(didskait([1, 2, 3]));
console.log(didskait([ -5, 78, 14, 0, 18]));
console.log(didskait([69, 69, 69, 69, 66]));
console.log(didskait([-1, -2, -3, -4, -5, -6, -7, -8 ]))
console.log(didskait('pomidoras'));
console.log(didskait(''));

