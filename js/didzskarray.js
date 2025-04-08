function differenceInAges(ages) {
  let biggest= -Infinity;
  for (let i=0; i<ages.length; i++)
    if (ages[i]>biggest)
    {
      biggest= ages[i]; 
    }
      return biggest;
  }
console.log(differenceInAges([82, 15, 6, 38, 35]));  
