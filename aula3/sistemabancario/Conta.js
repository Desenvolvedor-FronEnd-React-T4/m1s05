class Conta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valorDeposito) {
    this.saldo += valorDeposito;
    console.log("Depósito realizado com sucesso!");
  }

  sacar(valorSaque) {
    if (valorSaque > this.saldo) {
      console.log("Saldo insuficiente");
      return false;
    } else {
      this.saldo -= valorSaque;
      console.log("Saque efetuado com sucesso!");
      return true;
    }
  }

  // TODO: implementar método transferir

  extrato() {
    console.log(
      `Titular: ${this.titular.nomeCompleto()} | Saldo: R$ ${this.saldo}`,
    );
  }
}

module.exports = Conta;
