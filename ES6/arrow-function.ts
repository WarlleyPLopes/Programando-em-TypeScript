const precos = ["10", "23", "19"];

const acimaDeVinte = precos
  .filter((preco: any) => preco > 20)
  .map((preco) => `R$ ${preco},00`);
console.log(acimaDeVinte);
