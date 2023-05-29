const itemList = document.querySelector(".itemList");

const populaLista = () => {
  let textoArmas = "";
  let textoArmaduras = "";
  let textoUtilitarios = "";

  itens.forEach((item, index) => {
    const itemHTML = `<li id="${index}">${item.nome} <br> Peso: ${item.peso}kg <br> Valor: ${item.valor} caps</li>`;

    if (index < 20) {
      textoArmas += itemHTML;
    } else if (index < 32) {
      textoArmaduras += itemHTML;
    } else {
      textoUtilitarios += itemHTML;
    }
  });

  itemList.innerHTML = `<div class="arma">
    <h2>Armas</h2>
    <ul>${textoArmas}</ul>
  </div>
  <div class="armadura">
    <h2>Armaduras</h2>
    <ul>${textoArmaduras}</ul>
  </div>
  <div class="utilitario">
    <h2>Utilitários</h2>
    <ul>${textoUtilitarios}</ul>
  </div>`;
};

populaLista();
