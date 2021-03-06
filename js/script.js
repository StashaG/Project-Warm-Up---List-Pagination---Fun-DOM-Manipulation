/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Fun DOM Manipulation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to target the `body` element */
const body = document.querySelector('body');


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a `H1` element and store it in a variable

  // 1a. Set the `H1` element's `innerHTML` equal to "Fun DOM Manipulation"

  // 1a. Set the `H1` element's `id` equal to "main-heading"

  // 1b. Append the `H1` element to the `body` element - body variable created for you above

  let h1 = document.createElement('h1');
  h1.innerHTML = "Fun DOM Manipulation";
  const mainId = document.getElementById('main-heading'); 
  h1.id = mainId;
  document.body.appendChild(h1);
  


// 2. Create a `DIV` element and store it in a variable

  // 2a. Set the `DIV` element's `id` attribute equal to "boat-container"

  // 2b. Set the `DIV` element's `class` attribute equal to "boat-container"

  // 2c. Append the `DIV` element to the `body` element - body variable created for you above

  let div = document.createElement('div');
  div.id = 'boat-container';
  div.className = 'boat-container';  
  document.body.appendChild(div);


// 3. Create an `IMG` element and store it in a variable

  // 3a. Set the `IMG` element's `src` attribute equal to "img/boat.png"

  // 3b. Set the `IMG` element's `alt` attribute equal to "Tugboat"

  // 3c. Set the `IMG` element's `id` attribute equal to "boat-img"

  // 3d. Append the `IMG` element to the `DIV` element you created 

  let img = document.createElement('img');
  img.src = 'img/boat.png';
  img.alt = 'Tugboat';
  img.id = 'boat-img';
  document.body.appendChild(img);
  

// 4. Create another `IMG` element and store it in a variable

  // 4a. Set the `IMG` element's `src` attribute equal to "img/mike.png"

  // 4b. Set the `IMG` element's `alt` attribute equal to "Mike The Frog"

  // 4c. Set the `IMG` element's `id` attribute equal to "mike"

  // 4d. Set the `IMG` element's `class` attribute equal to "mike"

  // 4e. Append the `IMG` element to the `body` element

  let img2 = document.createElement('img');
  img2.src = 'img/mike.png';
  img2.alt = 'Mike The Frog';
  img2.id = 'mike';
  img2.className = 'mike';
  document.body.appendChild(img2);
