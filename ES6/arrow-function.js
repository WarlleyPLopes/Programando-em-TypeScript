var precos = ["10", "23", "19"];
var acimaDeVinte = precos
    .filter(function (preco) { return preco > 20; })
    .map(function (preco) { return "R$ ".concat(preco, ",00"); });
console.log(acimaDeVinte);
