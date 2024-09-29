const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
var somaTotal =  (faturamentoPorEstado.ES+
                  faturamentoPorEstado.SP+
                  faturamentoPorEstado.MG+
                  faturamentoPorEstado.RJ+
                  faturamentoPorEstado.Outros);

                  var SP = faturamentoPorEstado.SP/somaTotal*(100);
                  var RJ = faturamentoPorEstado.RJ/somaTotal*(100);
                  var MG = faturamentoPorEstado.MG/somaTotal*(100);
                  var ES = faturamentoPorEstado.ES/somaTotal*(100);
                  var OUTROS = faturamentoPorEstado.Outros/somaTotal*(100);

console.log(`SP: ${SP.toFixed(2)}%\nRJ ${RJ.toFixed(2)}%:\nMG: ${MG.toFixed(2)}%\nES: ${ES.toFixed(2)}%\nOUTROS: ${OUTROS.toFixed(2)}%`);