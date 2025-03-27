
function tusciaFunkcija() {
return
   { console.log(false)}
   }


function skaitmenys(a) {
    if (typeof(a) !== 'number') {    
    console.log('Pateikta netinkamo tipo reiksme')
}   
else { 
let ilgis = a.toString().length 
console.log('Skaiciaus ilgis '+ ilgis)}
}


skaitmenys(5)
skaitmenys(781)
skaitmenys(37060123456)
skaitmenys('true')
skaitmenys('asd')
skaitmenys('NaN')



function didziausiasSkaiciusSarase(skaiciai) {
   if (Array.isArray(skaiciai) == false) 
   console.log('Pateikta netinkamo tipo reiksme.')
   if (skaiciai == ' ')
   console.log('Pateiktas sarasas negali buti tuscias.')
let skaiciuKiekis = skaiciai.length;
for (let i=0; n<skaiciuKiekis; i++)
   {
      if (skaiciai[i] > skaiciai[i+1])
   skaiciai[i] = skaiciai[i+1];
   }
   
    console.log(didziausiasSkaiciusSarase);
   }

didziausiasSkaiciusSarase([1]) 
didziausiasSkaiciusSarase([1, 2, 3])
didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18])
didziausiasSkaiciusSarase([69, 69, 69, 69, 66])
didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8 ])
didziausiasSkaiciusSarase(['pomidoras']);
didziausiasSkaiciusSarase[('')]


