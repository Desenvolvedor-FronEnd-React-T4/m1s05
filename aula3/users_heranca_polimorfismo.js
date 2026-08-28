class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(`${this.name} entrou no sistema.`);
  }

  showRole() {
    console.log(`${this.name} é um usuário comum.`);
  }
}

class Student extends User {}

class Teacher extends User {
  showRole() {
    console.log(`${this.name} é professor(a).`);
  }
}

class Admin extends User {
  showRole() {
    console.log(`${this.name} é admin.`);
  }
}

const users = [
  new Admin("Cleverson"),
  new Teacher("Amaury"),
  new Student("Carolina"),
];

users.forEach((user) => user.showRole());
