import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from './card.js';

Promise.all([
    loadProductsFetch(),
    new Promise(resolve => {
        loadCart(() => {
            resolve();
        });
    })

]).then((value) => {
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});

//fetch () = Is better way to make HTTPS request