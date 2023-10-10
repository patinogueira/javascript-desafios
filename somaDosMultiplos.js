// Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

function somaMultiplos(){
    let multiplos = []
    let sum = 0
for (i = 5; i < 1000; i++) {
    let x = i % 5;
    let y = i % 7;
    if (x==0 || y==0) {
        multiplos.push(i);
        sum = sum + i;
      } 
  }

return sum
}

somaMultiplos()

module.exports = {somaMultiplos}