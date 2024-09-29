var numeroInformado = 13;
var s = 0;

function pertenceFibonacci(numeroInformado) {
    let a = 0;
    let b = 1;
    let c = 0;
  
    while (c < numeroInformado) {
      c = a + b;
      a = b;
      b = c;
      
      console.log(b);
     
    }
  
  }
  
  if (s === 1) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");   
  
  }