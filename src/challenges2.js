// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    let contNum = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contNum += 1;
      }
      if (array[index] < 0 || array[index] > 9 || contNum >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    }
  } 

  return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangle = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    triangle = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    triangle = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    triangle = true;
  } else {
    triangle = false;
  }
  return triangle;
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let frase = string;
  let num = frase.match(/\d+/g);
  let numAgua = 0;

  for (let index = 0; index < num.length; index += 1) {
    numAgua += Number(num[index]);
  }
  if (numAgua > 1) {
    return numAgua + ' copos de água';
  }
  return numAgua + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
