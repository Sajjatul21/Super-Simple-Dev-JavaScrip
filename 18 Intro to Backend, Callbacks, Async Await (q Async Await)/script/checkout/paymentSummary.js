import { cart } from '../card.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';
import { formateCurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    // console.log(product);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;


  const paymentSummaryHtml = `
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (3):</div>
          <div class="payment-summary-money">$${formateCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${formateCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${formateCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${formateCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${formateCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
          Place your order
        </button>
`;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
  document.querySelector('.js-place-order').addEventListener('click', async () => {
    // when we click this button, make a request the backend to create the order

    /*   GET : get something from the backend
       POST: we want to backend to create something
      PUT : update something
      DELETE: delete something 
      */
    // 
    try {
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: "POST",
        headers: {  // headers gives the backend more information about our request.
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: cart
        })
      });
      const order = await response.json();
      addOrder(order);
    } catch (error) {
      console.log('Unexpected error. Try again later');
    }
    window.location.href = 'orders.html';
  });
}
