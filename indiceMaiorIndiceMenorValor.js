// Dado um array numérico qualquer sem valores repetidos, 
// descubra qual é o índice do maior valor
// e o índice do menor valor.
function indiceMaiorMenor(...lista){

let tamanhoArray = lista.length
let numMaior = lista[0]
let numMenor = lista[0]
for (let i = 0; i < tamanhoArray; i++) {
    let valorAtual = lista[i]
    if (valorAtual>numMaior) {
        numMaior = valorAtual}
        
    if (valorAtual< numMenor){
            numMenor = valorAtual
        }    
  }
let indiceMenor = lista.indexOf(numMenor)
let indiceMaior = lista.indexOf(numMaior)

return {indiceMaior, indiceMenor}
}

indiceMaiorMenor()


module.exports = {indiceMaiorMenor}