const ContaCorrente = require("./ContaCorrente");
const Cliente = require("./Cliente");
const prompt = require("prompt-sync")();

const titular = new Cliente(
  "João",
  "Oliveira",
  "4899999",
  "ahdiuh@jaidh",
  "Rua 1231231",
);

const cc1 = new ContaCorrente(titular, 100);

let opcao;

do {
  console.log("Operações disponíveis:");
  console.log("1- deposito");
  console.log("2- saque");
  console.log("3- extrato");
  console.log("0- sair");

  opcao = Number(prompt("Digite uma opção:"));

  switch (opcao) {
    case 1:
      let valorDeposito = Number(prompt("Digite um valor para depositar: "));
      cc1.depositar(valorDeposito);
      break;
    case 2:
      let valorSaque = Number(prompt("Digite um valor para sacar: "));
      cc1.sacar(valorSaque);
      break;
    case 3:
      cc1.extrato();
      break;
    case 0:
      console.log("Saindo!");
      break;
    default:
      console.log("Digite uma operação válida.");
  }
} while (opcao !== 0);
