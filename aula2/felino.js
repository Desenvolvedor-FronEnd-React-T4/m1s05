const Animal = require("./animal.js");

class Felino extends Animal {
  ronronar() {
    console.log(`${this.nome} está ronronando. prrrrr`);
  }
}

module.exports = Felino;
