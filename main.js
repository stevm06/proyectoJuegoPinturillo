let orangeBtn = document.getElementById("orange");
let greenBtn = document.getElementById("green");
let redBtn = document.getElementById("red");
let purpleBtn = document.getElementById("purple");
let imgchange = document.getElementById("imgchange");

orangeBtn.onclick = function(){
    imgchange.src = "./img/Avatar1.svg"
}

greenBtn.onclick = function(){
    imgchange.src = "./img/Avatar2.svg"
}

redBtn.onclick = function(){
    imgchange.src = "./img/Avatar3.svg"
}

purpleBtn.onclick = function(){
    imgchange.src = "./img/Avatar4.svg"
}

// redireccionar
document.getElementById("btnjugar").addEventListener("click", function() {
    window.location.href = "canvas.html"; // Redirecciona a canvas.html
});