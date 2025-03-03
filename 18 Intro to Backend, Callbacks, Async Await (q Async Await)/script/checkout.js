import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from './card.js';


async function loadPage() {
    try {
        await loadProductsFetch();

        await new Promise(resolve => {
            loadCart(() => {
                resolve();
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