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

// exercicio:

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


//exercicio2 


/**
 * 🧩 Desafio — Promise: Cadastro de Produto

Crie uma função chamada cadastrarProduto que receba:

nome
preco

A função deve retornar uma Promise.

Regras:

O cadastro deve demorar 2 segundos para responder.
nome precisa ser uma string.
preco precisa ser um number.
preco deve ser maior que 0.
Se todas as informações forem válidas, a Promise deve ser resolvida informando que o produto foi cadastrado.
Se alguma informação for inválida, a Promise deve ser rejeitada informando o erro.

Depois, faça o tratamento usando .then() e .catch().

🧪 Teste seu programa

Faça pelo menos estes testes:

"Teclado", 150
123, 150
"Mouse", "100"
"Monitor", 0
"Notebook", -500

Objetivo: você deve descobrir sozinho como estruturar a validação e o fluxo da Promise.

Quando terminar, mande seu código aqui. Eu vou analisar sem corrigir por você e vou te fazer perguntas para você mesmo encontrar os erros.
 * 
 * 
 * 
 * 
 */


function cadastrarProduto(nome,preco){
return new Promise ((resolve,reject)=>{
setTimeout(()=> {
if(typeof nome != "string"){

reject(`o tipo do ${nome} deve ser string`);


}

else if(typeof preco != "number"){

reject(`o tipo do ${preco} é diferente do tipo number`);

}
else if(preco <= 0){

    reject(`valor de ${preco} está abaixo`);
}
else{

    resolve(`o produto ${nome} foi cadastrado com sucesso`);
}

},2000)


})


}



cadastrarProduto("Teclado",150).then(produto =>{
console.log(produto); 


}) 
.catch(produto2 => {

console.log(produto2);

});


cadastrarProduto(123,150).then(produto => {
console.log(produto);

})

.catch(produto2 => {

console.log(produto2)

})

cadastrarProduto("Mouse","100").then(produto =>{
console.log(produto);


}).catch(produto2 => {

    console.log(produto2);


})


cadastrarProduto("Monitor",0).then(produto =>{
console.log(produto);


}).catch(produto2 => {

    console.log(produto2);


})


cadastrarProduto("Motebook",-500).then(produto =>{
console.log(produto);


}).catch(produto2 => {

    console.log(produto2);


})


