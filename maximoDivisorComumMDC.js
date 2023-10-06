// Calcule o MDC (máximo divisor comum) entre dois números.

const readline = require('readline');
let divComuns = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Vou calcular o MDC de dois números. Digite o primeiro número: ', (numero1) => {
rl.question('Digite o segundo número: ', (numero2) => {

    if (!isNaN(numero1) && !isNaN(numero2) && (numero1!=numero2)) {
      console.log(`Você digitou os números ${numero1} e ${numero2}`);
        if (numero1<=numero2){
            numMenor = numero1
        } else{
            numMenor = numero2
        }
    
      for (let i = 2; i<=numMenor; i++) {
        let x = numero1 % i;
        let y = numero2 % i;
        if (x == 0 && y == 0) {
            divComuns.push(i);
          } 
      }
      let tamanho = divComuns.length
      console.log(`Os divisores comuns dos números ${numero1} e ${numero2} são:`)
      console.log(divComuns)
      console.log(`E o maior divisor comum é ${divComuns[tamanho-1]}.`);
    } else if (!isNaN(numero1) && !isNaN(numero2)){
        console.log(`Como os dois números digitados são iguais (${numero1} e ${numero2}), o máximo divisor comum é ele mesmo: ${numero1}.`);
    }
    else {
      console.log('Pelo menos um dos valores inseridos não é um número válido. Para calcular o MDC, é preciso inserir dois números válidos.');
    }

    rl.close();
  });
});