// no desafio era obrigatório o uso de função

var n1 = prompt("Digite um número: ")
var op = prompt("Digite uma operação: (formato: + ou soma)")
var n2 = prompt("Digite outro número: ")

function soma(n1,n2, op) {
    if ((op == '+') || (op == 'soma')){
        return (n1 + n2)
    }
    else if ((op == '-') || (op == 'subtração') || (op == 'subtraçao') || (op == 'subtracao')){
        return (n1 - n2)
    }
    else if ((op == '*') || (op == 'multiplicação') || (op == 'multiplicaçao') || (op == 'multiplicacao')){
        return (n1 * n2)
    }
    else if ((op == '/') || (op == 'divisão') || (op == 'divisao')){
        return (n1 / n2)
    }
    else{return 'ERRO!'}
}

n1 = parseInt(n1)
n2 = parseInt(n2)
op = op.toLowerCase()
document.write("O resultado da sua operação é: " + soma(n1,n2,op))