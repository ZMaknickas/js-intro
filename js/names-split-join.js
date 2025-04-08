/*
Funkcija, gauna, sakini, kuris atrodo taip:
"Studentas: jonas, Maryte, peTRas, ONA."
Funkcijos darbas yra grazinti teisingai perrasyta sakini.
t.y. reikia istaisyti vardu rasyma.
pvz.: "Studentai: Jonas, Maryte, Petras, Ona."
*/

/*
- o
*/

/*
- atsiskiriame vardus is originalaus teksto
- konvertuojame teksta i mazasias raide (stringa)
- isskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir:
    - pasiima pirma raide
    - ja padidina
    - apjungia galutini reikiama sakini
-pagaminame galutini reikiama sakini
*/

function correctSentence(text) {
    const parts = text.split(': ');
    const names = parts[1]
        .slice(0,-1)
        .toLowerCase()
        .split(', ')
 //   console.log(parts);
 //   console.log(names);
    for (let i=0; i<names.length; i++) {
        const name = names[i];
        let firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);
        const newName = firstLetter + restName;
        console.log(name, '---', firstLetter, restName);
        names[i]= newName;
        }

    return parts[0]+ ': '+names.join(', ')+'.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, PeTras, Maryte, ONA.'));