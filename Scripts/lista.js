const itemList = document.querySelector(".itemList");

const populaLista = () => {
  let texto = "";

  itens.forEach((item) => {
    texto += `<li>
    <input type="checkbox" id="item1">
    <label for="item1">${item.nome}: ${item.peso}kg, ${item.valor} caps 
    </li>`;
  });

  itemList.innerHTML = texto;
};

populaLista();
