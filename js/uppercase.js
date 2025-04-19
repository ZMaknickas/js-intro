function capitalizeWord(phrase) {
const str= phrase.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
return str;
}
console.log(capitalizeWord('biker gang member'));
