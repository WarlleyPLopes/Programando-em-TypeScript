function pessoa(nome: string, idade: number) {
  return {
    nome: nome,
    idade: idade,
  };
}

const warlley = pessoa("Warlley", 22);

console.log(warlley);

const { nome } = warlley;
console.log(nome);
