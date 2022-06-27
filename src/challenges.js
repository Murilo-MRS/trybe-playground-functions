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
function highestCount(num) {
  // seu código aqui
  let maiorNum = Math.max.apply(null, num);
  let contNum = 0;
  for (let index = 0; index < num.length; index += 1) {
    if (maiorNum === num[index]) {
      contNum += 1;
    }
  }
  return contNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let unidades = '';
  let gato1dist = cat1 - mouse;
  let gato2dist = cat2 - mouse;

  if (Math.abs(gato1dist) > Math.abs(gato2dist)) {
    unidades = 'cat2';
  } else if (Math.abs(gato1dist) < Math.abs(gato2dist)) {
    unidades = 'cat1';
  } else if (Math.abs(gato1dist) === Math.abs(gato2dist)) {
    unidades = 'os gatos trombam e o rato foge';
  }
  return unidades;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = [];
  for (let iterator of array) {
    if (iterator % 3 === 0 && iterator % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (iterator % 5 === 0) {
      novoArray.push('buzz');
    } else if (iterator % 3 === 0) {
      novoArray.push('fizz')
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
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
