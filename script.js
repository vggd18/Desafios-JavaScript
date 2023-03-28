// INVERSOR DE VARIÁVEIS
function var_invert(){
    //pega os dois elementos dados e os troca de posição
    var a = document.getElementById('fnum').value
    var b = document.getElementById('snum').value
    var c = a // variavel auxiliar pra realziar o processo
    a = b
    b = c
    // printa na barra abaixo o valor obtido
    document.getElementById('result1').value = 'Variavel 1: ' + a +' | Variável 2: ' + b
}

// ALGORITMO DE FAIXA ETÁRIA
function faixa_etaria(idade){
    //compara com cada valor para cada faixa etária e printa na barra o valor obtido
    if (idade >= 0 && idade < 15){
        document.getElementById('result2').value = 'A sua faixa etária é de: Criança.'
    }
    else if (idade >= 15 && idade < 30){
        document.getElementById('result2').value = 'A sua faixa etária é de: Jovem.'
    }
    else if (idade >= 30 && idade < 60){
        document.getElementById('result2').value = 'A sua faixa etária é de: Adulto.'
    }
    else if (idade >= 60){
        document.getElementById('result2').value = 'A sua faixa etária é de: Idoso.'
    }
    else{document.getElementById('result2').value = 'ERRO!'
    }
}
// CALCULADORA DE IMC
function imc_calc(){
    //pega os valores de input de altura e peso
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    // transforma strings em valores float e a altura em metros
    altura = (parseFloat(altura))/100
    peso = parseFloat(peso)
    // calculo do IMC
    var m = peso / (altura ** 2)

    // if e else com cada valor de cada IMC com suas descrições
    if (m < 16){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Baixo peso muito grave.'
    }
    else if(m >= 16 && m < 17){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Baixo peso grave.'
    }
    else if(m >= 17 && m < 18.5){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Baixo peso.'
    }
    else if(m >= 18.5 && m < 25){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Peso Normal.'
    }
    else if(m >= 25 && m < 30){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Sobrepeso.'
    }
    else if(m >= 30 && m < 35){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Obesidade Grau I.'
    }
    else if(m >= 35 && m < 40){
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Obesidade Grau II.'
    }
    else{
        document.getElementById('IMC').value = 'Seu IMC é: '+ Math.round(m) + ' | Obesidade Grau III.'
    }
}

//OPERAÇÕES MATEMATICAS
function soma(n1,n2){
    document.getElementById('calculadora').value = (n1+n2)
}
function subtracao(n1,n2){
    document.getElementById('calculadora').value = (n1-n2)
}
function multiplicacao(n1,n2){
    document.getElementById('calculadora').value = (n1*n2)
}
function divisao(n1,n2){
    document.getElementById('calculadora').value = (n1/n2)
}

function append(lista){
    var objeto = document.getElementById('objeto').value
    if (objeto == undefined || objeto == null){
        alert('Informe um valor válido')
    }
    else{
        if (lista.indexOf('objeto') != -1){
            alert('Objeto já foi adicionado')
        }
        else {
            lista.push(objeto)
        }
    }
    document.getElementById('array').value = lista
}

function ordenar(){
    lista.sort()
    document.getElementById('array').value = lista
}
var lista = new Array()