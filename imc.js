var nome = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura em centímetros: ')
var peso = prompt('Digite seu peso em quilos: ')

altura = (parseFloat(altura))/100
peso = parseFloat(peso)

var m = peso / (altura *2)

document.write(nome + ', você possui índice de massa corporal aproximadamente igual a ')

if (m < 16){
    document.write(Math.round(m) + ', sendo classificado como: Baixo peso muito grave.')
}
else if(m >= 16 && m < 17){
    document.write(Math.round(m) + ', sendo classificado como: Baixo peso grave.')
}
else if(m >= 17 && m < 18.5){
    document.write(Math.round(m) + ', sendo classificado como: Baixo peso.')
}
else if(m >= 18.5 && m < 25){
    document.write(Math.round(m) + ', sendo classificado como: Peso Normal.')
}
else if(m >= 25 && m < 30){
    document.write(Math.round(m) + ', sendo classificado como: Sobrepeso.')
}
else if(m >= 30 && m < 35){
    document.write(Math.round(m) + ', sendo classificado como: Obesidade Grau I.')
}
else if(m >= 35 && m < 40){
    document.write(Math.round(m) + ', sendo classificado como: Obesidade Grau II.')
}
else{
    document.write(Math.round(m) + ', sendo classificado como: Obesidade Grau III.')
}