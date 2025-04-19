function openOrSenior(data){
    let ymca=[];
    for (const feat of data) {
    if (feat[0]>=55 && feat[1]<7){  
    ymca.push("Senior");
    console.log(ymca);}
    else ymca.push("Open");
    }  
    return ymca;
    }
      
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 2]]));