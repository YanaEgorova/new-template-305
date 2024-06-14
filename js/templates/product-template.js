import { imagesList } from './product-images.js';
import { description } from './product-description.js';
import { dropdown } from './size-dropdown.js';

export const productTemplate = (product, amount) => {
    var clothingSizes = ["XS", "S", "M", "L", "XL"];
  var ringSizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
   
    return `
   <div class="prod__block js_prod__block" id="${product.id}">
   <div class="prod__img-box">
   <span class="prod__img-span">ON SALE</span>
       <img src="${product.image}" alt="" class="img prod__img js_prod__img">
      
      ${product.images ? imagesList(product.images) : ''}

   </div>
   <div class="prod__block-right">
      
           <h1 class="prod__title js_prod__title">${product.name}</h1>
           <div class="header-stars">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <path d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
	C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
	c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
	c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
	c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
	C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <path d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
	C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
	c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
	c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
	c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
	C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <path d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
	C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
	c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
	c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
	c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
	C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <path d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
	C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
	c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
	c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
	c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
	C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                  <path d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
	C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
	c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
	c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
	c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
	C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>

              </div>
               <img src="../../img/instock.png" alt="">
          
               <div class="prod__price-box">
               <p>
                   Price per one:
                  <span>$
                   <span class="js_price">${(product.price).toFixed(2)}</span>
               </span>
               </p>
            <div class="prod__price-box">
            <p>Total:
            <span class="prod__price js_prod__price">$ ${(product.price).toFixed(2)}</span>
            </p>
       
       </div>
               </div>
            
     
               
             ${product.type == "ring" ? dropdown(ringSizes, "Ring Size:") : ''}
       ${product.type == "clothing" ? dropdown(clothingSizes, "Clothing Size:") : ''}

    <div class="prod__block-box">
     <div class="add__btn-box">
        <div class="prod__btns-box">
       <span>Quantity</span>
       <div class="prod__quantity">
        <span class="prod__amount-span js_prod__amount-span">${amount || 1}</span>
        <div>
            <button class="prod__btn prod__btn-more js_prod__btn js_prod__btn-more">+</button>
              <button class="prod__btn prod__btn-less js_prod__btn js_prod__btn-less disable-btn">-</button>
        </div>
       </div>
       </div>
        
     
       <button class="add__btn js_add__btn">
       <svg  width="800px" height="800px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M14.252 4.59a.924.924 0 0 1 .921.92v3.602a1.048 1.048 0 0 1-.916 1.017l-8.511.883a.573.573 0 0 1-.145.019.577.577 0 1 0 0 1.154h8.488a.563.563 0 1 1 0 1.126h-.91a1.03 1.03 0 1 1-1.104 0H6.849a1.03 1.03 0 1 1-1.104 0H5.6a1.703 1.703 0 1 1 0-3.406.585.585 0 0 1 .128.014L3.111 3.911H1.39a.563.563 0 1 1 0-1.125h2.09a.562.562 0 0 1 .515.337l.64 1.466h9.617z"/></svg>
       add to cart</button>
       
       </div>
         <p class="text success-message js_success-message">Success! You have added <span class="js_success-product-name"></span> to your shopping cart!</p>
    </div>
   
      

     
       
     
 
      
       <div class="prod__text-block">
       ${description(product.description)}
         </div>
         ${product.type == "clothing" ? '<img style="width: 100%;" src="img/size_tops.png"> <img style="width: 100%;" src="img/size_bottoms.png">' : ''}
         
     
   </div>
</div>
`
}