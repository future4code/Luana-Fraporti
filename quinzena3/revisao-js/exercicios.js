// EXERCÍCIO 01
function inverteArray(array) {
  let arrayDeNumeros = []
  for(let i = array.length-1; i >=0; i--){
    arrayDeNumeros.push(array[i])     
}
return arrayDeNumeros
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados2 = []
  for (let item of array){
    if (item %2 === 0){
      let elevarPor2 = item * item
      numerosParesElevados2.push(elevarPor2)
    }
  }
  return numerosParesElevados2
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  for (let item of array) {
    if (item % 2 == 0) {
      nPares.push(item)
    }
  }
  return nPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let numeroMaior = array[0]
  for (let i=0; i<array.length;i++){
 let numero = array [i];
 if (numero > numeroMaior) {
   numeroMaior = numero;
}
}
return numeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const arrayNovo = array.lenght
  return arrayNovo
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  let respostasBooleanos = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3, 
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
return respostasBooleanos

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let parametro = []
for (let i=0;i < n;i++){
  parametro.push(i*2)
}
return parametro
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
 const tresLadosIguais = "Equilátero"
 const doisLadosIguais = "Isósceles"
 const todosLadosDiferentes = "Escaleno"
 if (a===b && a===c){
   return tresLadosIguais
 } else if (a !== b && a !== c){
   return todosLadosDiferentes
 } else { 
   return doisLadosIguais
 }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
const maior 
const menor
const diferenca

if (num1 > num2){
  maior = num1
  menor = num2
} else {
  menor = num1
  maior = num2
}
let divisivel = maior % menor === 0

let valordif = maior - menor

let objeto = 
{
  maiorNumero: maior,
  maiorDivisivelPorMenor1: divisivel,

}
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
[2,4,5,9,3]
[2,4,5,9,3]

[0,1,2,3,4]

[2,3,4,5,9]

const novaArray = []

let contador = 0
for (itemComparado of array){
if (item > itemComparado){
  contador = contador +1 
}
}
novaArray [contador]=item
}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
