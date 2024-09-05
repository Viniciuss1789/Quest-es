var preco = parseFloat(prompt("Digite o preco do produto : "))
var percentualDesconto = parseFloat(prompt("Digite o percentual : "))
var desconto = (preco * percentualDesconto)/100;
var precoFinal = preco - desconto;
alert("O valor do desconto é : " + desconto)
alert("O preco final com desconto é : " + precoFinal)