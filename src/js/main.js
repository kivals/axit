const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');

if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
}

function isAdaptive(node) {
  return node.classList.contains('adaptive');
}

function adaptive_header(width) {
  const headerMenu = document.querySelector('nav.header__menu');

  if (width < 768) {
    if (!isAdaptive(headerMenu)) {
      headerMenu.classList.add('adaptive');
      burgerMenu.append(headerMenu);
    }
  } else if (headerMenu.classList.contains('adaptive')) {
    headerMenu.classList.remove('adaptive');
    // TODO вернуть обратно меню!
  }
}

window.addEventListener('resize', () => {
  adaptive_header(window.outerWidth);
});
