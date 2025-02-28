import { cart } from '../card.js';
import { getProduct } from '../../data/products.js';


/* 
    main idea of javascript
    1. save the data
    2. generate the HTML
    3. Make it interactive
*/

export function renderPaymentSummary() {
    let productPriceCents = 0;
    cart.forEach(cartItem => {
        const product = getProduct(cartItem.productId);
        // console.log(product);
        productPriceCents += product.priceCents * cartItem.quantity;
    });
    console.log(productPriceCents);
}
