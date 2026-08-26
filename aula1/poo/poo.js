class Aluno {
  constructor(nome, idade, matricula) {
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
  }

  fazerProva() {
    console.log(`${this.nome} está fazendo a prova.`);
  }
}

let aluno1 = new Aluno("Vanessa", 20, 123);
let aluno2 = new Aluno("Miguel", 22, 456);

let alunoVazio = new Aluno();

console.log(aluno1);
console.log(aluno2);

console.log(alunoVazio);

aluno1.fazerProva();
aluno2.fazerProva();

class Conta {
  constructor(nomeTitular, numeroConta, saldo) {
    this.nomeTitular = nomeTitular;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(`O saldo da conta de ${this.nomeTitular} é: R$${this.saldo}.`);
  }
}

const contaDoJoao = new Conta("João Victor", 123, 0);
const contaDaNatalia = new Conta("Natalia", 456, 100);

contaDoJoao.exibirSaldo();
contaDaNatalia.exibirSaldo();

contaDoJoao.depositar(50);

contaDoJoao.exibirSaldo();
contaDaNatalia.exibirSaldo();
