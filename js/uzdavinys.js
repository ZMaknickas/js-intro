function bingo(a) {
let result1=[];
let result2=[];
let alph=a.split('')
for (const letter of alph){
result1.push(letter);
result1.push(letter.charCodeAt(0));
result2.push(letter.toUpperCase());
result2.push(letter.toUpperCase().charCodeAt(0));
}    
return '['+result1+']'+'['+'\nDIDZIOSIOS---['+result2+']';
}console.log(bingo('abcdefghijklmnopqrstuvwxyz'));

const mazos=[a,97,b,98,c,99,d,100,e,101,f,102,g,103,h,104,i,105,j,106,k,107,l,108,m,109,n,110,o,111,p,112,q,113,r,114,s,115,t,116,u,117,v,118,w,119,x,120,y,121,z,122];

const didziosios=[A,65,B,66,C,67,D,68,E,69,F,70,G,71,H,72,I,73,J,74,K,75,L,76,M,77,N,78,O,79,P,80,Q,81,R,82,S,83,T,84,U,85,V,86,W,87,X,88,Y,89,Z,90];
B2
I9
N14
G7
O15