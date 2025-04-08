let zodis='';

if (4>2) {
    zodis='daugiau';
}else{
    zodis='maziau';
    }
console.log(zodis);

let skaicius=0;

if (7<=5) {
    skaicius=7;
}else {
    skaicius=5;
}

console.log(skaicius);
//klausimas ? teigiama : neigiama (if else supapratintas i viena eilute)

const word=4 > 2 ? 'daugiau':'maziau';
console.log(word);

const number = 7 >=5 ? 7:5;
console.log(number);

//visi skaiciai yra pozityvus
//isskyrus-nuli

if (0.4) {
    console.log('Taip'); }
else {
    console.log('ne');
}

// visi tekstai yra pozityvus isskyrus tuscia.
// vis array yra pozityvus.
// vis objektai yra pozityvus.
// undefined - false.
// null - false.
console.clear()

const a= 0 ? 1 : 2;
console.log(a);

const b=1 ? 2 : 3
console.log(b);

const d = 2 ? 3 ? 4 : 5 : 6;
console.log(d);

const c=2 
    ? 3 
        ? 4 
        : 5 
    : 6;
console.log(c);
