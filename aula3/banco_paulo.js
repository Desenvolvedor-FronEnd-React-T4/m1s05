class ContaBancaria {
  constructor(nomeTitular) {
    this.nomeTitular = nomeTitular;
    this.saldoAtual = 0;
  }

  depositar(valorDeposito) {
    this.saldoAtual += valorDeposito;
  }

  sacar(valorSaque) {
    if (valorSaque <= this.saldoAtual) {
      this.saldoAtual -= valorSaque;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  extrato() {
    console.log(`Titular: ${this.nomeTitular} | Saldo: R$ ${this.saldoAtual}`);
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(nomeTitular, limite) {
    super(nomeTitular);
    this.limite = limite;
  }

  sacar(valorSaque) {
    if (valorSaque <= this.saldoAtual + this.limite) {
      this.saldoAtual -= valorSaque;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

class ContaPoupanca extends ContaBancaria {}

const cc1 = new ContaCorrente("Paulo", 100);

cc1.extrato();

cc1.sacar(50);

cc1.extrato();

cc1.sacar(20);

cc1.extrato();




module.exports = ContaBancaria;
