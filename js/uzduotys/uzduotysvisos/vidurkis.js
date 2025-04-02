/*
function MokinioVidurkis(mokinys) 
 console.log('Mokinio vardas:' + mokinys[0])
 let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5]/5);   
 if (vidurkis>=3.5)
        {console.log('mokinio vardas ' + mokinys[0] + "islaike" +" vidurkis " + vidurkis)}; 
    else 
    let vidurkis2 =(vidurkis *5)+10/6;
        console.log(mokinys[0] + ' neislaike. Jo dabartinis vidurkis' + vidurkis);
        console.log(vidurkis2);
if (vidurkis2<=3.5);
 {consolelog(mokinys[0] + 'neislaikys ir su papildomu 10')};

MokinioVidurkis(mokinys1)
MokinioVidurkis(mokinys2)
MokinioVidurkis(mokinys3)
*/

const mokinys1 = ['Tadas', 7, 8, 8, 6, 9];
const mokinys2 = ['Ona', 8, 6, 7, 4, 8];
const mokinys3 = ['Gabija', 3, 3, 3, 4, 4];

function mokinioVidurkis(mokinys) {
console.log('Mokinio vardas:' + mokinys[0]);

let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5])/5;
let vidurkis2 = (vidurkis *5+10)/6;
console.log(vidurkis);

if (vidurkis >= 3.5) {
        console.log('Mokinio vardas ' + mokinys[0] + " islaike vidurkis " + vidurkis);
    } 
    else if  (vidurkis2 >= 3.5) { 
    console.log(mokinys[0] + ' neislaike, islaikytu su papildomu 10 ' +'______'+ vidurkis2);
}
else {
console.log('neislaikys')}
}

mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);
