import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from './card.js';


async function loadPage() {
    console.log('load page');
    await loadProductsFetch();

    await new Promise(resolve => {
        loadCart(() => {
            resolve();
        });
    });
    renderOrderSummary();
    renderPaymentSummary();

    return 'value-2';
}
loadPage();