function apkeisti(tekstas)
{
    let result = ' ';
    let w = tekstas.length;
    if (typeof tekstas === 'string')
    for (let i=0; i<w; i++) 
    result = tekstas[i]+result;
    return 'reikalinga teksto tipo reksmele'+result;       
}    

console.log(apkeisti('carribean-labas-laivas-baj-saskes'));
