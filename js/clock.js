const clock = document.querySelector("#clock h2");

function createClock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

createClock();
setInterval(createClock, 1000);