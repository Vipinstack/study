// event Bubbling and Capturing
// stop Propagation, Immediate Propagation, Prevent Default

// script.js
var button = document.querySelector('button');
var div = document.querySelector('div');
var body = document.querySelector('body');

button.addEventListener('click', function (e) {
    console.log('Button clicked');
},true); // true for capturing, false for bubbling

button.addEventListener('click', function (e) {
    e.stopImmediatePropagation(); // stop the event propagation immediately
    console.log('Button clicked2');
});

button.addEventListener('click', function (e) {
    e.stopPropagation(); // stop the event propagation for bubbling
    console.log('Button clicked3');
});

div.addEventListener('click', function (e) {
    console.log('Div clicked');
});