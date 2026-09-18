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
  });
  loadComponent('#footer', './src/components/footer.html');

  // theme mode
  function initThemeMode() {
    const themeButtons = document.querySelectorAll('.theme-mode-btn');

    themeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        document.body.classList.toggle(
          'dark-theme',
          button.classList.contains('dark')
        );
      });
    });
  }
});
