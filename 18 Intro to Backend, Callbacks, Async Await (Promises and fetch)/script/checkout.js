import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from './card.js';

new Promise((resolve) => {
    loadProducts(() => { //1. wait for it to finish
        resolve();       //2. go to the next step
    });
}).then(() => {
    new Promise(resolve => {
        loadCart(() => {   //3. wait for it to finish
            resolve();     //4. go to the next step
        });
    });
}).then(() => {             //5. run this code 
    renderOrderSummary(); 
    renderPaymentSummary();
})

/* 
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});  */