function people(busStops){
  let l=busStops.length  // Good Luck!
  let x=[];
  let sum=0;
  let sum2=0;
  for(let i=0; i<l; i++) {
  x.push(busStops[i][i], busStops[i][i+1])};
  for (let i=0; i<x.length-2; i+=2) {
    sum+=x[i]
    sum2+=x[i+1]
  }   
return x;  
}

  console.log(people([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));