const xhr = new XMLHttpRequest(); // create a new  HTTP message to sand to the backend;

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
// xhr.open('GET', 'https://supersimplebackend.dev/hello');// response type date text
// xhr.open('GET', 'https://supersimplebackend.dev/products/first'); // response type date Json
// xhr.open('GET', 'https://supersimplebackend.dev/documentation'); // response type date HTML
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); // response type date images
xhr.send();

