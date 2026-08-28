// Importa arquivo math.js
const math = require("./math.js")
const Aluno = require("./aluno.js")

// Usa o outro arquivo a partir da variável math
console.log(math.soma(5, 3))
console.log(math.subtrair(5, 3))

console.log(math);

const aluno1 = new Aluno("João", 35, 123);

console.log(aluno1);
