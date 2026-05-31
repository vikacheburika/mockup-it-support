'use strict';
let header = document.getElementById("why-menu");
let btns = header.getElementsByClassName("word");
let ttl = document.getElementById("title")
let slider = document.getElementById("slider")
let words = ["team",'communication','solution','quality']
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  ttl.innerHTML = "Close-knit "+words[i]
 
  slider.getElementsByClassName("active-slider")[0].style.top = (i * 30)+"%";
  
  });
}