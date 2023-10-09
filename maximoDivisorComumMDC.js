// Calcule o MDC (máximo divisor comum) entre dois números.


let divComuns = []
function MDC(numero1, numero2){
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
      console.log(tamanho)
      console.log(`Os números ${numero1} e ${numero2} não possuem divisores comuns.`)
    }
    else{
      console.log(`Os divisores comuns dos números ${numero1} e ${numero2} são:`)
      console.log(divComuns)
      console.log(`E o maior divisor comum é ${divComuns[tamanho-1]}.`);
    }
    
  } else if (!isNaN(numero1) && !isNaN(numero2)){
      console.log(`Como os dois números digitados são iguais (${numero1} e ${numero2}), o máximo divisor comum é ele mesmo: ${numero1}.`);
  }

}

MDC(54,13)