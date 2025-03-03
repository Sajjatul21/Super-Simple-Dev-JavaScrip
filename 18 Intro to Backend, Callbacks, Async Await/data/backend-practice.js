const xhr = new XMLHttpRequest(); // create a new  HTTP message to sand to the backend;

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
// xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.open('GET', 'https://supersimplebackend.dev/not-supported');
xhr.send();

// a backend only supports a certain set of url paths
// whenever we get a response from the backend.  the backend also gives us a status code
/* 
    status code 
    starts with 4 or 5 (400, 405, 5000) = failed
    starting with 4 means it was our problem we sent the request
    tarting with five means it was the backends problem for example the backend crashed
    
    Starts with 2 (200, 201, 204 = succeeded)
*/

