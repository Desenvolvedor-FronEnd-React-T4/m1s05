const Conta = require("./Conta");

class ContaCorrente extends Conta {
  constructor(titular, limite) {
    super(titular);
    this.limite = limite;
  }

  sacar(valorSaque) {
    if (valorSaque > this.saldo + this.limite) {
      console.log("Saldo insuficiente.");
      return false;
    } else {
      this.saldo -= valorSaque;
      console.log("Saque efetuado com sucesso!");
      return true;
    }
  }
}

module.exports = ContaCorrente;
