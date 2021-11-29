/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */
//     console.log("Bem-vindo(a) ao jogo de blackjack")

//     let jogo = confirm("Quer iniciar uma nova rodada?")
    
//     if (jogo) {
//         let carta1Usuario = comprarCarta()
//         let carta2Usuario = comprarCarta()
//         let carta1Pc = comprarCarta()
//         let carta2Pc = comprarCarta()
    
//         let pontosUsuario = carta1Usuario.valor + carta2Usuario.valor
//         let pontosPc = carta1Pc.valor + carta2Pc.valor
    
//         console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontosUsuario}`)
//         console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontosPc}`)
    
//         if (pontosUsuario > pontosPc) {
//             console.log("O usuário ganhou!")
//         } else if (pontosPc > pontosUsuario) {
//             console.log("O computador ganhou!")
//         } else if (pontosUsuario === pontosPc) {
//             console.log("Empate!")
//         }
    
//     } else {
//         console.log("O jogo acabou")
//     }