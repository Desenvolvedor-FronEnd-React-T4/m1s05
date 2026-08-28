import { Vendedor } from "./vendedor_paulo.js";

export class VendedorComissionado extends Vendedor {
    constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
        super(nome, sobrenome, valorVendidoNoMes, salarioBase);

        this.taxaComissao = taxaComissao;
    }

    getSalario() {
        return this.salarioBase +
            (this.taxaComissao * this.valorVendidoNoMes);
    }
}
