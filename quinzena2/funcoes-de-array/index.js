// exercicio 1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter

// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]
// a)
// const cachorro = pets.map((item, index, array) => {
//     return item.nome
// })  
// console.log(cachorro)

// b)
//  const cachorro = pets.filter ((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(cachorro)

// ₢)
// const cachorro = pets.filter((item) => {
//     if (item.raca === "Poodle") {
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar${item.nome}!`)
//     }
//     return
// })


// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
// const mercado = produtos.map((item, index, array) => {
//     return item.nome
// })
// console.log(mercado)

// b)
// voltaNomes=produtos.map((item, index, array)=>{
// 	const nomes = item.nome
// 	const precoDesc=item.preco*5/100
// 	return ({nome:nomes , preco:precoDesc})
// })
// console.log(voltaNomes)

// c)
// const mercado = produtos.filter ((item) => {
//  return item.categoria === "Bebidas"
//     })
//     console.log(mercado)

//d)
// const retornaYpes=produtos.filter((item, index, array)=>{
// 	const nomes=item.nome
// 	const cat=item.categoria
// 	const precos=item.preco
// 	if(nomes.includes("Ypê")){
// 		return ({nome:nomes ,categoria: cat, preco:precos})
// 	}
// })
// console.log(retornaYpes)

//e)
// let mapeiaNomePreco=produtos.map((item, index, array)=>{
// 	const nomes=item.nome
// 	const precos=item.preco
// 	return ({nome:nomes , preco:precos})
// }).filter((ypes,index)=>{
// 	const nomes=ypes.nome
// 	const precos=ypes.preco
// 	if(ypes.nome.includes("Ypê")){
// 		ypes[index]=`COMPRE ${nomes} POR ${precos}`
// 		return ypes[index]
// 	}

// })
// console.log(mapeiaNomePreco)
