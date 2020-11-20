var valor;
var resultado;

//Função chamada que retorna o valor do botão;
function botao(num) {
    valor = document.calc.visor.value += num;
}

//Quando chamada, substitui o valor do visor por '';
function resetar() {
    document.calc.visor.value = '';
}

//Processa os números que estão no visor e faz a operação com uso do EVAL
function calcular() {
    resultado = parseFloat(resultado + valor);
    resultado = eval(valor).toFixed(2);
    document.calc.visor.value = resultado;
}

//Insere ponto entre os números para os tornar números quebrados
function ponto() {
    valor = document.calc.visor.value += ".";  
}