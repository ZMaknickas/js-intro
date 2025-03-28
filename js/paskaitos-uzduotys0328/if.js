/* palyginimo salyga
palyginimo operatoriai:
-visi: >,<, >=, <=, ==, ===, !=, !== (ar lygu, ne lygu)
-naudotini: >,<, >=, <=, ===, !==
-nenaudotini:==,1=

Kodo sablonai:
if () {} 
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if ... else {}
*/


console.log('START')
if (4>2) {
    console.log('--- taip');
} else {
    console.log('--- ne');    
}

console.log('END')

console.clear();

const temp = -2;

if (temp >= 18) {
    console.log('silta');
} else {
    console.log('salta');
}

//jei zemoioau 0
//jei zemiau 10
//jei zemiau 22
//jei daugiau 


const temp2 = 30;
console.log('lauko temperatura yra '+ temp2 + ' laipsniu, todel jums yra ')

if (temp2 < 0) {
    console.log('salta');
} else if (temp2 < 10) {
    console.log('meh');
} else if (temp2 < 22) {
    cosole.log('silta');
} else console.log('karsta');

