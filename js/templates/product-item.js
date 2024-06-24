export const item = product => {
  return `
  <li class="item">
  <div class="product__block js_product glass glass-m" id="${product.id}">
    <span class="product__block-span">Best Price</span>
  <div class="product__inner">

     <div class="product__block--inner">
    <div class="product__img-box">
      <img src="${product.image}" alt="" class="img" />
    </div>

    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
        <span class="product__price">
        $${product.price.toFixed(2)}
      </span>
      <p class="product__block-subtext"><span>Usually ships</span> in 3-5 days!</p>
   
  
    </div>
    </div>
    <div class="product__btn-block">


    

        <a href="product-page.html?id=${product.id}" class="products-btn btn--first" style="margin: ${product.type == "ring" || product.type == "clothing" || product.type == "shoes" ? 'auto' : ''}">product details</a>
      ${
        product.type == "ring" || product.type == "clothing" || product.type == "shoes" ? '' : '<button class="products-btn js_add-to-cart">add to cart</button>'
      }


    </div>
    </div>
  </div>
</li>
    `;
};
