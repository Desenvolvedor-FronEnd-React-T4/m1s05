//const Animal = require("./animal.js");
const Felino = require("./felino.js");

class Gato extends Felino {
  miar() {
    console.log(`${this.nome} está miando.`);
  }
}

const gatinho = new Gato("Jubileu", 6, "miau");

console.log(gatinho);

gatinho.comer();
gatinho.miar();
gatinho.ronronar();

gatinho.falar();
