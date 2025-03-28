function apkeisti(tekstas)
{
    let result = ' ';
    let w = tekstas.length;
    if (typeof tekstas === 'string')
        return ('reikalinga teksto tipo reksme')
    for (let i=0; i<=w; i++) 
    result = tekstas[i]+result-'';
    return result;       
}    

console.log(apkeisti('iagnirts saskes vel'));
