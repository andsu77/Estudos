
function random (min, max) {
min *=1000;
max *= 1000;
return Math.floor(Math.random * (max - min) + min);



}

function esperaAi(msg,tempo){

setTimeout(()=>{

console.log(msg);


},tempo);// marcando tempo de espera

}

esperaAi("olá seja bem vindo!4",random(1,3));
esperaAi("olá seja bem vindo!2",random(1,3));
esperaAi("olá seja bem vindo!3",random(1,3));
