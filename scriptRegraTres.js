function storeInput() {

let valor_A = Number(document.getElementById("valorTotal-A").value);
let valor_B = Number(document.getElementById("valorTotal-B").value);
let valor_a_1 = Number(document.getElementById("valor-A-1").value);
let valor_a_2 = Number(document.getElementById("valor-A-2").value);
let valores = [valor_A, valor_B, valor_a_1, valor_a_2]

return valores;

}

function calculo() {
    let valores = storeInput();
    if (valores[0] == "") {
        let resultado_b_1 = 0;
        let resultado_b_2 = 0;
        let resultados = [resultado_b_1, resultado_b_2];
        return resultados;
    } else {
        let resultado_b_1 = (valores[2] * valores[1]) / valores[0];
        let resultado_b_2 = (valores[3] * valores[1]) / valores[0];
        let resultados = [resultado_b_1, resultado_b_2];
        return resultados;
        }
}

function cifraoElem() {
    let cifraoElem = document.getElementsByClassName("cifrao");
    for (var i = 0; i < cifraoElem.length; i++) {
        cifraoElem[i].innerHTML = 'R$';
    };
}

function clearInputField() {
    document.getElementById('campos').reset();
    let ResultElements = document.getElementsByClassName("resultado");
    for (var i = 0; i < ResultElements.length; i++) {
        ResultElements[i].innerHTML = '';
    };
}
