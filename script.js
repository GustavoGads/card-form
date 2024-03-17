// alert('!ATENÇÃO! Em hipótese alguma coloque seus dados reais neste site. Preserve sua segurança digital!'
function printarNumeroCartao(input) {
    // Remove todos os caracteres que não são dígitos
    input.value = input.value.replace(/\D/g, '');

    // Limita o número de caracteres a 16
    if (input.value.length > 16) {
    input.value = input.value.slice(0, 16);
    }

    // Formata o número do cartão adicionando um espaço a cada três caracteres
    var numFormatado = input.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");

    if (numFormatado == 0) {
        document.getElementById("print-numero").innerHTML = "123 *** *** ***"
    } else {
        document.getElementById("print-numero").innerHTML = numFormatado
    }
}