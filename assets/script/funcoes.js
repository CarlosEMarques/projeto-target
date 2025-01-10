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
const data = {
    "faturamento": [
        200.5, 300.0, 0.0, 0.0, 400.0, 500.0, 600.0,
        0.0, 100.0, 300.0, 0.0, 0.0, 700.0, 0.0,
        800.0, 0.0, 300.0, 200.0, 100.0, 0.0, 0.0,
        400.0, 600.0, 700.0, 0.0, 0.0, 100.0, 200.0,
        300.0, 0.0
    ]
};

function analisarFaturamento() {
    const faturamentoDiario = data.faturamento;
    const valoresValidos = faturamentoDiario.filter(valor => valor > 0);

    if (valoresValidos.length === 0) {
        document.getElementById("resultadoDiario").innerHTML = "Nenhum dado válido encontrado.";
        return;
    }

    const menor = Math.min(...valoresValidos);
    const maior = Math.max(...valoresValidos);
    const media = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;
    const diasAcimaMedia = valoresValidos.filter(valor => valor > media).length;

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
