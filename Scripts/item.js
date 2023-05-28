class Item {
  constructor(nome, peso, valor) {
    this.nome = nome;
    this.peso = peso;
    this.valor = valor;
  }
}

const itens = [];

const item1 = new Item("Delivery", 10, 774);
const item2 = new Item("The Last Minute", 20, 6500);
const item3 = new Item("Nuka-nuke Launcher", 40, 650);

itens.push(item1, item2, item3);
