let url="https://course-api.com/javascript-store-products"

let products_section=document.querySelector(".products_section")

function show_products(data){
  let data_fetched =data.map((product) =>{
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img
      return `<div class="product" >
            <a class="link mb-3" href="product.html?id=${id}"><img src="${img}" class="product_image mb-3 " alt="${title}" /></a>
            <footer>
              <h5 class="name text-center mb-2">${title}</h5>
              <h5 class="price text-center">$${formatPrice}</h5>
            </footer>
          </div>`;
    }
    
    ).join('')
    
    products_section.innerHTML=`${data_fetched}`
  }

function get_data_withshow(){
  products_section.innerHTML = '<div class="loading">loading...</div>';

  fetch(url).then((response) => response.json()).then((data)=>{
   show_products(data)
   console.log(data)
  }).catch((error) =>products_section.innerHTML = '<p class="error">there was an error</p>')
}
get_data_withshow()


 