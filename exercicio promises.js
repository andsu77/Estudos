/*
### 🛒 Desafio — Carrinho de Compras Assíncrono com `Promise.all`

Imagine que você está desenvolvendo o sistema de finalização de um e-commerce. O usuário está tentando fechar um pedido, e o sistema precisa validar 3 coisas diferentes em paralelo antes de aprovar a compra:

1. **Validar o Estoque:** Verificar se o produto tem quantidade disponível.
2. **Validar o Cupom de Desconto:** Conferir se o código do cupom é válido.
3. **Validar o Saldo do Cartão:** Simular a verificação se há limite disponível.

#### 📝 Regras da Atividade:
/*
1. Crie três funções que retornam **Promises**:
* `verificarEstoque(produto, quantidade)`: Demora **1,5 segundos**. Se a quantidade for maior que 10, rejeita a promise com o erro `"Estoque insuficiente para o produto!"`. Caso contrário, resolve com `"Estoque OK"`.*/
function verificarEstoque(produto,quantidade){
return new Promise((resolve,reject)=>{


  setTimeout(()=>{

    if(quantidade > 10){
reject("estoque insuficiente para produto");


    }else{

resolve("estoque ok");

    }




  },1500)





})
}

/* `verificarCupom(cupom)`: Demora **1 segundo**. Se o cupom for diferente de `"DESCONTO10"`, rejeita com `"Cupom inválido!"`. Se for igual, resolve com `"Cupom aplicado com sucesso!"`.
*/
 
function verificarCupom(cupom){
return new Promise((resolve,reject)=>{

setTimeout(()=>{

if(cupom !== "DESCONTO"){

reject("Cupom inválido");

}else{

resolve("Cupom aplicado com sucesso");

}


},1000)

})

}




 
/* `verificarSaldo(valor)`: Demora **2 segundos**. Se o valor da compra for maior que 500, rejeita com `"Saldo insuficiente no cartão!"`. Se for menor ou igual, resolve com `"Saldo aprovado!"`.
*/


function verificarSaldo (valor) {
return new Promise ((resolve,reject)=>{

setTimeout(()=>{

if(valor < 500) {

reject("SALDO INSUFICIENTE NO CARTÃO");


}else{

  resolve("saldo aprovado");

}



},2000)



})



}



/*

2. Use **`Promise.all()`** para executar essas três validações **ao mesmo tempo**.
3. Faça o tratamento com `.then()` para exibir todas as mensagens de sucesso caso **todas** as promessas passem, e um `.catch()` para capturar o erro caso **qualquer** uma delas falhe.
*/

const promises = [

verificarSaldo(500),
verificarCupom("DEaa"),
verificarEstoque("lanchonete",15)

];


Promise.all(promises).then(resolve => {

  console.log(resolve);



})



.catch(reject =>{

console.log(reject);

})



/*
### 🧪 Cenários para testar:

* **Teste 1 (Sucesso total):** `produto = "Notebook"`, `quantidade = 3`, `cupom = "DESCONTO10"`, `valor = 400`.
* **Teste 2 (Falha no estoque):** `quantidade = 15`.
* **Teste 3 (Falha no cupom):** `cupom = "PROMOCAO_ERRADA"`.

Mande o seu código aqui quando terminar! Vamos ver como você se sai combinando várias promises de uma vez só. 🚀*/






