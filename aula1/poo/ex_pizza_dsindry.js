class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calcularPreco() {

    let valor = 0;

    if (this.tamanho === "P") {
        valor = 25
    } else if (this.tamanho === "M") {
        valor = 35
    } else if (this.tamanho) {
        valor = 50
    } 

    if (this.borda === true) {
        valor += 8;
  }
  return `Sabor da pizza: ${this.sabor}, tamanho da pizza: ${this.tamanho}, valor do pedido: ${valor}`
  }
}

const pedido1 = new Pizza("Lombinho", "M", false)
console.log(pedido1.calcularPreco());

const pedido2 = new Pizza("Frango com requeijão", "G", true)
console.log(pedido2.calcularPreco())
