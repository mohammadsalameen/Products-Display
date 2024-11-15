// Create header elements
let mainHeader = document.createElement('div');
let createLogo = document.createElement('a');
let createMenu = document.createElement('div');
let createUl = document.createElement('ul');

// Array for menu items
let menuArray = ["Home", "About", "Service", "Contact"];

// Set attributes for header elements
mainHeader.setAttribute("class", "header");
createLogo.setAttribute("class", "logo");
createMenu.setAttribute("class", "menu");

// Create and append the logo
let logoText = document.createTextNode('Elzero');
createLogo.appendChild(logoText);
mainHeader.appendChild(createLogo);

// Loop through menuArray to create li elements
menuArray.forEach((menuItem) => {
  // Create li element for each menu item
  let createLi = document.createElement('li');
  let menuText = document.createTextNode(menuItem);

  // Append text to li and li to ul
  createLi.appendChild(menuText);
  createUl.appendChild(createLi);
});

// Append ul to the menu and header
createMenu.appendChild(createUl);
mainHeader.appendChild(createMenu);

// Append the header to the body
document.body.appendChild(mainHeader);

// Apply styles to the header elements
mainHeader.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; height: 50px;";
createLogo.style.cssText = "font-size: 25px; font-weight: bold; padding: 10px; text-align: center; color: #006400;";
createUl.style.cssText = "display: flex; justify-content: space-evenly; padding: 0px; margin: 0px; list-style: none; opacity: 0.6;";

// Apply inline-block and margin styles to li elements
let listItems = createUl.querySelectorAll("li");
listItems.forEach((li) => {
  li.style.display = "inline-block";
  li.style.marginRight = "20px";  // Adds space between li elements
});


// create a content elements
let mainDiv = document.createElement(`div`);
for (let i = 1; i <= 15; i++) {
  // Create a div element
  let myDiv = document.createElement('div');

  // Create a span element
  let mySpan = document.createElement('span');
  let spanText = document.createTextNode(`${i}`);
  mySpan.appendChild(spanText);  // Add text to span

  // Create a p element
  let myParagraph = document.createElement('p');
  let paragraphText = document.createTextNode(`Product`);
  myParagraph.appendChild(paragraphText);  // Add text to p

  // Append span and p to the div
  myDiv.appendChild(mySpan);
  myDiv.appendChild(myParagraph);

  // Append the div to the body (or any other container)
  mainDiv.appendChild(myDiv);
  myDiv.style.cssText = "height : 180px; width :300px; background-color :#F5F5F5; display :flex; flex-flow :column wrap; justify-content :center;  align-content :center; text-align :center; align-items :center; justify-content :center;"
  mySpan.style.cssText = "font-size :30px;"
  console.log(mainDiv);
  document.body.appendChild(mainDiv);

}

mainDiv.setAttribute("class", "container");
mainDiv.style.cssText = " margin :10px; padding :10px; background-color :#F5F5F5; display :flex; flex-wrap :wrap; flex-grow :1; width :100%;"

//create a footer class
let footerClass = document.createElement(`div`);
let footerParagraph = document.createElement(`p`);
let footerParagraphText = document.createTextNode(`Copyright 2024`);

footerClass.setAttribute("class", "footer");

footerParagraph.appendChild(footerParagraphText);
footerClass.appendChild(footerParagraph);
document.body.appendChild(footerClass);

footerClass.style.cssText = "height :50px; width :100%; background-color :#006400; display :flex; justify-content :center; align-content :center;";
footerParagraph.style.cssText = "text-align :center; "
console.log(footerClass);
