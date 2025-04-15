/* STRING - TEKSTAS, simboliu gtrandinele
Tekstines reiksmes inicijaviams:
-' vienguba kabute
-" dviguba kabute
\ priverčia sekanti simboli buti spausdintinu
\r (return, kursorius grizta i eilutes pradzia)
\n (new line)
\t (tab)
*/


const a='Labas'
console.log(a)

let b='rytas'
console.log(b)
b= 'diena'
console.log(b)


// Vienguba(') kabute,
const k1="vienguba (') kabute."
console.log(k1)

//Dviguba (") kabute.
const k2= 'dviguba (") kabute.'
console.log(k2)

const name = 'Jonas - '
const surname= 'Jonaitis'

const fullname= name + surname
console.log(fullname)

//Vienguba (') ir Dviguba (") kabutes.
const k12= "vienguba (') kabute " + ' dviguba (") kabute'
console.log (k12)

//Vienguba (') ir dviguba (") kabutes.
const k5=  'Vienguba (\') ir dviguba (\") kabutes.';
const k6= "Vienguba (\') ir dviguba (\") kabutes.";
console.log(k5)
console.log(k6)

//naudojame / backslash jis pazymi ir nera spausdinamas

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/
<
console.log('<header>')

const html = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t</nav>\r\n\
</header>'

console.log(html)

const html2 = '\n\n\n\n<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t</nav>\r\n\
</header>'


console.log('-----------------------');

console.log(html2);

console.log('----------');

const studentName = 'Maryte';
const amount = 4
//Maryte yra viena is 4 kuri turi gera masina

const student = studentName+' yra viena is '+ amount+', kuri turi Tesla :)'  

console.log(student)

console.log('-----------')

//Vienguba (') kabute
const b1= `Vienguba (') kabute.`
console.log(b1) 

//Dviguba (") kabute
const b2= 'Dviguba (") kabute.'
console.log(b2) 

//Vienguba (') ir dviguba ("") kabute
const b3= "Vienguba (') kabute."
console.log(b3) 

// const b5='Backtick (/`) kabute'

console.log('333333333333333333');
const b5 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;

console.log(b5);

//vietoje skaičiaus arba kitaip const naudojame tik su 
// backtickais `${amount}`

const studentName1='Maryte'
const amount1=4

//Maryte yra viena is 4 legendiniu studentu

const student1= studentName1+ ' yra viena is '+ `${amount1}`+
' legendiniu studentu.'

console.log(student1)

console.log('------------')
const word = 'pomidoras'
const wordSymbolCounted=9

console.log(word)
console.log(wordSymbolCounted)

const word2='labas'
const wordSymbolCounting= word2.length;

console.log(word2)
console.log(wordSymbolCounting)

const textSize='viskagali'.length
console.log('viskagali '+ textSize)

const x='184168'
const kiekis= x.length

console.log(kiekis, 'kiekskaiciu')



const text= 'Kebabas';
const firstSymbol= text[0];
console.log(firstSymbol)
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);

console.log(text[0]+text[1]);

//Zodyje "Sachmatai pirmoji raide yra "S".

const game='Sachmatai';
const gameSentence=`Zodyje "${game}" pirmoji raide yra "${game[0]}".`
console.log(gameSentence)