/* reikalinga funkcija, kuri gauna teksta,
kuri grazina rezultata, priklausomai nuo teksto ilgio.
-jei tuscias: "Tuscias tekstas"
-jei maziau 10 simboliu: "Trumpas tekstas is N simboliu"
- jei maziau 20 simboliu: "Tekstas is N simboliu"
-jei ilgesnis: "Ilgas tekstas is N simboliu" 
*/

function textSize(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';   
    }
    if (text.length < 10){
        return `Trumpas tekstas is ${text.length} simboliu`;
    }
    if (text.length < 20){
        return `Tekstas is ${text.length} simboliu.`;
    }
    return `Ilgas tekstas is ${text.length} simboliu.`;
}


console.log(textSize(''));
console.log(textSize('labas'));
console.log(textSize('labanaktis'));
console.log(textSize('virs desimt'));
console.log(textSize('Labas rytas, Lietuva!'))
