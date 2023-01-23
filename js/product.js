const single_product = document.querySelector('.single_product');
const url = 'https://course-api.com/javascript-store-single-product';
function show_product_info(data) {
  const {
    company,
    description,
    name,
    price,
    image,
  } = data.fields;
  const { url } = image[0];
  document.title = name.toUpperCase();

  single_product.innerHTML = `
      <img src="${url}" class="img" alt="${name}" />
      <div class="product_info">
        <h1 class="mb-3">${name}</h1>
        <h4 class="mb-3">${company}</h4>
        <span>${price}</span>
        <p class="mb-3">
         ${description}
        </p>
        <button class="cart_btn">add to cart</button>
      </div>
    `;
}

function getdata() {
  single_product.innerHTML = `<div class="loading">loading....</div>`
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  fetch(`${url}?id=${id}`).then(res => res.json()).then(data => {
    show_product_info(data)
  }).catch(err => { single_product.innerHTML = `<div>item not found</div>` })
}

getdata()