// Inverter String
function inverterTexto() {
    const texto = document.getElementById("texto").value;
    const invertido = texto.split('').reverse().join('');
    document.getElementById("resultadoInverter").innerText = `String invertida: ${invertido}`;
}

// Faturamento por Estado
const faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais() {
    const total = Object.values(faturamentoEstado).reduce((a, b) => a + b, 0);
    const percentuais = Object.entries(faturamentoEstado).map(
        ([estado, valor]) => `${estado}: ${(valor / total * 100).toFixed(2)}%`
    );
    document.getElementById("resultadoEstado").innerHTML = percentuais.join("<br>");
}

// Faturamento Diário
const data = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

function analisarFaturamento(data) {
    const valores = data.map(item => item.valor);
    const valoresValidos = valores.filter(valor => valor > 0);

    if (valoresValidos.length === 0) {
        document.getElementById("resultadoDiario").innerHTML = "Nenhum dado válido encontrado.";
        return;
    }

    const menor = Math.min(...valoresValidos);
    const maior = Math.max(...valoresValidos);
    const media = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;
    const diasAcimaMedia = data.filter(item => item.valor > media).length;

    document.getElementById("resultadoDiario").innerHTML = `
        Menor faturamento: R$ ${menor.toFixed(2)} <br>
        Maior faturamento: R$ ${maior.toFixed(2)} <br>
        Dias acima da média: ${diasAcimaMedia}
    `;
}



// Sequência Fibonacci
function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero === "") {
        document.getElementById("resultadoFibonacci").innerText = "Por favor, digite um número válido.";
        return;  
    }

    let a = 0, b = 1;

    while (b < numero) {
        [a, b] = [b, a + b];
    }

    const resultado = (b === numero || numero === 0)
        ? `${numero} pertence à sequência de Fibonacci.`
        : `${numero} não pertence à sequência de Fibonacci.`;

    document.getElementById("resultadoFibonacci").innerText = resultado;
}


// Calcular Soma
function calcularSoma() {
    const indice = 13;
    const soma = (indice * (indice + 1)) / 2;  
    document.getElementById("resultadoSoma").innerText = `O valor de SOMA é: ${soma}`;
}


