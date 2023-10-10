// Calcule o MDC (máximo divisor comum) entre dois números.

const textoNegativo = 'Os números digitados não possuem divisores comuns.';
const numerosInvalidos = 'É preciso inserir dois números válidos.'

function MDC(numero1, numero2){
  let divComuns = [];

  if (!isNaN(numero1) && !isNaN(numero2) && (numero1!=numero2)) {
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
    if(tamanho===0){
      return textoNegativo;
    }
    else{
      return divComuns[tamanho - 1];
    }
    
  } else if (!isNaN(numero1) && !isNaN(numero2) && numero1===numero2){
      return numero1
  }
  return numerosInvalidos
}

module.exports = {MDC, textoNegativo, numerosInvalidos}