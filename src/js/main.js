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

  // carousel
  const coffeeCards = document.querySelectorAll('.coffe-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  indicators[0].classList.add('is-active');
  
  let currentIndex = 0;

  function showCard(index) {
    currentIndex = index;

    coffeeCards.forEach((card, i) => {
      card.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('is-active', i === currentIndex);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % coffeeCards.length;
    showCard(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + coffeeCards.length) % coffeeCards.length;
    showCard(currentIndex);
  });
});
