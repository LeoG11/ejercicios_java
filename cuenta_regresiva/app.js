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
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2020, 4, 24, 11, 30, 0);
//console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
//console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//sacar el tiempo en milisegundos

const futureTime = futureDate.getTime();
console.log(futureDate);

function getRemainingTime() {
    const today = new Date().getTime();
    //console.log(today);
    const t = futureTime - today;
    //console.log(today);

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds

    //valores en milisengundos
    const oneDay = 24 * 60 * 60 * 1000;
    //console.log(oneDay);
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calcular los valores
    let days = t / oneDay;
    days = Math.floor(days);
    //console.log(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    //console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //Colocar valores del arreglo
    const values = [days, hours, minutes, seconds];
    //Agregar 0
    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    //si el tiempo se acabo
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this
        giveway has expired</h4>`;
    }
}
// contador
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

