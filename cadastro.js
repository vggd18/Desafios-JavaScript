function append(lista){
    var objeto = document.getElementById('insert').value
    if (objeto == undefined || objeto == null){
        alert('Informe um valor válido')
    }
    else{
        lista.push(objeto)
        document.getElementById('array').value = lista
        document.getElementById('insert').value = null
    }
}
var lista = new Array()
