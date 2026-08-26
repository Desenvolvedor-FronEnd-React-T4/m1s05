class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calcularPreco() {
    let preco;

    if (this.tamanho === "P") {
      preco = 25;
    } else if (this.tamanho === "M") {
      preco = 35;
    } else if (this.tamanho === "G") {
      preco = 50;
    }

    if (this.borda) {
      preco = preco + 8;
    }

    return preco;
  }

  resumo() {
    let valor = this.calcularPreco();
    let bordaTexto;

    if (this.borda) {
      bordaTexto = "com";
    } else {
      bordaTexto = "sem";
    }

    console.log(
      `Pizza ${this.tamanho} ${bordaTexto} borda custará R$ ${valor} reais`,
    );
  }
}

const pedidoFinal = new Pizza("Calabresa", "P", false);
pedidoFinal.resumo();
