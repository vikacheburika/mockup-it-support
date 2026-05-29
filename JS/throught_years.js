'use strict';
let sticks = document.getElementsByClassName("support-stick");
let dates = document.getElementsByClassName("support-box-dates");
let text2013 = document.getElementById("2013");
let text2015 = document.getElementById("2015");
let text2018 = document.getElementById("2018");
let text2020 = document.getElementById("2020");
let text2022 = document.getElementById("2022");
let btn2013 = document.getElementById("stick_support2013");
let btn2015 = document.getElementById("stick_support2015");
let btn2018 = document.getElementById("stick_support2018");
let btn2020 = document.getElementById("stick_support2020");
let btn2022 = document.getElementById("stick_support2022");
let num2013 = document.getElementsByName("2013")[0];
let num2015 = document.getElementsByName("2015")[0];
let num2018 = document.getElementsByName("2018")[0];
let num2020 = document.getElementsByName("2020")[0];
let num2022 = document.getElementsByName("2022")[0];
btn2013.addEventListener("click", function() {
    text2013.style.color = "white";
    text2013.style.fontSize = "76px";
    text2015.style.color = "lightgray";
    text2015.style.fontSize = "60px";
    text2018.style.color = "lighrgray";
    text2018.style.fontSize = "60px";
    text2020.style.color = "lighrgray";
    text2020.style.fontSize = "60px";
    text2022.style.color = "lighrgray";
    text2022.style.fontSize = "60px";
    num2013.style.color = "white";
    num2015.style.color = "lightgray";
    num2018.style.color = "lightgray";
    num2020.style.color = "lightgray";
    num2022.style.color = "lightgray";
  
});
btn2015.addEventListener("click", function() {
    text2013.style.color = "lightgray";
    text2013.style.fontSize = "60px";
    text2015.style.color = "white";
    text2015.style.fontSize = "76px";
    text2018.style.color = "lightgray";
    text2018.style.fontSize = "60px";
    text2020.style.color = "lightgray";
    text2020.style.fontSize = "60px";
    text2022.style.color = "lightgray";
    text2022.style.fontSize = "60px";
    num2013.style.color = "lightgray";
    num2015.style.color = "white";
    num2018.style.color = "lightgray";
    num2020.style.color = "lightgray";
    num2022.style.color = "lightgray";

   
});
btn2018.addEventListener("click", function() {
    text2013.style.color = "lightgray";    
    text2013.style.fontSize = "60px";
    text2015.style.color = "lightgray";
    text2015.style.fontSize = "60px";
    text2018.style.color = "white";
    text2018.style.fontSize = "76px";
    text2020.style.color = "lightgray";
    text2020.style.fontSize = "60px";
    text2022.style.color = "lightgray";
    text2022.style.fontSize = "60px";   
    num2013.style.color = "lightgray";
    num2015.style.color = "lightgray";
    num2018.style.color = "white";
    num2020.style.color = "lightgray";
    num2022.style.color = "lightgray";

});
btn2020.addEventListener("click", function() {
    text2013.style.color = "lightgray";    
    text2013.style.fontSize = "60px";
    text2015.style.color = "lightgray";
    text2015.style.fontSize = "60px";
    text2018.style.color = "lightgray";
    text2018.style.fontSize = "60px";
    text2020.style.color = "white";
    text2020.style.fontSize = "76px";
    text2022.style.color = "lightgray";
    text2022.style.fontSize = "60px";
    num2013.style.color = "lightgray";
    num2015.style.color = "lightgray";
    num2018.style.color = "lightgray";
    num2020.style.color = "white";
    num2022.style.color = "lightgray";
  
});
btn2022.addEventListener("click", function() {
    text2013.style.color = "lightgray";
    text2013.style.fontSize = "60px";
    text2015.style.color = "lightgray";
    text2015.style.fontSize = "60px";
    text2018.style.color = "lightgray";
    text2018.style.fontSize = "60px";
    text2020.style.color = "lightgray";
    text2020.style.fontSize = "60px";
    text2022.style.color = "white";
    text2022.style.fontSize = "76px";
    num2013.style.color = "lightgray";  
    num2015.style.color = "lightgray";
    num2018.style.color = "lightgray";
    num2020.style.color = "lightgray";
    num2022.style.color = "white";
    
  
});








