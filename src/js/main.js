document.addEventListener('DOMContentLoaded', function () {
  function loadComponent(selector, path) {
    const element = document.querySelector(selector);

    if (!element) {
      return Promise.resolve();
    }

    return fetch(path)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        element.innerHTML = html;
      });
  }

  loadComponent('#header', './src/components/header.html')
    .then(() => {
      return loadComponent('#header-nav', './src/components/navigation.html');
    })
    .then(() => {
      initThemeMode();
      initMobileMenu();
    });

  loadComponent('#aside-nav', './src/components/navigation.html');
  loadComponent('#footer', './src/components/footer.html');

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

  // mobile muenu
  function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-side-menu');
    const sideMenuLinks = document.querySelectorAll('.side-menu .nav-link');
    const body = document.querySelector('.body');

    if (!mobileMenu) {
      return;
    }

    mobileMenu.addEventListener('click', () => {
      body.classList.toggle('is-active');
    });

    sideMenuLinks.forEach((link => {
      link.addEventListener('click', function () {
        body.classList.remove('is-active');
      })
    }))
  }
});
