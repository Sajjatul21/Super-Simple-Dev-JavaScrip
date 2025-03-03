const xhr = new XMLHttpRequest(); // create a new  HTTP message to sand to the backend;

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
// xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();