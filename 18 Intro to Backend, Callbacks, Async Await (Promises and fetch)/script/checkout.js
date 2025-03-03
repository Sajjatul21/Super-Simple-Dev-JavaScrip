import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from './card.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value-1');
        });
    }),
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
/* 
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value-1');
    });
}).then((value) => {
    console.log(value);
    new Promise(resolve => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
})
 */
/* 
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});  */