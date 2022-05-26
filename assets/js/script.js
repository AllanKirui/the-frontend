const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
  const day = today.getDay() - 1; // Minus 1 because Sunday is 0!
  const mm = today.getMonth();
  const yyyy = today.getFullYear();

  today = days[day] + " " + months[mm] + " " + dd + ", " + yyyy;
  dateEl.textContent = today;
};

setDate();
