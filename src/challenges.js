// Desafio 1
function compareTrue(par1, par2) {
  // seu código aqui
  let teste = true;
  if (par1 === true && par2 === true) {
    teste = true;
  } else {
    teste = false;
  }
  return teste;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  let word = array.split(' ');
  return word;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstItem = array[array.length - 1];
  let secondItem = array[0];
  let frase = (firstItem + ', ' + secondItem);
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPts = (wins * 3) + ties;
  return totalPts;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
