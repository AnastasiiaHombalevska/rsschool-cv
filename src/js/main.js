document.addEventListener('DOMContentLoaded', function () {
  function loadComponent(selector, path) {
    const element = document.querySelector(selector);

    fetch(path)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        element.innerHTML = html;
      });
  }

  loadComponent('#header', './src/components/header.html');
  loadComponent('#footer', './src/components/footer.html');
});
