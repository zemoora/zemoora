
    // variables
const menuBtn = document.querySelector('.menu-button');
const hamburger = document.querySelector('.menu-button__burger');
const mobileNav = document.querySelector('.mobile-menu');
const themeSwitch = document.querySelector('.theme-toggle');
const themeBody = document.querySelector('.theme');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const bodyColor = document.body;

let switchThemeToggle = document.querySelector('.theme-toggle-btn');
switchThemeToggle.checked = false
function changeDark () {
      bodyColor.style.backgroundColor = '#fff';
      themeBody.classList.remove("theme-dark");
      themeBody.classList.add("theme-light");
      sun.classList.add('hide');
      moon.classList.remove('hide');
}
function changeLight() {
      bodyColor.style.backgroundColor = '#1b1d25';
      themeBody.classList.remove("theme-light");
      themeBody.classList.add("theme-dark");
      moon.classList.add('hide');
      sun.classList.remove('hide');
      sun.classList.add('show');
}

if(switchThemeToggle){
  initTheme();
  themeSwitch.addEventListener('change', () => {
    resetTheme();
  });
  function initTheme() {
    let darkThemeSelected = (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark');
    switchThemeToggle.checked = darkThemeSelected;
    darkThemeSelected ? changeLight(): changeDark();
  };

  function resetTheme() {
    if(!switchThemeToggle.checked) {
      changeDark();
      localStorage.removeItem('theme');
    } else {
      changeLight();
      localStorage.setItem('theme', 'dark');
    }
  };

}

