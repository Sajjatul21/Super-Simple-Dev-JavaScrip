import { formateCurrency } from "../script/utils/money.js";

// 1. basic test cases
if (formateCurrency(2095) === '20.95') {
    console.log('passed');
}
else {
    console.log('failed');
}
// 2. edge cases
if (formateCurrency(0) === '0.00') {
    console.log('passed');
}
else {
    console.log('failed');
}

if (formateCurrency(2000.5) === '20.01') {
    console.log('passed');
}
else {
    console.log('failed');
}

/* 
    2 type of test cases
    1. basic test cases
        = tests if the code is working
    2. edge cases
        = test with values that are tricky

*/