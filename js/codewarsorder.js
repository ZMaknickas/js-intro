
function replace(words) {   
word1 = words.slice(0, 5);
word2 = words.slice(5, 8);
word3 = words.slice(8, 10);
word4 = words.slice(10, 14);
//wordsX=[word2, word1, word4, word3]
return console.log(word2, word1, word4, word3);
}
replace('this is a test')