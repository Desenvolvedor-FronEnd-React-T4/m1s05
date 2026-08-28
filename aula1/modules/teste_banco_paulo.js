const Conta = require("./ex_banco_paulo.js")

const conta1 = new Conta("João", 0);

conta1.depositar(100);

conta1.sacar(150);
conta1.sacar(50);

conta1.extrato();

