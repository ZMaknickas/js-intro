function intervalCount(start, end, divider) {
    if(end % 1 !==0) {
        return 'intervalo pabaiga turi buti sveikasis skaicius'
    }
    if(start % 1 !==0) {
        return 'intervalo pradzia turi buti sveikasis skaicius'
    }
    if(divider % 1 !==0) {
        return 'daliklis turi buti sveikasis skaicius'
    }
    if(typeof start === 'string') {
        return 'Intervalo pradzia turi buti skaicius.';
    }
    if(typeof end === 'string') {
        return 'Intervalo pabaiga turi buti skaicius.';
    }
    if(typeof divider === 'string') {
        return 'Intervalo daliklis turi buti skaicius.';
    }
    let count = 0;
   // versija kai einame per kiekviena skaiciu
   //  for (let i = start; i<= end; i++) {
   //    if (i % divider === 0) {
   //    count++;
   // }
   //}  

   const trueStart = start
   for (let i = trueStart; i<= end; i +=divider) {
    count=0;
   }
    // galutinis tikslas yra formule, kurios uzuomina 
    // yra zemiau pateikta lygtis/logika 
    // count =end-start/divider;
    // {count} vienetai.

    return `skaiciu intervale tarp ${start} NUO ir ${end} IKI,
    besidalijanciu be liekanos is ${divider} DALIKLIS yra ${count} KIEKIS vienetai`
}
    /*console.log(intervalCount(0, 11, 3));
    console.log(intervalCount(0, 11, 5));
    console.log(intervalCount(0, 11, 7));

    console.log(intervalCount(1, 11, 7));
    console.log(intervalCount(1, 11, 7));
    console.log(intervalCount(1, 11, 7));

    */

    console.log(intervalCount('asd', 11, 7));
    console.log(intervalCount( 1,'asd', 7));
    console.log(intervalCount(1, 11, 'asd'));

    //console.log(intervalCount(1,11,7));
    //skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 
    // yra 4 vienetai. null, Nan, Infinity, 1.1, [], intervalCount,
    //{}.

    //vaivus optimizuotas variantas
/* const trueStart = start
   for (let i = trueStart; i<= end; i +=divider) {
   count++;
*/