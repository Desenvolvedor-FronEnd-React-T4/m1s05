class Animal {
  nome = "";
  idade = 0;
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }

  comer() {
    console.log(`${this.nome} esta comendo.`);
  }

  falar() {
    console.log(`${this.nome} diz: ${this.som}`);
  }
}


module.exports = Animal;
