class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  showScore() {
    console.log(`Jogador(a) ${this.name} possui ${this.score} ponto(s).`);
  }

  addPoint() {
    this.score++;
  }
}

const carolina = new Player("Carolina");
const miguel = new Player("Miguel");

carolina.addPoint();
carolina.addPoint();

miguel.addPoint();

carolina.showScore();
miguel.showScore();
