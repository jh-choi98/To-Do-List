const clock = document.querySelector("#clock-main h2");
const amPm = document.querySelector("#clock-sub span:first-child");
const subClock= document.querySelector("#clock-sub span:last-child");
const dateToday = document.querySelector("#date span");

function createDate(date) {
    const year = String(date.getFullYear());
    const month = String(1 + date.getMonth());
    const dateOfMonth = String(date.getDate());
    const day = date.getDay();
    let dayOfWeek;

    if (day === 0) {
        dayOfWeek = "Sun";
    } else if (day === 1) {
        dayOfWeek = "Mon";
    } else if (day === 2) {
        dayOfWeek = "Tue";
    } else if (day === 3) {
        dayOfWeek = "Wed";
    } else if (day === 4) {
        dayOfWeek = "Thu";
    } else if (day === 5) {
        dayOfWeek = "Fri";
    } else {
        dayOfWeek = "Sat";
    }

    dateToday.innerText = `${year}.${month.padStart(2, "0")}.${dateOfMonth.padStart(2, "0")} ${dayOfWeek}`;
}

function createClock() {
    const date = new Date();
    const hoursInt = date.getHours();
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    let hours;
    if (hoursInt >= 12) {
        hours = String(hoursInt-12);
        amPm.innerText = "PM"
    } else {
        hours = String(hoursInt);
        amPm.innerText = "AM"
    }
    clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`
    subClock.innerText = `${seconds.padStart(2, "0")}`;
    createDate(date);
}

createClock();
setInterval(createClock, 1000);