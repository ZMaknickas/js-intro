function distinct(a) {
  let end=[];
  if (a.length=0)
  return a;
  for (let i=0; i<=a.length; i++){
  for (let p=1; p<=a.length; p++)
  if(a[i]!=a[p])
  end.push(a[i])}
  return end;
  }
  console.log([2,3,4,2,4,3,2]);
  console.log([1]);