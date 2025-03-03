import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';

new Promise((resolve) => {
    // resolve -lets us control when to go to the next step
    loadProducts(() => { // first we wun this asynchronous code .then we wait for it to finish.then we run resolve.
        resolve(); // resolve makes it go to the next step (then(()={}))
    }).then(() => {
        console.log('next step');
    });
});

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});