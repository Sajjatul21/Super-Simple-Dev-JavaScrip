import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from './card.js';


async function loadPage() {
    try {
        // throw "error-1";
        // reject() is a function. it lets us create an error in the future.

        await loadProductsFetch();

        await new Promise((resolve, reject) => {
            // throw 'error -2'
            loadCart(() => {
                reject('Error-3');
                // resolve();
            });
        });
    } catch (error) {
        console.log('Unexpected Error. Please try again later');
    }

    renderOrderSummary();
    renderPaymentSummary();

    return 'value-2';
}
loadPage();