const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const apiUrl = 'https://diwserver.vps.webdock.cloud/products/';

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const searchTerm = searchInput.value;

  if (searchTerm.trim() !== '') {
    searchProducts(searchTerm);
  }
});

function searchProducts(searchTerm) {
  const url = `${apiUrl}?q=${searchTerm}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error(error));
}

function displayResults(products) {
  resultsContainer.innerHTML = '';

  if (products.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'Nenhum resultado encontrado.';
    resultsContainer.appendChild(noResultsMessage);
  } else {
    products.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product');

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.title;
      productContainer.appendChild(image);

      const title = document.createElement('h2');
      title.textContent = product.title;
      productContainer.appendChild(title);

      const description = document.createElement('p');
      description.textContent = product.description;
      productContainer.appendChild(description);

      // Cria um link para a página de detalhes do produto
      const detailsLink = document.createElement('a');
      detailsLink.href = `product-details.html?id=${product.id}`;
      detailsLink.textContent = 'Detalhes';
      productContainer.appendChild(detailsLink);

      resultsContainer.appendChild(productContainer);
    });
  }
}
//sasad
<script>
let productsData = [];

// Function to fetch product data from the API
function fetchProductList() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      productsData = products.slice(0, 9);
      renderProductList();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to render the product list on the page
function renderProductList() {
  const productList = document.getElementById('product-list');
  let productHTML = '';

  productsData.forEach(product => {
    productHTML += `
      <div class="col-md-4 mb-4">
        <div class="card card-height d-flex">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <button type="button" class="btn btn-primary" onclick="showProductDescription('${product.id}')">View Description</button>
          </div>
        </div>
      </div>
    `;
  });

  productList.innerHTML = productHTML;
}

// Function to show the product description modal
function showProductDescription(productId) {
  const selectedProduct = productsData.find(product => product.id === productId);

  const modalTitle = document.getElementById('product-description-modal-title');
  const modalDescription = document.getElementById('product-description-modal-description');
  const modalPrice = document.getElementById('product-description-modal-price');

  modalTitle.textContent = selectedProduct.title;
  modalDescription.textContent = selectedProduct.description;
  modalPrice.textContent = 'Price: $' + selectedProduct.price;

  const modal = new bootstrap.Modal(document.getElementById('product-description-modal'));
  modal.show();
}

// Function to render the product description page
function renderProductDescriptionPage(productId) {
  const selectedProduct = productsData.find(product => product.id === productId);

  const productDescriptionPage = document.getElementById('product-description-page');
  const title = document.getElementById('product-description-page-title');
  const description = document.getElementById('product-description-page-description');
  const price = document.getElementById('product-description-page-price');

  title.textContent = selectedProduct.title;
  description.textContent = selectedProduct.description;
  price.textContent = 'Price: $' + selectedProduct.price;

  productDescriptionPage.classList.remove('d-none');
}

// Function to navigate back from the product description page
function goBack() {
  const productDescriptionPage = document.getElementById('product-description-page');
  productDescriptionPage.classList.add('d-none');
}

// Call the function to fetch the product list on page load
fetchProductList();