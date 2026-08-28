class Cliente {
  constructor(nome, sobrenome, telefone, email, endereco) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
  }

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

module.exports = Cliente;

