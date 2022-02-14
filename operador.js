function calculeIdade(anos) {
  return `Daqui ${anos} anos ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: "Felipe",
  idade: 8,
};
const pessoa2 = {
  nome: "Isabella",
  idade: 15,
};
const animal = {
  nome: "Igor",
  idade: 10,
};

console.log(calculeIdade.call(pessoa1, 5));