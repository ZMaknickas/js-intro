function solution(digits){
    let result=[];
    let new=''+digits;
    let list=digits.slice(0,5);
    console.log(list);
    result.push(list).replaceAll("''", "" );
    for (let i=1; i<digits.length; i++){
    new.slice(i,i+5).replaceAll("''", "" );
    result.push(digits);
    }
    return Math.max(result);
    }
console.log(solution(121356765478654));