// Questão 1
let nome
let idade
console.log("variavel nome do tipo", typeof nome)
console.log("variavel idade do tipo", typeof Idade)
//Resposta 1:
// Declarei a variavel nome do tipo const, o console está paracendo como indefinda.

nome = prompt("informe seu Nome")
idade = prompt("informar a sua idade")
console.log("variavel nome do tipo", typeof nome)
console.log("variavel idade do tipo", typeof idade)
//Resposta 2 ambos tipos variaveis são String

// Questão 2

const roupaAzul = true
const roupaVermelha = false
const roupaVerde = true

let corAzul = true
let corVermelha = false
let corVerde = false

console.log("roupa azul", roupaAzul, "roupa vermelha", roupaVermelha, " roupa verde", roupaVerde)


// Questão 3

let a = 10
let b = 25
let c
a = b
b = c
c = a

console.log("o novo valor da a é",a);
console.log("o novo valor de b é",b);
console.log ("o novo valor de c é",c)


// 1
let a = 3
let b = 4
let soma = a+b
console.log(soma)

// 2
let a = 3
let b = 5
let c = 2

let multiplicacao =  a*b
console.log(multiplicacao)

// 5

const nome = prompt ("Qual seu nome")

const anoNascimento = Number(prompt ("Qual seu ano de Nascimento"))

const anoAtual = Number(prompt ("em que ano estamos"))

const idade = anoAtual - anoNascimento

console.log("Olá,",nome)
console.log("idade", idade)
console.log ("é maior de idade?", idade >=18)
console.log ("idade em 2050:", 2050 - anoNascimento)



