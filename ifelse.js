var idade = prompt("Digite sua idade:")

if (idade >= 0 && idade < 15){
    document.write('A sua faixa etária é de: Criança')
}
else if (idade >= 15 && idade < 30){
    document.write('A sua faixa etária é de: Jovem')
}
else if (idade >= 30 && idade < 60){
    document.write('A sua faixa etária é de: Adulto')
}
else if (idade >= 60){
    document.write('A sua faixa etária é de: Idoso')
}
else{document.write('ERRO')}