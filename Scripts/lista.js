const itemList = document.querySelector(".itemList");

const populaLista = () => {
  let texto = "";

  itens.forEach((item) => {
    texto += `<li>${item.nome}: ${item.peso}kg, ${item.valor} caps</li>`;
  });

  itemList.innerHTML = texto;
};

populaLista();
