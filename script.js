document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    toggleButton.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });