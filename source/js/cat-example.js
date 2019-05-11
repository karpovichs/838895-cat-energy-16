var example = document.querySelector('.example');
var beforeImage = document.querySelector('.example__image--before');
var afterImage = document.querySelector('.example__image--after');
var beforeToggle = document.querySelector('.example__toggle-label--before');
var afterToggle = document.querySelector('.example__toggle-label--after');
var imageWrapper = document.querySelector('.example__column-wrapper--cat');
var control = document.querySelector('.example__control');
var bar = document.querySelector('.example__bar');

beforeToggle.addEventListener('click', function() {
  beforeImage.style.width = '100%';
  afterImage.style.width = '0%';
  imageWrapper.style.background = '#f2f2f2';
  control.classList.add('example__control--before');
  bar.classList.add('example__bar--before');
});

afterToggle.addEventListener('click', function() {
  afterImage.style.width = '100%';
  beforeImage.style.width = '0%';
  imageWrapper.style.background = '#eaeaea';
  control.classList.add('example__control--after');
  bar.classList.add('example__bar--after');
});
