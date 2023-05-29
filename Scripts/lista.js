const itemList = document.querySelector(".itemList");

const populaLista = () => {
  let textoArmas = "";
  let textoArmaduras = "";
  let textoUtilitarios = "";

  itens.forEach((item, index) => {
    const itemHTML = `<li id="${index}">${item.nome} <br> <img src="./Stylesheet/imgs/fallout4_peso_icon.png"> ${item.peso} <br> <img src="./Stylesheet/imgs/fallout4_caps_icon.png"> ${item.valor} </li>`;

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
