// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
