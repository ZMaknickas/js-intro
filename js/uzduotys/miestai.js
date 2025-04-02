/*     Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).
        a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
km/h greičiu per y valandų.
*/

        
const kelias = ['Marijampole', 130, 'Utena', 100, 'Druskininkai', 137, 'Kaunas', 89, 'Molėtai', 66, 'Palanga', 339, 'Birzai',
      212, 'Trakai', 30, 'Ignalina', 117, 'Rudamina', 19];
function kelione(miestas, atstumas, laikas) {
    let x = 80;
    let kelione = x*laikas;    
    if (kelione>=atstumas)
        return miestas;
    else 
    return 'kitur nenuvaziuosime';
}

for (let i=0; i<=19; i+=2) {
console.log(kelione(kelias[i], kelias[i+1], 1.5))}
console.log('---------------')
//Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
//valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)
const kelias2 = ['Marijampole', 130, 'Utena', 100, 'Druskininkai', 137, 'Kaunas', 89, 'Molėtai', 66, 'Palanga', 339, 'Birzai',
    212, 'Trakai', 30, 'Ignalina', 117, 'Rudamina', 19];

function spetume(miestas, atstumas, norimasl) {
    laikasmin = atstumas/120;
    if (laikasmin<=norimasl)
    return 'Pasiektume miesta '+ miestas;
    else 
    return miestas + ' nepasieksime vaziuodami 120km/h per '+norimasl+' h';
}

for (let i=0; i<=19; i+=2) {
    console.log(spetume(kelias2[i], kelias2[i+1], 1.5))}

/*Parasykite funkcija, kuri nurodytu i koki tolimiausia miesta mes galetume
nuvaziuoti su k kiekiu pinigu, jei uz viena litra degalu turime moketi j euru.
Kelione pradedame su 30 litru benzino bakelyje, uz kuriuos moketi nereikia.
Nuvaziuodami viena kilometra sudeginame x kieki degalu.
*/
console.log('----------------');
const kelias3 = ['Marijampole', 130, 'Utena', 100, 'Druskininkai', 137, 'Kaunas', 89, 'Molėtai', 66, 'Palanga', 339, 'Birzai',
    212, 'Trakai', 30, 'Ignalina', 117, 'Rudamina', 19];

function toliausia(miestas, atstumas, k, j, x) {
    isLiter = k/j;
    isLiter+=30;
    atstumas2 = isLiter/x;
    if (atstumas2>atstumas)
        return 'Nuvaziuotume i miesta '+miestas;
    else 
        return 'Nuvaziuoti '+ atstumas +'km truksta pinigu'; 
}

for (let i=0; i<=19; i+=2) {
    console.log(toliausia(kelias3[i], kelias3[i+1], 50, 1.8, 0.4))}