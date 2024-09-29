function analisarFaturamento(dados) {
  // Filtrar dias com faturamento
  const diasComFaturamento = dados.filter(dia => dia.valor > 0);

  // Calcular a soma total do faturamento
  const somaTotal = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);

  // Calcular a média mensal
  const mediaMensal = somaTotal / diasComFaturamento.length;

  // Encontrar o menor e maior valor
  const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

  // Contar os dias com faturamento acima da média
  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

// Carregar os dados do arquivo JSON (substitua 'dados.json' pelo caminho correto)
fetch('dados.json')
  .then(response => response.json())
  .then(dados => {
    const resultado = analisarFaturamento(dados);
    console.log("Menor valor:", resultado.menorValor);
    console.log("Maior valor:", resultado.maiorValor);
    console.log("Dias acima da média:", resultado.diasAcimaDaMedia);   

  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error);
  });