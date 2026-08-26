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


module.exports = ContaBancaria;