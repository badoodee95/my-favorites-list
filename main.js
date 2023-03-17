/*
let a = document.createElement("a");
a.href = "http://hackertyper.com/";
a.textContent = "Hack!";

document.body.appendChild(a);
*/


/*
 * Append Child Element
 * @todo reference - obtain a reference to where we'll add it
 * @todo create - create an li element
 * @todo modify - modify the new element text
 * @todo attach - attach new element to parent
 * 

// REFERENCE
let list = document.getElementById("my-favorite-movies");

// CREATE
let newMovie = document.createElement("li");

// MODIFY
newMovie.textContent = "Pirates of Silicon Valley";

// ATTACH
list.appendChild(newMovie);
*/

// Create a hyperling and append to page
let a = document.createElement('a');
a.href = 'https://www.reddit.com/';
a.textContent = 'reddit';
document.body.appendChild(a);



// Use my-favorite-movies example to create my-favorite-books
let bookList = document.getElementById("my-favorite-books");
let bookListArray = [...bookList.children];
let favBook3 = document.createElement('li');

favBook3.textContent = "Magium";
bookList.appendChild(favBook3);


//=================================================================
/*
 * Using insertBefore
 * @todo reference - obtain a reference to where we'll add it
 * @todo create - create an li element
 * @todo reference - obtain a reference to second element
 * @todo print - print second element reference to console
 * @todo insert - use insertBefore to add newMovie just before the second element.
 

// REFERENCE
const list = document.getElementById("my-favorite-movies");

// CREATE
let newMovie = document.createElement("li");
newMovie.innerText = "Dr. Strangelove";

// REFERENCE
let second = list.children[1];

// PRINT
console.log(second);

// INSERT
list.insertBefore(newMovie, second);
*/


// Using insertBefore() 

let favBook4 = document.createElement('li');
favBook4.textContent = 'The Way of Kings';

let firstBook = bookList.children[0];
console.log(firstBook);

bookList.insertBefore(favBook4, firstBook);

//=====================================================================================

/* my-closet
use insertBefore() to each list
*/

let closet = document.getElementById('my-closet');
let closetArray = [...closet.children];
let whiteShirt = document.createElement('li');
whiteShirt.textContent = "White Shirt";

let firstClothing = closet.children[0];
console.log(firstClothing);

closet.insertBefore(whiteShirt, firstClothing);

//=======================================================================================

// Moving Elements: Create the dinner section using JavaScript only

let dinnerSection = document.createElement('ul');
dinnerSection.textContent = 'Dinner:';
let dinnerSectionArray = [...dinnerSection.children];
document.body.appendChild(dinnerSection);


let chicken = document.createElement('li');
chicken.textContent = 'Chicken';
dinnerSection.append(chicken);

let water = document.createElement('li');
water.textContent = 'Water';
dinnerSection.insertBefore(water, chicken);

let macNCheese = document.createElement('li');
macNCheese.textContent = 'Mac N Cheese';
dinnerSection.insertBefore(macNCheese, chicken);

let biscuit = document.createElement('li');
biscuit.textContent = 'Biscuit';
dinnerSection.append(biscuit);







