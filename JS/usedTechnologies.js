document.addEventListener("DOMContentLoaded", function() {
  let steps = document.querySelectorAll(".timeline .step");

  steps.forEach((step) => {
    step.addEventListener("click", function() {
      let current = document.querySelector(".timeline .step.act");
      if (current) {

        let existingImages = current.querySelectorAll(".tech-foto");
        existingImages.forEach(img => img.remove());
        current.classList.remove("act");
      }
      let jsImg = document.createElement("img");
      jsImg.src = "IMG/Icon_1.svg";
      jsImg.alt = "js";
      jsImg.classList.add("tech-foto");
      this.appendChild(jsImg);
      this.classList.add("act");
    });
  });
});    
 