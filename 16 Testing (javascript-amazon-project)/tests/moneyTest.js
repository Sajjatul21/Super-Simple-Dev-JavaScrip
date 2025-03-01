import { formateCurrency } from "../script/utils/money.js";


if (formateCurrency(2095) === '20.95') {
    console.log('passed');
}
else {
    console.log('failed');
}