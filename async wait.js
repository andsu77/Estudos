console.log("ASYN AWAIT");


function rand(min = 0, max = 3){
min *= 1000;
max *=1000;
return Math.floor(Math.random() * (max - min) + min);
}

function esperaai (msg,tempo){
return new Promise ((resole,reject) => {


setTimeout(() => {
if(typeof msg !== "string"){

reject("caiu no erro");

return;
}   

resole(msg.toUpperCase() + " passei na promise");
return;
},tempo);


})



}

// esperaai("fase 1", rand())

// .then((valor)=>{
// console.log(valor);

// return esperaai("fase 2",rand());
// })
// .then((fase)=>{

// console.log(fase);
// return esperaai("fase 3",rand());
// })
// .then((fase)=>{

//     console.log(fase);
// })
// .then(fase => {
// console.log("terminamos na fase:", fase);

// })


// .catch((e) => {
// console.log(e);
// })




// async function executa() {
//     try{
//  const fase1 = await esperaai("fase 1", rand());

//  console.log(fase1)

//  const fase2 = await esperaai("fase 2", rand());

//  console.log(fase2)

//  const fase3 = await esperaai("fase 3", rand());

//  console.log(fase3)
 
//  console.log("teminamos na fase:", fase3);
//     } catch (e) {

//         console.log(e);
//     }


// }

// executa();





//pending - pendente 
async function executa() {
    try{
 const fase1 = await esperaai("fase 1", 1000);

setTimeout(()=>{

console.log("ficou pendente",fase1);


},1100)


 const fase2 = await esperaai("fase 2", rand());

 console.log(fase2)

 const fase3 = await esperaai("fase 3", rand());

 console.log(fase3)
 
 console.log("teminamos na fase:", fase3);
    } catch (e) {

        console.log(e);
    }


}

executa();