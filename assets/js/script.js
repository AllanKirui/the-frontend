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
const link = document.getElementById("link-container");
const chevronContainer = document.getElementById("chevron-wrapper");
const chevronBody = document.getElementById("chevron-body");

link.addEventListener("mouseenter", () => {
  chevronContainer.classList.add("active");
  chevronBody.classList.add("active");
});

link.addEventListener("mouseleave", () => {
  chevronContainer.classList.remove("active");
  chevronBody.classList.remove("active");
});
