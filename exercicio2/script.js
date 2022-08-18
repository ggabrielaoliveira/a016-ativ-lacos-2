const num=prompt("Qual o numero vc quer ver a tabuada ?");
const tabuada= [1,2,3,4,5,6,7,8,9,10];
let i=0
for(i in tabuada){
    console.log(`${num} x ${tabuada[i]}= ${tabuada[i]*num} `)
}