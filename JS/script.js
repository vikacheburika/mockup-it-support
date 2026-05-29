'use strict';

const steps = document.querySelectorAll('.step');

steps.forEach(step => {

  step.addEventListener('mouseenter', () => {
    removeActive();
    step.classList.add('active');
  });

  step.addEventListener('click', () => {
    removeActive();
    step.classList.add('active');
  });

});

function removeActive() {
  steps.forEach(step => {
    step.classList.remove('active');
  });
}