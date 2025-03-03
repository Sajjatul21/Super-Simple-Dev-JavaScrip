const xhr = new XMLHttpRequest(); // create a new  HTTP message to sand to the backend;
// open() first parameter : what type of message we can send;
// GET : get some information from the backend
// open() second parameter :second parameter tells a computer where to send this to send this HTTP massage;
// URL = Uniform Resource Locator

/* 
    https:// amazon.com
    https: to communicate with this computer after ( s)means we're using a secure version of http
     amazon.com: this is like an address it points to another computer on the internet. amazon.com points to one of amazon's backend computers 
*/
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); // send a request on supersimplebackend  backend;

// get the response property name ( response)
// it take time for the request to travel across the internet 
// xhr.response = undefine at first 
xhr.response