document.addEventListener('DOMContentLoaded', function () {
  function loadComponent(selector, path) {
    const element = document.querySelector(selector);

    return fetch(path)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        element.innerHTML = html;
      });
  }

  loadComponent('#header', './src/components/header.html').then(() => {
    initThemeMode();
    loadComponent('#header-nav', './src/components/navigation.html');
    initMobileMenu();
  });
  loadComponent('#aside-nav', './src/components/navigation.html');
  loadComponent('#footer', './src/components/footer.html');

  // theme mode
  function initThemeMode() {
    const themeButtons = document.querySelectorAll('.theme-mode-btn');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }

    themeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const theme = button.classList.contains('dark') ? 'dark' : 'light';

        document.body.classList.toggle('dark-theme', theme === 'dark');

        localStorage.setItem('theme', theme);
      });
    });
  }

  function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu-btn');
    mobileMenu.addEventListener('click', () => {
       document.body.classList.toggle('is-active')
    })
  }
});
