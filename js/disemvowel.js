function disemvowel(str) {
    const spec="aeiouyEIAOUY";
    let g="";
    for (let i=0; i<str.length; i++) 
    {
    if(!spec.includes(str[i]))
    g+=str[i]
    }
    return g;
}
console.log(disemvowel("This website is for losers LOL!"));