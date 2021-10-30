const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('links-wrapper')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})