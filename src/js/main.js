const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const tabSelector = document.querySelector('.tab__selector');

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
    const headerLogo = document.querySelector('.header__logo');
    headerMenu.classList.remove('adaptive');
    headerLogo.after(headerMenu);
  }
}

function highlightSelector(newSelector) {
  const activeSelector = tabSelector.getElementsByClassName('active');
  if (activeSelector) {
    activeSelector.classList.remove('active');
    newSelector.classList.add('active');
  }
}

window.addEventListener('resize', () => {
  adaptive_header(window.outerWidth);
});

tabSelector.addEventListener('click', (e) => {
  const selector = e.target.closest('.selector__item');
  if (!selector) {
    return;
  }
  highlightSelector(selector);
  selector.classList.toggle('active');
  const sliderName = selector.dataset.slider;
  console.log(sliderName);
});

adaptive_header(window.outerWidth);
