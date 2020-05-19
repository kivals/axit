const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const tabSelector = document.querySelector('.tab__selector');

/*
  Управляем высотой tab блока, т.к. в нем есть
  дочерние блоки с position:absolute
  var biggestHeight = 0;
// Loop through elements children to find & set the biggest height
$(".container *").each(function(){
 // If this elements height is bigger than the biggestHeight
 if ($(this).height() > biggestHeight ) {
   // Set the biggestHeight to this Height
   biggestHeight = $(this).height();
 }
});

// Set the container height
$(".container").height(biggestHeight);
*/

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
  if (activeSelector[0] && activeSelector.length === 1) {
    activeSelector[0].classList.remove('active');
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

  const sliderItem = document.querySelector(`.slider-item.${selector.dataset.slider}`);
  if (!sliderItem) {
    return;
  }
  // ищем visible-слайд
  const currentSlider = document.querySelector('.slider-item.visible');
  if (currentSlider) {
    currentSlider.classList.remove('visible');
  }

  // устанавливаем класс visible для нового слайда
  sliderItem.classList.add('visible');

  // устанавливаем размер таб панели из position absolut слайдов
  const sliderBody = document.querySelector('.slider-body');
  const sliderItemHeight = getComputedStyle(sliderItem).height;
  const sliderBodyHeight = getComputedStyle(sliderBody).height;
  if (parseInt(sliderBodyHeight) - parseInt(sliderItemHeight)) {
    sliderBody.style.height = sliderItemHeight;
  }
});

adaptive_header(window.outerWidth);
