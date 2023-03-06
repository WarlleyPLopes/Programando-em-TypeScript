let quantidadde = 20;

// quantidadde = 'qualquer'; não compila

let x = [1, 2, null];
// x[0] = true; não compila

// Contextual Typing
window.onmousedown = function (evento) {
  console.log(evento.button); //OK
  //console.log(evento.buton); Não compila
};
