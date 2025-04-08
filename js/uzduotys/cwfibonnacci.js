function tribonacci(g,n) {
    let gal =[];
    let xf =g[0];
    let y = g[1]; 
    let z = g[2];
        if (g.length===0)
          return gal;
            if (n===0 || typeof xf==='string' || typeof y==='string' || typeof z==='string') 
            return gal;
            else 
            for (let i = 1; i <= n; i++) {
              z = xf + y;
              xf = y;
              y = z;
              gal.push[z];     
            }
        return gal;
}

console.log(tribonacci([1,1,1],10))