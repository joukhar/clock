var color = document.getElementById("color");


color.onchange = () => {
    document.body.style.background = color.value;
    localStorage.setItem("colorValue", color.value);
}

function test() {
    let d = new Date();
    var date = document.getElementById("date");
    var clock = document.getElementById("clock");
    clock.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    date.innerText = (parseInt(d.getDay()) + 2) + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear();
    setInterval(test, 1000);
}

onload = () => {
    test();
    document.body.style.background = localStorage.getItem("colorValue");
}