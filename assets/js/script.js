// block 1: add logic to show the date
// - - - - - - - - - - - - - - - - - - -
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dateEl = document.querySelector(".header__meta-date");

// handles showing the date below the title heading
const setDate = () => {
  let today = new Date();
  const dd = today.getDate();
  const day = today.getDay();
  const mm = today.getMonth();
  const yyyy = today.getFullYear();

  today = days[day] + " " + months[mm] + " " + dd + ", " + yyyy;
  dateEl.textContent = today;
};

setDate();

// block 2: add logic to animate the map image
// - - - - - - - - - - - - - - - - - - -
const imageWrapper = document.querySelector(".wrapper__image");
const mapOutline = document.querySelector(".map-outline");
let isMouseOver = null;
let hasMouseLeft = true;

imageWrapper.addEventListener("mouseenter", () => {
  isMouseOver = true;
  hasMouseLeft = false;
  setTimeout(() => {
    if (isMouseOver && !hasMouseLeft) {
      mapOutline.classList.remove("animate-leave");
      mapOutline.classList.add("animate-enter");
      hasMouseLeft = true;
    }
  }, 200);
});

imageWrapper.addEventListener("mouseleave", () => {
  isMouseOver = false;
  setTimeout(() => {
    if (!isMouseOver && hasMouseLeft) {
      mapOutline.classList.remove("animate-enter");
      mapOutline.classList.add("animate-leave");
    }
  }, 200);
});

// block 3: add logic to style "learn more" links
// - - - - - - - - - - - - - - - - - - -
const linkElements = document.getElementsByClassName("link-container");

function addHoverClass() {
  this.querySelector(".chevron-wrapper").classList.add("active");
  this.querySelector(".chevron-body").classList.add("active");
}

function removeHoverClass() {
  this.querySelector(".chevron-wrapper").classList.remove("active");
  this.querySelector(".chevron-body").classList.remove("active");
}

for (let i = 0; i < linkElements.length; i++) {
  linkElements[i].addEventListener("mouseover", addHoverClass);
  linkElements[i].addEventListener("mouseleave", removeHoverClass);
}

// block 4: add logic to switch between the available quotes
// - - - - - - - - - - - - - - - - - - -
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quotesDB = [
  {
    author: "Codedad",
    quote:
      "You can learn and achieve anything if you are consistent. Being consistent will turn the unnatural feeling of writing code into something natural.",
  },
  {
    author: "Ryan Dahl",
    quote:
      "You can never understand everything but you should push yourself to understand the system.",
  },
  {
    author: "Henry David Thoreau",
    quote:
      "Go confidently in the direction of your dreams. Live the life you've imagined.",
  },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    author: "Chris Sean",
    quote:
      "We are not born with potential, we show potential through our hard work.",
  },
];

let index = 1;
const updateQuotes = () => {
  const { author, quote } = quotesDB[index];
  quoteEl.textContent = quote;
  authorEl.textContent = author;
  index++;

  // restart the quotes slider when the last quote is reached
  if (index > quotesDB.length - 1) {
    index = 0;
  }
};

setInterval(updateQuotes, 7000);

// block 5: add logic to copy color code on click
// - - - - - - - - - - - - - - - - - - -
const hexagons = document.querySelectorAll(".hexagon");

hexagons.forEach((hexagon) => {
  hexagon.addEventListener("click", () => {
    let colorValueEl = hexagon.querySelector(".color-text .color-value");
    let color = colorValueEl.textContent.trim();

    // check if the Navigator object is supported
    if (!navigator) {
      alert("Please copy color text manually!");
      return;
    }

    // get the copied text from Navigator
    navigator.clipboard.writeText(color);
    colorValueEl.ariaLabel = "copied! 😉";

    setTimeout(() => {
      colorValueEl.ariaLabel = "click to copy";
    }, 1000);
  });
});
