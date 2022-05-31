let url="https://course-api.com/javascript-store-products"

let products_section=document.querySelector(".products_section")

function show_products(data){
  let data_fetched =data.map((product) =>{
      const { id } = product;
      const { name, price } = product.fields;
      const { url } = product.fields.image[0];
      
      // id,name,price,img
      return `<div class="product" >
            <a class="link mb-3" href="product.html?id=${id}"><img src="${url}" class="product_image mb-3 " alt="${name}" /></a>
            <footer>
              <h5 class="name text-center mb-2">${name}</h5>
              <h5 class="price text-center">$${price}</h5>
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


 