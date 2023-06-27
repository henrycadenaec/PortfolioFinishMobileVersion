const d = document;

// eslint-disable-next-line no-unused-vars
d.addEventListener('DOMContentLoaded', (e) => {
  function hamburgerMenu(panelBtn, burgerFlat1, burgerFlat2, hideFlat, panel, menuLink) {
    d.addEventListener('click', (e) => {
      if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
        d.querySelector(panelBtn).classList.toggle('is-active');
        d.querySelector(panel).classList.toggle('is-active');
        d.querySelector(burgerFlat1).classList.toggle('is-active');
        d.querySelector(burgerFlat2).classList.toggle('is-active');
        d.querySelector(hideFlat).classList.toggle('is-active');
      }
      if (e.target.matches(menuLink)) {
        d.querySelector(panelBtn).classList.remove('is-active');
        d.querySelector(panel).classList.remove('is-active');
        d.querySelector(burgerFlat1).classList.remove('is-active');
        d.querySelector(burgerFlat2).classList.remove('is-active');
        d.querySelector(hideFlat).classList.remove('is-active');
      }
    });
  }
  hamburgerMenu('.burger-container', '.shaping1-x', '.shaping2-x', '.none-x', '.panel', '.menu .menu-mobile');
});