const prompt = require("prompt-sync")();

class Pizza {
  constructor(tamanho, preco, borda) {
    this.tamanho = tamanho;
    this.preco = preco;
    this.borda = borda;
  }
}

// Criando as opções de pizza
const pizzaPequena = new Pizza("Pequena", 25, 8);
const pizzaMedia = new Pizza("Média", 35, 8);
const pizzaGrande = new Pizza("Grande", 55, 8);

// Escolha do tamanho
console.log("Escolha o tamanho da pizza:");
console.log("1 - Pequena - R$ 25");
console.log("2 - Média - R$ 35");
console.log("3 - Grande - R$ 55");

let escolha = Number(prompt("Digite sua escolha: "));

let pizza;

if (escolha === 1) {
  pizza = pizzaPequena;
} else if (escolha === 2) {
  pizza = pizzaMedia;
} else if (escolha === 3) {
  pizza = pizzaGrande;
} else {
  console.log("Opção inválida!");
  process.exit();
}

// Pergunta sobre a borda
let querBorda = prompt("Você quer borda recheada? (s/n): ");

let precoFinal = pizza.preco;

if (querBorda.toLowerCase() === "s") {
  precoFinal += pizza.borda;
}

console.log("\n--- Pedido ---");
console.log("Pizza:", pizza.tamanho);
console.log("Borda recheada:", querBorda.toLowerCase() === "s" ? "Sim" : "Não");
console.log("Preço final: R$", precoFinal);