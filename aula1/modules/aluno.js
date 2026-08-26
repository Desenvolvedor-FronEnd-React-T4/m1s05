class Aluno {
  constructor(nome, idade, matricula) {
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
  }

  fazerProva() {
    console.log(`${this.nome} está fazendo a prova.`);
  }
}

module.exports = Aluno;
