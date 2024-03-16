var valor1 = document.querySelector('#valor1')
var valor2 = document.querySelector('#valor2')
var valor3 = document.querySelector('#valor3')
var res = document.querySelector('#res')
 
 

function calcular() {
    var n1 = Number(valor1.value)
    var n2 = Number(valor2.value)
    var n3 = Number(valor3.value)
    
      if (n1 === 0 && n2 === 0 && n3 === 0) {
         res.textContent = '[ERROR} valor invalido'
     }else{ 
        var resultado = (n1+n2+n3) /3 
        res.textContent = (`Média ${resultado.toFixed(1)}`) 
    }
}
 
