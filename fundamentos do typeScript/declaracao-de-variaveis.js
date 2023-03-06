function iniciarTime(iniciarJogo) {
    var nome = "Messi e amigos";
    if (iniciarJogo) {
        var cidade = "em Vila Velha";
    }
    console.log("".concat(nome, " v\u00E3o jogar ").concat(cidade));
}
iniciarTime(!!true);
