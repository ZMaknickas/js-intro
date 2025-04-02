/*     Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).
        a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
km/h greičiu per y valandų.
*/

let kelias = ['Kaunas', 89, 'Marijampole', 130, 'Utena', 100, 'Druskininkai', 137, 
    'Molėtai', 66, 'Palanga', 339, 'Birzai',  212, 'Trakai', 30, 'Ignalina', 117, 'Rudamina', 19];

function kelione(gr, laik) {
    let a = 0;
    a = gr*laik;
    for (let i=1; i<=15; i+=2)
    sk1= a - kelias[i];
    for (let i=3; i<=17; i+=2)
    sk2= a - kelias[i];
    if (sk1>0 && sk2>0 && sk1<sk2)    
    return 'Tolimiausias miestas, kuri galima pasiekti'+gr+'greiciu'+'per'+laik+'valandu'+ kelias[i];
}

console.log(kelione(80, 2));