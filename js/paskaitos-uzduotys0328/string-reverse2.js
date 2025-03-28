function stringrev(text)
{let result=' ';
    let x= text.length;
    for (let i=1; i<=x; i++)
    result = text[i]+result;
        
    return result; 
}

console.log(stringrev('saskes'));
console.log(stringrev('abc'));