var example = document.querySelector('.example');
var beforeImage = document.querySelector('.example__image--before');
var afterImage = document.querySelector('.example__image--after');
var beforeToggle = document.querySelector('.example__toggle-label--before');
var afterToggle = document.querySelector('.example__toggle-label--after');

beforeToggle.addEventListener('click', function() {
  example.classList.remove('example--after');
  beforeImage.classList.remove('example__image--hidden');
  afterImage.classList.add('example__image--hidden');
});

afterToggle.addEventListener('click', function() {
  example.classList.add('example--after');
  afterImage.classList.remove('example__image--hidden');
  beforeImage.classList.add('example__image--hidden');
});
