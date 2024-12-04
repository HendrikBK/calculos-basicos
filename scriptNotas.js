function storeInput() {

let valores = [];

let valorNota = Number(document.getElementById("valorNota").value); // 0
let valorProd = Number(document.getElementById("valorProd").value); // 1
let frete = Number(document.getElementById("frete").value); // 2
let seguro = Number(document.getElementById("seguro").value); // 3
let despAcess = Number(document.getElementById("despAcess").value); // 4
let desconto = Number(document.getElementById("desconto").value); // 5
let pedagio = Number(document.getElementById("pedagio").value); // 6
let ipi = Number(document.getElementById("ipi").value); // 7
let ICMSST = Number(document.getElementById("ICMSST").value); //8

valores.push(valorNota, valorProd, frete, seguro, despAcess, desconto, pedagio, ipi, ICMSST);

return valores;

}

function calculoValorNota() {
    let valores = storeInput();
    let resultado = valores[1] + valores[2] + valores[3] + valores[4] - valores[5] + valores[6] + valores[7] + valores[8];
    return "NOTA: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorProd() {
    let valores = storeInput();
    let resultado = valores[0] - valores[2] - valores[3] - valores[4] + valores[5] - valores[6] - valores[7] - valores[8];
    return "PRODUTOS: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorFrete() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[3] - valores[4] + valores[5] - valores[6] - valores[7] - valores[8];
    return "FRETE: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorSeguro() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[2] - valores[4] + valores[5] - valores[6] - valores[7] - valores[8];
    return "SEGURO: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorDespAcess() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[2] - valores[3] + valores[5] - valores[6] - valores[7] - valores[8];
    return "DESPESAS ACESSÓRIAS: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorDesconto() {
    let valores = storeInput();
    let resultado = Math.abs(valores[0] - valores[1] - valores[2] - valores[3] - valores[4] - valores[6] - valores[7] - valores[8]);
    return "DESCONTO: " + '<span class="red">' + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "</span>";
}

function calculoValorPedagio() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[2] - valores[3] - valores[4] + valores[5] - valores[7] - valores[8];
    return "PEDÁGIO: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorIPI() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[2] - valores[3] - valores[4] + valores[5] - valores[6] - valores[8];
    return "IPI: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculoValorICMSST() {
    let valores = storeInput();
    let resultado = valores[0] - valores[1] - valores[2] - valores[3] - valores[4] + valores[5] - valores[6] - valores[7];
    return "ICMS-ST: " + "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function clearInputField() {
    document.getElementById('campos').reset();
    document.getElementById('resultado').innerHTML = "";
}