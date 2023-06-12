//barra de pesquisa
function pesquisar(){
    let input = document.getElementById('pesquisa').value
    input = input.toLowerCase()
    let x = document.getElementById('jogos')

    for( i = 0; i < x.length; i++ ){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "list-item"
        }   
     }
}

//resposividade barra de navegação
$(document).ready(function() {
    $('.hambuguer').click(function(){
        $(this).toggleClass('active');
        $('menu').toggleClass('active');
    })
})


//API
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://diwserver.vps.webdock.cloud:8765/products/category/Accessories%20-%20Belts",
    "method": "GET",
    "headers": {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  
//pesquiisa
/* const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProdutos = produtos.filter(produto => {
        const title = produto.title.toLowerCase();
        const description = produto.description.toLowerCase();
        return title.includes(searchTerm) || description.includes(searchTerm);
      });

      const filteredStr = filteredProdutos.map(produto => `
        <div class="produto">
          <h3>${produto.title}</h3>
          <img src="${produto.image}" alt="${produto.title}" />
          <p>Preço: $${produto.price}</p>
          <button class="btn-detalhes">Detalhes</button>
        </div>
      `).join('');

      document.getElementById("produtos").innerHTML = filteredStr;
    });
  })
  .catch(error => console.log("Erro na requisição: " + error)); */

  function pesquisar() {
    let input = document.getElementById('pesquisa');
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('.card-title');
        let textValue = title.textContent || title.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}



