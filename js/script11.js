let numero01 = parseInt(prompt("Digite um Numero: "))
let numero02 = parseInt(prompt("Digite outro Numero: "))
let maior
if (numero01 > numero02) 
    maior = numero01
    menor = numero02
if (numero02 > numero01)
    maior = numero02
    menor = numero01
alert("O Maior numero é: " + maior)