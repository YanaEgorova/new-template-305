export const tableRowTemplate = (product) => {
  
  return `
  <tr id="${product.id}" class="js_remove-product-parent">
  <td class="text product-table-img-box" >
  <div class="product-table-img"><img  src="${product.image}" alt=""></div>
   
      <p>${product.name} ${product.ringSize ? "(Size " + product.ringSize + ")" : product.clothingSize ? "(Size " + product.clothingSize + ")" : ""}</p>
  </td>


  <td class="text">
      <p>${`$${(product.price).toFixed(2)}`}</p>
  </td>
    <td class="text">
    <p>${product.quantity}</p>
  </td>
 <td class="text">
      <p>$0.00</p>
  </td>
  <td class="text total-text">$${(product.quantity * product.price).toFixed(2)}</td>
   
  <td>
    <button class="orders__close-btn js_remove-product">
    <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
    </button>
  </td>
  </tr>
`
}