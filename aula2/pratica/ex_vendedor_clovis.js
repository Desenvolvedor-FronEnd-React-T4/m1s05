class Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.valorVendidoNoMes = valorVendidoNoMes;
    this.salarioBase = salarioBase;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(
    nome,
    sobrenome,
    valorVendidoNoMes,
    salarioBase,
    taxaComissao
  ) {
    super(nome, sobrenome, valorVendidoNoMes, salarioBase);

    if (taxaComissao < 0 || taxaComissao > 1) {
      throw new Error("A taxa de comissão deve estar entre 0 e 1.");
    }

    this.taxaComissao = taxaComissao;
  }

  getSalario() {
    return this.salarioBase +
      (this.taxaComissao * this.valorVendidoNoMes);
  }
}

const vend = new VendedorComissionado("Clovis", "Costa", 10000, 2000, 1.5);

console.log(vend.getSalario());
