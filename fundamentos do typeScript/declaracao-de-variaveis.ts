function iniciarTime(iniciarJogo: boolean) {
  var nome = "Messi e amigos";
  if (iniciarJogo) {
    var cidade = "em Vila Velha";
  }
  console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(!!true);
