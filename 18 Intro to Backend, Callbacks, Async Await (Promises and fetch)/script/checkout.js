import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';

new Promise((resolve) => {
    // resolve -lets us control when to go to the next step
    loadProducts(()=>{
        resolve()
    })
});

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});