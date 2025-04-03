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
/* Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui:
geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame
paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o
taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri
pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki
kiekvieno miesto
*/
console.log('-----------')
const kelias4 = ['Marijampole', 130, 'Utena', 100, 'Druskininkai', 137, 'Kaunas', 89, 'Molėtai', 66, 'Palanga', 339, 'Birzai',
212, 'Trakai', 30, 'Ignalina', 117, 'Rudamina', 19];
const salygos = ['geras', 'prastas', 'taisomas'];
function vaziavimas(miestas, atstumas, salygos, greitis) {
n = atstumas/greitis
    if (salygos === 'prastas')
    return n*1.5+' '+miestas;
    if (salygos === 'taisomas')
    return n*2+' '+miestas;
else return n+' '+miestas;
}    
for (let i=0; i<19; i+=2) {
    console.log(vaziavimas(kelias4[i], kelias4[i+1], salygos[1], 89))
}
console.log('-----------')
/*
kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų
skaičių ir išvestų resultatą grafiškai. 
PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] 
*/

/*const lyg=[2, 4, 2, 2, 1, 1 ,-1];
let l=0;
function vienodi(a, b) {
    if (a === b && b>=0 && b%1===0)
    l+=1;
    return 'vienodi='+l; 
}


for (let i=0; i<=lyg.length; i++) {
for (let j=i; j<lyg.length; i++) 
console.log(vienodi(lyg[i], lyg[j]))
}
*/

// 3.Susikurkite 7 sarasus, 
// kuriose yra talpinamos skirtingu dienu temperaturos vertes.
console.log('-----------')
let list = [];
const d1 = [3.5, 4, 6, 3, 0];
list.push(d1);
const d2 = [10, 12, 15, 14, 8];
list.push(d2);
const d3 = [8, 9, 13, 16, 6];
list.push(d3);
const d4 = [-1, 2, 4, -2, -2];
list.push(d4);
const d5 = [15, 16, 18, 22, 14];
list.push(d5);
const d6 = [2, 4, 6, 8, 5];
list.push(d6);
const d7 = [7, 10, 14, 13, 10];
list.push(d7);

// a. Vidutine dienos
function vidutine(day) {
    average = sum/day.length;
    return average+' vidutine ketv dienos temperatura';
}
let sum=0;
for (let i=0; i<5; i++) {
    sum+=d4[i];   
}    
console.log(vidutine(d4));
console.log('---------')
// b. Auksciausia dienos
    function auksciausia(day) {
    let biggest= -Infinity;
    for (let i = 0; i < day.length; i++) 
    if (day[i] > biggest) {
    biggest = day[i];
}
    return biggest+' penktos dienos temperatura.';
}
    console.log(auksciausia(d5))

// b. Zemiausia dienos
function zemiausia(day) {
    let lowest= Infinity;
    for (let i = 0; i < day.length; i++) 
    if (day[i] < lowest) {
    lowest = day[i];
}
    return lowest+' penktos dienos temperatura.';
}
    console.log(zemiausia(d5))
    console.log('-------');

// Parašykite funkcija, kuriai davus visas savaites dienas, 
// ji suranda kuria diena buvo žemiausia temperatura, 
// ir kuria diena buvo aukščiausia temperatura.


/* parasykite funkcija kuri apskaiciuotu 
visos savaites vidutine temperatura
*/
console.log('\n3.euzduotis')
vidutineS=0;
const d8 = [];
for (let i=0; i<d1.length; i++) {
    d8.push(d1[i]);
}
for (let i=0; i<d2.length; i++) {
    d8.push(d2[i]);
}
for (let i=0; i<d3.length; i++) {
    d8.push(d3[i]);
}
for (let i=0; i<d4.length; i++) {
    d8.push(d4[i]);
}
for (let i=0; i<d5.length; i++) {
    d8.push(d5[i]);
}
for (let i=0; i<d6.length; i++) {
    d8.push(d6[i]);
}
for (let i=0; i<d4.length; i++) {
    d8.push(d7[i]);
}
for (let i=0; i<d8.length; i++) {
vidutineS +=d8[i];
vidutineV = vidutineS/d8.length;
t=vidutineV.toFixed(2);
}
console.log('Savaites vidutine t: '+t);
