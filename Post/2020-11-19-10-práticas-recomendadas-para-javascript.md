---
title: 10 práticas recomendadas em JavaScript.
description: As 10 práticas recomendas pelos melhores desenvolvedores de javascript
date: 2020-11-19T01:32:23.658Z
image: /assets/img/javascript.png
category: JS
background: "#FFD700\t"
---
## Não use '==' para operadores.

Em Javascript temos os operadores == e ===, o operador == e usado para comparar dois valores mesmo que estes valores sejam de tipos diferentes , ja o === compara se os valores são do mesmo valor e tipo (string,number)

## Use 'let' ao invés de 'var'

\
o tipo de variável 'var' pode ser usada em todo o contexto do bloco, mesmo após o fechamento de um 'for'a variável pode ser mudada o que pode causar bugs, ja o 'let'e usado somente no contexto do bloco, evitando assim erros ou falhas.

## Use variáveis imutáveis como 'const'

ao menos que você tenha uma variável que pode mudar na sua execução, o uso de const e recomendado.

```
const x = 1 
console.log('resultado',x)
// resutado 1 

// exemplo 2 
const x = 1 
x = 1 
console.log('resultado',x) 
// Error: Identifier 'x' has already been declared
```

## Use arrow function o máximo que puder.

Com a introdução do ES6 , surgiram novos métodos de criar funções 

Alguns exemplos

```
// Método 1 
let sum = function(a, b) {
    return a + b;
  };
// Método 2 
let sum = (a, b) => { // usando arrow function
    return a + b;
  };
// Método 3 
let sum= (a,b) => a+ b ; // este método não precisa de return
```

Usar Arrow functions evita içamentos em javasript , você pode ver mais sobre içamentos [aqui.](https://medium.com/devzera/um-guia-para-entender-javascript-hoisting-com-vari%C3%A1veis-usando-let-e-const-45e0a62b16e2)

## Use funções puras

Funções puras não são alteradas mesmo após várias chamadas , isto pode te ajudar a testar a função e principalmente a depura-la. 

Exemplo de uma função impura. 

```
array=[1,2,3,4,5];
const doubleArrayValuesImpure= (array)=>{

    for (const number in array) { 

   array[number] = array[number] *2 ; 

    }
    return array; 
    }
// Executamos a função e mudamos os valores multiplicando por 2 
// cada valor do array 

// Executando a mesma função várias vezes 
console.log(doubleArrayValuesImpure(array)) ;
console.log(doubleArrayValuesImpure(array)) ;
console.log(doubleArrayValuesImpure(array)) ;

/*Output:
[ 2, 4, 6, 8, 10 ]
[ 4, 8, 12, 16, 20 ]
[ 8, 16, 24, 32, 40 ]
*/

// observe que os valores são alterados após várias execuções
// isto torna a função impura.
```

Usando uma função pura:

```
const doubleArrayValuesPure= () => array.map(number => number *2) ; 

console.log("Retornos de uma função pura")
console.log(doubleArrayValuesPure(array));
console.log(doubleArrayValuesPure(array));
console.log(doubleArrayValuesPure(array));
/*Output:
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ]
*/
```

perceba que mesmo chamando a função 3 vezes os valores não se alteram. 

## Nomeie as coisas corretamente

Nos temos a tendência de ser preguiçosos ,e sofremos depois que temos que dar manutenção no mesmo código.

```
// Jeito Errado
let ad="Rua dos bobos numero 0";
let c="São Paulo";

// Jeito Correto.
let adress="Rua dos bobos numero 0";
let city="São paulo";
```

## Use Promises

Existem algumas maneiras de se trabalhar com promises , algumas bem complicadas que vão tornar sua vida um inferno e o seu código uma árvore de natal. 

```
console.log("before");

getUser(1,(user)=>{
    console.log("username:",user.github);
    getRepo(user.github,(repo)=>{
        console.log("Repositories are " + repo);
        getCommits(repo[0],(commit)=>{
            console.log("Commits")
        })
    })
})


function getUser(id,callback   ){
    setTimeout(()=>{
        console.log("reading user from database")
    callback({ id:id*2,github:'hrithwikbharadwaj'});
},2000)
}

function getRepo(username,callback){
    setTimeout(()=>{
        console.log("reading repo from "+username);
        callback(['repo1','repo2','repo3']);
    },2000)

}
function getCommits(repo,callback){
    setTimeout(()=>{
        callback(repo);
    },300);
}

console.log("After")
```

aqui um exemplo de um código usando promises . 

```
console.log("antes")

getUser(1)
.then(user=> getRepos(user.github)) // o usuário  esta disponível ?
.then(repos=>getCommits(repos[0])) // ah ok , encontre agora o primeiro repositório
.then(commits=>console.log("commit name: ",commits)); // encontrou o repositório? então agora me mostre os commits



function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("reading user from database")
    resolve({ id:id*2,github:'hrithwikbharadwaj'});
},2000);
    })

}

function getRepos(username){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        console.log("reading repo from "+username);
        resolve(['repo1','repo2','repo3']);
    },2000);
     });


}
function getCommits(repo){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(['commits']);
    },2000);
   });
}

console.log("depois")
```

existem maneiras mais fáceis ainda de usar Promises utilizando por exemplo async/await , isto fica para um próxima. 

## Escreva funções para tudo

Normalmente nos criamos funções para muitas coisas, mais por alguns motivos não escrevemos para tudo , o que torna depois um código de difícil manutenção. 

```
// Código ruim
let number1=2;
let number2=5;

let sum= number1+number2;

// Bom
const sum = (number1,number2) =>{
    return number1+number2;
}

console.log(sum(2,3))
```

## Gerando números aleatórios sem matar o desempenho.

Existem certas situações em que precisamos gerar números aleatórios, e costumamos a usar operações matemáticas para isso.

```
// ao invés de usar 

Math.floor(Math.random()*1000)

// use 

~~ (Math.random()*1000)
```

se você quer saber mais sobre isso, [veja este artigo. ](http://rocha.la/JavaScript-bitwise-operators-in-practice)

## Excluindo matrizes como um profissional.

Existem várias maneiras, mais com certeza a melhor maneira e a minha favorita e esta. 

```
let numbers=[1,2,3,4];
numbers.length=0;
```

Muitas vezes, entramos na linguagem seja ela qual for sem conhecer suas bases , porém com este artigo acredito que possa contribuir um pouco. 

Diz ai o que você achou e se concorda.