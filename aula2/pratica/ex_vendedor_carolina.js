class Vendedor {
  constructor(nombre, sobrenome, valorVendidonoMes, salarioBase) {
    this.nombre = nombre;
    this.sobrenome = sobrenome;
    this.valorVendidonoMes = valorVendidonoMes;
    this.salarioBase = salarioBase;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(
    nombre,
    sobrenome,
    valorVendidonoMes,
    salarioBase,
    valorComissao,
  ) {
    super(nombre, sobrenome, valorVendidonoMes, salarioBase);
    this.valorComissao = valorComissao;
  }

  getSalario() {
    return this.salarioBase + this.valorVendidonoMes * this.valorComissao;
  }
}

const vendedor1 = new VendedorComissionado("Juan", "Silva", 10000, 2000, 0.15);

console.log(vendedor1.getSalario());
