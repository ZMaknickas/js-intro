/*let i= kint.charAt(1);*/ 
//n raides vieta zodyje

   
for  (let i=0; i<100; i++) {  
if (i%4===0)
    {console.log('fizz')}
else {
    console.log(i)
}
}


for (let i=1; i<100; i++)
{
    if (i%3 === 0) 
        {
        console.log('fizz');    
        } 
        if (i%5 === 0)
            {
            console.log('buzz');
            }
            if (i%15 === 0)
                {
                console.log('fizzbuzz');
                }
                else
                    {
                    console.log(i);
                    }
}

for (let i=2; i<=20; i++) {
    if (i%2 === 0)
    {
        console.log(i, 'even');
    }
        else
        {
        console.log(i, 'odd'); 
        } 
}

console.log('--------' + 'fibonnacci'+'-------');

let xf = 1;
let y = 2; 
let z = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log(xf);
    } else if (i === 2){
        console.log(y)
         } else {
            z = xf + y;
            xf = y;
            y = z;
            console.log(z);
            }
        }

const x= 6;
console.log('daugyba') 
    for (let i=1; i<=10; i++) 
    {
        console.log(`${i} * ${x}=${i * x}`);
    }

//Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30,
//  bet tik tuos, kurie dalijasi iš 2 arba 3.


for (let i=1; i<=30; i++) 
{
    if (i%6 === 0)
    {
        console.log(i);
    }
}


for (let i=1; i<4; i++)
{ 
if (i%1 === 0)
console.log(i + ' skaiciai pirminiai')
}

console.log('-----------------')

for (let start=-2; start<=5; start++){
    if (start%start === 1) 
        {
        console.log(start + ' turime pirmini skaiciu');
        }
        if (start < 0)
            {
            console.log(start + ' turime nepirminy skaiciuu');
            }
            else 
            {
                console.log(start + ' pirminis')
            }
}
// Sukurkite for cikla, kad patikrintumete, ar skaicius yra pirminis, 
// ir isspausdintumete pranesima.

function interval(a, b)
{
    return a + b;
}
const e = interval(2, 6);

//isspaudinkite visu lyginiu skaiciu nuo 1 iki 100


const b = [];
for (let i=0; i<=100; i+=2) 
{    
    b.push(i);
    let d = 0;
}
    {
    d = 0;    
    for (let i=0; i<=50; i++)
    d += b[i];
    }  
{    
    console.log(d);
}
    //console.log(n +='*')