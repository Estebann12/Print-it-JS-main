const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//--------------------------------//
//           variables            //
//--------------------------------//

//initialise for global scope
let shiftDirection = null;
//copy slides for work on copy
let slidesToShow = Array.from(slides);
// initialize slideNumber
let slideNumber = 1;

//---------------------------------//
//     Generate DOM elements       //
//---------------------------------//

//select parent banner node for childs
const divBanner = document.querySelector("#banner");

//----------- banner arrows ------------//
//create div arrow container
const divArrow = document.createElement("div");
//set class arrow to div
divArrow.setAttribute("class", "arrow");

//left arrow
const leftArrow = document.createElement("img");
leftArrow.setAttribute("class", "arrow_left");
leftArrow.src = "./assets/images/arrow_left.png";

//right arrow
const rightArrow = document.createElement("img");
rightArrow.setAttribute("class", "arrow_right");
rightArrow.src = "./assets/images/arrow_right.png";

//----------- banner img ------------//
//create banner img
const bannerImg = document.createElement("img");
//set src to banner img
bannerImg.src = `./assets/images/slideshow/${slidesToShow[0].image}`;
//set class to banner img
bannerImg.setAttribute("class", "banner-img");
bannerImg.setAttribute("alt", `slide-picture-${slideNumber}`);

//--------banner-tagline----------//
//create element p for tagline
const bannerTagLine = document.createElement("p");
//insert html tagline inside p from slidesToShow 
bannerTagLine.innerHTML = slidesToShow[0].tagLine;

//---------banner-dots------------//
//div dots container
const divDots = document.createElement("div");
divDots.setAttribute("class", "dots");

//regenerate divBanner content
divBanner.innerHTML = "";
// add previously created elements to DOM
divBanner.appendChild(divArrow);
divArrow.appendChild(leftArrow);
divArrow.appendChild(rightArrow);
divBanner.appendChild(bannerImg);
divBanner.appendChild(bannerTagLine);
divBanner.appendChild(divDots);

//genenerate 1 bullet point by object in slidesToShow array.
for (let i = 0; i < slidesToShow.length; i++) {
  //create div bullet point
  let divDot = document.createElement("div");
  //add div bullet point to DOM
  divDots.appendChild(divDot);
  //set class to div bullet point
  divDot.setAttribute("class", "dot");
  //active first bullet point
  if (i === 0) {
    divDot.classList.add("dot_selected");
  }
};

