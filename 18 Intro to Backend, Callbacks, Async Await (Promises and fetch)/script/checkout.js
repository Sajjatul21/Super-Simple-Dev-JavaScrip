import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';

new Promise(() => {
    console.log('Promise'); //when create a promise  it run the inner function immediately
});

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});