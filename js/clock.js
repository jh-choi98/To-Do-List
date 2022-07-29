const clock = document.querySelector("#clock-main h2");
const amPm = document.querySelector("#clock-sub span:first-child");
const subClock= document.querySelector("#clock-sub span:last-child");

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
        amPm.innerText = "PM"
    }
    clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`
    subClock.innerText = `${seconds.padStart(2, "0")}`;
}

createClock();
setInterval(createClock, 1000);