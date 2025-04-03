for (let i=0; i<500; i++){
    if (i===1 || i===2 || i===5 || i===10 || i===50 || i===100 || i===200 || i===500)
    {
    console.log(i);
    }
}


const raides = ['L', 'a', 'b', 'a', 's'];
let ='';
for (i=0; i<raides.length; i++) {
    let+=raides[i]
}
{
console.log(let);
}

const zodisP='Programavimas';
for (let i=0; i<zodisP.length; i++) {
    console.log(zodisP[i])
}

// ar perduotas zodis yra labas
console.log('\nnauja uzduotis')

function duotas(zodis) {
if (zodis === 'labas') 
return true;
else
return false;
}

console.log(duotas('labas'))

console.log('\nnauja uzduotis')
function vienodi(zodis1, zodis2) 
{
    if (zodis1===zodis2) 
    console.log(true);
    else
    console.log(false);
}
vienodi('labas', 'Labas')
vienodi('Labas', 'Labas')