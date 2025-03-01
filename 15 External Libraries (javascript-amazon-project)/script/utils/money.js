export function formateCurrency(priceCent) {
    return (Math.round(priceCent) / 100).toFixed(2);
}