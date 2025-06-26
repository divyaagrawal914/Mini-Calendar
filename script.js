const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


const weekdays = ["Sunday","Monday","Tuesday","wednesday","thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","may","June","July","August","September","October","November","December"];

const today = new Date();

date.innerHTML = (today.getDate() < 10 ? "0": "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths [today.getMonth()];
year.innerHTML = today.getFullYear();