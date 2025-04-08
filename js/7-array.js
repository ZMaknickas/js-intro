/*
ARRAY - sąrašas, matrica, masyvas, list'as, einkinys;
*/

const empty = [];
console.log(empty);

const numbers = [7, 777, 13, 666, 2];
//console.log(numbers);

const students = ['Jonas', 'Petras', 'Ona'];
console.log(students);

console(log)(numbers[0]);
console(log)(numbers[1]);
console(log)(numbers[2]);
console(log)(numbers[3]);

console.log(empty.length);

const numbers2 = [10,2,8,4,6];
const totalSum1 = numbers2[0] + numbers[1] + 
number[2]+numbers[3]+ numbers[4]+numbers[5];

const toltalSum2 = 0;
console.log(totalSum2)
totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
console.log(totalSum2);

const toltalSum3 = 0;
console.log(totalSum3)
totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[2];
totalSum3 += numbers[3];
totalSum3 += numbers[4];
console.log(totalSum3);

const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 
    'druska', 'svogunu laiskai', 'lashiniai']

//Patiekalui reikės: a, b, c, d.
const sentence1= 'Patiekalui reikes: ' + dictionary[0] +',' + dictionary[1]+ ',' +
dictionary[2] + ',' + dictionary[3] ;
console.log(sentence1);

let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[0] + ',';
sentence2 += dictionary[1] + ',';
sentence2 += dictionary[2] + ',';
sentence2 += dictionary[3] + ',';
sentence2 += dictionary[4] + ',';
sentence2 += dictionary[5] + ',';
sentence2 += dictionary[6] + '.';
 
console.log(sentence3);

let index =0;

sentence3 +=dictionary[index] + ',';

index += 1;
sentence3 += dictionary[index] + ',';

index += 1;

sentence3 += dictionary[index] + ',';

index += 1;
sentence3 += dictionary[index] + ',';

index += 1;
sentence3 += dictionary[index] + ',';

index += 1;
sentence3 += dictionary[index] + ',';

console.log(sentence3);

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i= 0;
let sentence4 = 'patiekalui reikes: ';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + ',';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);


let j= 0;
let sentence5 = 'patiekalui reikes: ';
sentence5 += dictionary[j++] + ',';
sentence5 += dictionary[j++] + ',';
sentence5 += dictionary[j++] + ',';
sentence5 += dictionary[j++] + ',';
sentence5 += dictionary[j++] + ',';
sentence5 += dictionary[j++] + '.';
console.log(sentence5);

