class Pizza {
  constructor(saborDaBraba, tamanhoDaFome, bordaDoGordinho) {
    this.sabor = saborDaBraba;
    this.tamanho = tamanhoDaFome;
    this.borda = bordaDoGordinho;
  }

  calcularPreco() {
    let dinheiroDaPizza = 0;

    if (this.tamanho === "P") {
      dinheiroDaPizza = 25;
    } else if (this.tamanho === "M") {
      dinheiroDaPizza = 35;
    } else if (this.tamanho === "G") {
      dinheiroDaPizza = 50;
    }

    if (this.borda) {
      dinheiroDaPizza += 8;
    }

    return dinheiroDaPizza;
  }

  resumo() {
    let dinheiroDaFelicidade = this.calcularPreco();
    let bordaDoCaos = this.borda ? "com" : "sem";

    console.log(
      `Pizza ${this.tamanho} ${bordaDoCaos} borda custará R$ ${dinheiroDaFelicidade} reais`,
    );
  }
}

let pizzaDaFome = new Pizza("Calabresa", "M", true);

console.log("Preço da larica:", pizzaDaFome.calcularPreco());

pizzaDaFome.resumo();
