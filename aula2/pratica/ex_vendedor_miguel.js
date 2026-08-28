class Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.valorVendidoNoMes = valorVendidoNoMes;
    this.salarioBase = salarioBase;
  }

  getSalario() {
    return this.salarioBase;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
    super(nome, sobrenome, valorVendidoNoMes, salarioBase);

    if (taxaComissao < 0.0 || taxaComissao > 1.0) {
      throw new Error("a taxinha de comissão deve estar entre 0.0 e 1.0!");
    }

    this.taxaComissao = taxaComissao;
  }

  getSalario() {
    // Calculando o salário final
    // porque boleto não se paga sozinho 😔
    return this.salarioBase + this.taxaComissao * this.valorVendidoNoMes;
  }
}

const vendedor = new VendedorComissionado("João", "Silva", 10000, 2000, 0.1);

console.log("Salário:", vendedor.getSalario());
