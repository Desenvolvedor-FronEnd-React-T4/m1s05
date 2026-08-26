class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo = this.saldo + valor;
    console.log(
      `Depósito de R$ ${valor.toFixed(2)} foi efetuado com sucesso! Saldo final da conta: R$ ${this.saldo.toFixed(2)}`,
    );
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo = this.saldo - valor;
      console.log(
        `O saque de R$ ${valor.toFixed(2)} foi efeutado com sucesso! Saldo final da conta: R$ ${this.saldo.toFixed(2)}`,
      );
    }
  }

  extrato() {
    console.log(
      `Nome titular da conta: ${this.titular}. | Saldo em conta: R$ ${this.saldo.toFixed(2)}`,
    );
  }
}

const contaPessoal = new ContaBancaria("Fernanda", 500);

contaPessoal.extrato();

contaPessoal.depositar(12.5);

contaPessoal.sacar(600);
