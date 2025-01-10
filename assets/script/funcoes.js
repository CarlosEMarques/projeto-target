// Inverter String

function inverterTexto() {
    const texto = document.getElementById("texto").value;
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    document.getElementById("resultadoInverter").innerText = "String invertida: " + invertido;
}


//Faturamento por Estado

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

//Faturamento Diario

const faturamentoDiario = [0, 100, 200, 0, 500, 0, 300, 0, 150, 400, 0, 0, 700, 0, 250];

function analisarFaturamento() {
    const valoresValidos = faturamentoDiario.filter(valor => valor > 0);
    const menor = Math.min(...valoresValidos);
    const maior = Math.max(...valoresValidos);
    const media = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;
    const diasAcimaMedia = valoresValidos.filter(valor => valor > media).length;

    document.getElementById("resultadoDiario").innerHTML = `
        Menor faturamento: ${menor} <br>
        Maior faturamento: ${maior} <br>
        Dias acima da média: ${diasAcimaMedia}
    `;
}

//Sequencia Fibonacci

function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    let a = 0, b = 1, encontrado = false;

    while (b <= numero) {
        if (b === numero || numero === 0) {
            encontrado = true;
            break;
        }
        [a, b] = [b, a + b];
    }

    document.getElementById("resultadoFibonacci").innerText = encontrado
        ? `${numero} pertence à sequência de Fibonacci.`
        : `${numero} não pertence à sequência de Fibonacci.`;
}


//Calcular Soma

function calcularSoma() {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
        k++;
        soma += k;
    }
    document.getElementById("resultadoSoma").innerText = "O valor de SOMA é: " + soma;
}