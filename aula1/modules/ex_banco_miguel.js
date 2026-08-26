const Conta = require("./ContaBancaria")

// Teste 👉👈
const contaBancaria = new Conta("João da Silva");

contaBancaria.extrato();

contaBancaria.depositar(500);
contaBancaria.extrato();

contaBancaria.sacar(200);
contaBancaria.extrato();

contaBancaria.sacar(500);
