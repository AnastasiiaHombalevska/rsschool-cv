document.addEventListener('DOMContentLoaded', function () {
  // menu
  const menuLinks = document.querySelectorAll('.menu-link');
  const menuCategories = document.querySelectorAll('.cards-conteiner');

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');

      menuCategories.forEach((category) => {
        category.style.display =
          category.id === targetId.slice(1) ? 'flex' : 'none';
      });
    });
  });

  // modal
  const cards = document.querySelectorAll('.card');
  const modalCloseBtn = document.querySelector('.product-close-btn');
  const menu = document.querySelector('.modal');

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();

      const cardImg = card.querySelector('.card-img');
      const cardTitle = card.querySelector('.card-title');
      const cardDescrp = card.querySelector('.card-descrp');
      const cardPrice = card.querySelector('.card-price');

      const modalImage = document.querySelector('.modal-image');
      const productTitle = document.querySelector('.product-title');
      const productDescription = document.querySelector('.product-description');
      const productPrice = document.querySelector('.product-price');

      modalImage.src = cardImg.src;
      modalImage.alt = cardImg.alt;

      productTitle.textContent = cardTitle.textContent;
      productDescription.textContent = cardDescrp.textContent;
      productPrice.textContent = cardPrice.textContent;

      menu.classList.add('is-active');
    });
  });

  modalCloseBtn.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.remove('is-active');

    modalImage.src = '';
    modalImage.alt = '';
    productTitle.textContent = '';
    productDescription.textContent = '';
    productPrice.textContent = '';
  });
})
