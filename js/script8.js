let preco = parseFloat(prompt("Digite o preco do produto : "))
let percentualDesconto = parseFloat(prompt("Digite o percentual : "))
let desconto = (preco * percentualDesconto)/100;
let precoFinal = preco - desconto;
alert("O valor do desconto é : " + desconto)
alert("O preco final com desconto é : " + preco)