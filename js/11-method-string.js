


const text = 'Pomidoras';
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);

// includes
console.clear(); 
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

// startsWith
console.clear;
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('m'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('doras'));

// endsWith
// indexOf
console.log('\nindexOf');
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

const k = 'kulverstukas';
console.log(k.indexOf('u', k.indexOf('u')+1));

//'asfd'. meta sarasha metodu su stringais...

// repeat tekstas.repeat 

console.clear();
console.log('n\repeat');
console.log('a');


const symbol = 'm';
const megaSymbol = symbol.repeat(10);
console.log(symbol);
console.log(megaSymbol)

function stringRepeat(text, count) {
    let result = '';
    for (let i= 0; i<Math.floor(count); i++) {
        result +=text;
    }
    return result;
}
console.log(stringRepeat('rikiki', 3));

// replace
console.clear();
console.log('\nreplace');

const summer='vasara'.replace('a', '-')
console.log('vasara'.replace('a','A'));

// chain (keletas kartu replace)

const summer2= 'vasara'.replace('a','-').replace('a', '-');

// replaceAll
console.log('\nreplaceAll')
console.log('vasara'.replaceAll('a','-'));

console.log('spausdintinu simboliu')
const hi = 'Labas rytas, Lietuva!';
const x= hi.replace(' ', '');
console.log(x.length);

console.log('\ntoUpperCase');
console.log('Labas'.toUpperCase());

console.log('\ntoLowerCase');
console.log('LAbas'.toLowerCase());

// slice
console.log('\nslice');
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(3, -3));
console.log('pomidoras'.slice(-3));
