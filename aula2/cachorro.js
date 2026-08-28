const Animal = require("./animal.js");

class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo.`);
  }

}

const rex = new Cachorro("Rex", 5, "au au");

console.log(rex);
rex.comer();
rex.latir();

rex.falar();
