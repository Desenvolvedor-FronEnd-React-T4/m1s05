class Funcionario {
  //superclasse - classe mãe/pai
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  //subclasse
  constructor(nome, salario, bonus) {
    super(nome, salario); // Passa nome e salario para Funcionario
    console.log(`Gerente ${this.nome} possui salário de R$${this.salario}.`);
    this.bonus = bonus; // Atributo exclusivo do Gerente
  }

  salarioTotal() {
    return this.salario + this.bonus;
  }
}
const gerente = new Gerente("Ana", 5000, 1500);
console.log(gerente.salarioTotal()); // 6500
