function multiply(number){
  let nmp=Math.abs(number);
  let nma=nmp.toString();
  let loma=nma.length;
  console.log(loma);
  let end=number*5**loma;;
    return end;
  }
console.log(multiply(10));
