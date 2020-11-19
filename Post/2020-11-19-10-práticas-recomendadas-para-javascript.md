---
title: 10 práticas recomendadas para JavaScript.
description: As 10 práticas recomendas pelos melhores desenvolvedores
date: 2020-11-19T00:10:25.871Z
image: /assets/img/javascript.png
category: JS
background: "#FFD700\t"
---
# As 10 melhores práticas de JavaScript recomendada pelos melhores desenvolvedores.



## Não use '==' para operadores.

Em Javascript temos os operadores == e ===, o operador == e usado para comparar dois valores , mesmo que estes valores sejam de tipos diferentes , ja o === compara se os valores são do mesmo valor e tipo.

## Use 'let' ao invés de 'var'

\
o tipo de váriavel 'var' pode ser usada em todo o contexto do bloco, mesmo após o fechamento de um 'for'a variável pode ser mudada o que pode causar bugs, ja o 'let'e usado somente no contexto do bloco, evitando assim erros ou falhas.

## Use variáveis imutáveis como 'const'

ao menos que você tenha uma variável que pode mudar, o uso de const e recomendado.

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



Usar Arrow functions evita içamentos em javasript , você pode ver mais sobre isso [aqui.](https://medium.com/devzera/um-guia-para-entender-javascript-hoisting-com-vari%C3%A1veis-usando-let-e-const-45e0a62b16e2)

## Use funções puras

Funções puras não são alteradas mesmo após várias chamadas , isto pode te ajudar a testar a função e principalmente a testar a depura-la. 

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
```