// Dado um array numérico qualquer sem valores repetidos, 
// descubra qual é o índice do maior valor
// e o índice do menor valor.

function indiceMaiorMenor(){
//altere a lista como quiser
let lista = [6, 45, -10, 1953, 330, 47, 80, 2, 12, 130, -100, 170, 77, 798]
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

console.log(`A lista possui ${tamanhoArray} números.`)
console.log(`O maior número da lista é ${numMaior} e ele possui o índice igual a ${indiceMaior}`)
console.log(`O menor número da lista é ${numMenor} e ele possui o índice igual a ${indiceMenor}`)
}

indiceMaiorMenor()