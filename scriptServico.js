function storeInput() {

let valor = Number(document.getElementById("valorServico").value);;

return valor;

}

function final() {
    let valorBruto = storeInput();
    let deducaoISSQN = valorBruto * (40/100);
    let valorINSS = (valorBruto - deducaoISSQN) * (11/100);
    let valorISSQN = valorBruto * (5/100);
    let material = valorBruto * (70/100);    
    let maoObra = valorBruto * (30/100)
    let liquido = valorBruto - valorINSS - valorISSQN;
    return [valorBruto, deducaoISSQN, valorINSS, valorISSQN, material, maoObra, liquido]
    //      |     0   | |    1     |  |    2  |  |    3   |  |   4  |  |  5  |  |  6  |
}

function valores() {
    return [
        final()[0].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 0 Valor Bruto
        
        final()[1].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 1 Dedução ISSQN
        
        final()[2].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 2 INSS
        
        final()[3].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 3 ISSQN
        
        final()[4].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 4 Material 
        
        final()[5].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, "."),  // 5 Mão de Obra

        final()[6].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")  // 6 Liquído
    ]
}

function termos() {
    let termos = [
        "VALOR BRUTO:  R$ ", // 0
        "DEDUÇÃO:  R$ ",     // 1
        "INSS:  R$ ",        // 2
        "ISSQN:  R$ ",       // 3
        "MATERIAL:  R$ ",    // 4
        "MÃO DE OBRA:  R$ ", // 5
        "LIQUÍDO:  R$ "      // 6 
    ]
    return termos;
}

function cifraoElem() {
    let cifraoElem = document.getElementsByClassName("cifrao");
    for (var i = 0; i < cifraoElem.length; i++) {
        cifraoElem[i].innerHTML = 'R$';
    };
}

function clearInputField() {
    document.getElementById('campos').reset();
    
    let t = document.getElementById('rew');
    t.style.display = 'none';

    let cifraoElem = document.getElementsByClassName("cifrao");
    for (var i = 0; i < cifraoElem.length; i++) {
        cifraoElem[i].innerHTML = '';
    };
    let labelElements = document.getElementsByClassName("label");
    for (var i = 0; i < labelElements.length; i++) {
        labelElements[i].innerHTML = '';
    };
    let ResultElements = document.getElementsByClassName("resultado");
    for (var i = 0; i < ResultElements.length; i++) {
        ResultElements[i].innerHTML = '';
    };
}

function mostrar() {
    var t = document.getElementById("rew");
    t.style.display = 'block';
}
