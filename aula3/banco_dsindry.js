class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {

    this.saldo = this.saldo + valor;
    console.log(`Depósito de R$ ${valor} foi efetuado com sucesso! Saldo final da conta: R$ ${this.saldo}`)
}

  sacar(valor) {

    if (valor > this.saldo) {
        console.log("Saldo insuficiente!")
    } else {
        this.saldo = this.saldo - valor;
        console.log(`O saque de R$ ${valor} foi efeutado com sucesso! Saldo final da conta: R$ ${this.saldo}`)
    }
  }

  extrato() {
    console.log(`Nome titular da conta: ${this.titular}. | Saldo em conta: R$ ${this.saldo}`)
    
  }
}

class Corrente extends ContaBancaria {
  constructor(titular, saldo, limite) {
    super(titular,saldo)
    this.limite = limite;
  }

  sacar(valor) {
    if (valor <= (this.saldo + this.limite)) {
      this.saldo = this.saldo - valor;
      console.log("Saque efetuado!")
      return true;
    } else {
      console.log("Saldo e limite insuficientes.");
        return false
    }
  }
}

class Poupanca extends ContaBancaria {
  constructor(titular, saldo) {
    super(titular, saldo)
  }
}

const cc1 = new Corrente("Dsindry", 0, 100);

cc1.extrato();

cc1.sacar(101);

cc1.extrato();

