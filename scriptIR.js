function storeInput() {

let receita = Number(document.getElementById("valorReceita").value);

let despesa = Number(document.getElementById("valorDespesa").value);

return [receita, despesa];

}

let baseCalculo = [
    2259.20,
    2826.65,
    3751.05,
    4664.68    
];

let aliquota = [
    0,
    7.50,
    15.00,
    22.50,
    27.50
];

let deducao = [
    0,      // 0
    169.44, // 1
    381.44, // 2
    662.77, // 3
    896.00  // 4
];

function calculoIRPF() {
    let receita = storeInput()[0];
    let despesa = storeInput()[1];
    let valorBase = receita - despesa;
    if (valorBase < baseCalculo[0]) {
        return 0;
    } else if (valorBase < baseCalculo[1]) {
        return (valorBase * (aliquota[1] / 100)) - deducao[1];
    } else if (valorBase < baseCalculo[2]) {
        return (valorBase * (aliquota[2] / 100)) - deducao[2];
    } else if (valorBase < baseCalculo[3]) {
        return (valorBase * (aliquota[3] / 100)) - deducao[3];
    } else {
        return (valorBase * (aliquota[4] / 100)) - deducao[4];
    }
}

function valorIRPF() {
    return "R$ " + calculoIRPF().toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function clearInputField() {
    document.getElementById('campos').reset();
    document.getElementById('resultado').innerHTML = '';
}
