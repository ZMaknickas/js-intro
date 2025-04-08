function people(x){
let sum1 =0;
let sum2 =0;
const peoplein= x.map(peo=> peo[0]);
const peopleout= x.map(pe=> pe[1]);
for (let i=0; i<peoplein.length; i++) {
sum1 +=peoplein[i]
sum2 +=peopleout[i]}
const number = sum1-sum2;
return number;
}

  console.log(people([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));