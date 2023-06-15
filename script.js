var x1 = document.getElementById('k');




function off() {
    localStorage.setItem("off", x1.style.animationName = "w");
}
function on() {
    localStorage.setItem("off", x1.style.animationName = "n3na3");
}
localStorage.getItem("off");

x1.style.animationName = localStorage.getItem("off");
/*jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */
var x = document.getElementById('logo2');
var y = document.getElementById('waraq_n3na3');


function off2() {
    localStorage.setItem("off2", y.style.animationName = "w");
    localStorage.setItem("off2", x.style.animationName = "w");
}
function on2() {
    localStorage.setItem("off2", y.style.animationName = "waraq_n3na3");
    localStorage.setItem("off2", x.style.animationName = "logo2");
}
localStorage.getItem("off2");

y.style.animationName = localStorage.getItem("off2");
x.style.animationName = localStorage.getItem("off2");

