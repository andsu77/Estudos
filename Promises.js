/*
function random (min, max) {
min *=1000;
max *= 1000;
return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg,tempo){
return new promise ((resolve , reject)=>{
setTimeout(()=>{
resolve(msg);
},tempo);// marcando tempo de espera
});

}

esperaAi('frase 1', random(1,3))
.then(resposta =>{
    console.log(resposta);
return  esperaAi('frase2',random(1,3));

})
.catch()
*/

// exercicio

// a promisse é um tratamento de erro com a promessa de que irá da certo e se não de retorna error!
function carregarUsuario(nome){
return new Promise((resolve,reject) => {

setTimeout(()=>{ //o set timeout é o tempo de espera para aparecer a mensagem

// se o tipo do nome for diferente de string 
    if(typeof nome != "string" ){
        reject("erro:tipo de de caracter errado");
    }else{
resolve(` Usuario ${nome} carregado com sucesso`);
    }
},2000) // o codigo é executado quando o tempo acabar;


})


}


carregarUsuario(12)
.then(resposta => {
    console.log(resposta);
})
.catch(resposta2 => {

console.log(resposta2)

});