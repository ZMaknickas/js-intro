//i
//0 [yrxy.lrntg]


function stringReverse(text) {
let result=' ';

for (let i = 0; i<=text.length; i++) {
    result += text[text.length - i];
} 
//result='' + text[3-0];
//result=text[3] + text[2];
//result=text[2] + text[1]


return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('sula'));
console.log(stringReverse('sedek'));
console.log(stringReverse('sachmatai'));
console.log(stringReverse('saskes'));

//a a
//b ba
//c cba
/*
function stringReverse(text) {
    let result = '';
     
    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    } 
    
    return result;

    }

    function stringReverse(text) {
        if (typeof text !=='string') {
            return 'Reikalinga string tipo reiksme.';
        }
        let result=' ';
        for  (let i = 0; i < text.length; i++) 
                result = text[i] + result;
    return result;            
*/