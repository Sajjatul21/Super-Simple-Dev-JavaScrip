import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from './card.js';


async function loadPage() {
    console.log('load page');
}
loadPage().then(()=>{
    console.log("next step")
});

Promise.all([
    loadProductsFetch(),
    new Promise(resolve => {
        loadCart(() => {
            resolve();
        });
    })

]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

//fetch () = Is better way to make HTTPS request