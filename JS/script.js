'use strict';

let langBtn = document.getElementById('lang_btn');
let languages = document.getElementById('langs');
let engLang = document.getElementById("engl");
let lithLang = document.getElementById("lthl");
let langText = document.getElementById('en');
let cnt = 0;
 languages.style.visibility = "hidden"
langBtn.addEventListener('click', function(){
   
if (cnt % 2 === 0 ){
    languages.style.visibility = "visible";
    cnt++
}
else if (cnt % 2 !== 0){
    languages.style.visibility = "hidden"
    cnt++
}
    
});
engLang.addEventListener("click", function(){
    langText.textContent = "EN"
    languages.style.visibility ="hidden"
});
lithLang.addEventListener("click", function(){
    langText.textContent = "LT"
    languages.style.visibility ="hidden"
});
