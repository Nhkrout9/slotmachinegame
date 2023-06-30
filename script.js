let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let values = ['😎', '😬', '☹️', '😭', '😱'];
let inSpeed = document.getElementById("inpSpeed");

function getRandomValues() {
    return values[parseInt(Math.random() * 5)]
}
setInterval(() => {
        value1.innerText = getRandomValues();
        value2.innerText = getRandomValues();
        value3.innerText = getRandomValues();
    }, 300

)
inSpeed.onchange = function(ev) {
    console.log("Value changed ", ev.target.value);
    document.documentElement.style.setProperty('--speed', ev.target.value);
}