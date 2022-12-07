// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', show);

// create using add and remove functions
// function show() {
//     if (links.classList.contains('show-links')) {
//         links.classList.remove('show-links');
//     } else {
//         links.classList.add('show-links');
//     }
// };

// using only toggle
function show() {
    links.classList.toggle('show-links');
}
