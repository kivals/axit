const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const tabSelector = document.querySelector('.tab__selector');
const activeSelector = document.querySelector('.selector__item.active');

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

/*
  Найти активный tab-selector
*/
function getActiveSlide() {
  const activeTab = document.querySelector('.selector__item.active');
  return document.querySelector(`.slider-item.${activeTab.dataset.slider}`);
}

/*
  Установить размер контейнера для слайдов
*/
function setSlideSize() {
  const activeSlide = getActiveSlide();
  const sliderBody = document.querySelector('.slider-body');
  const activeSlideHeight = getComputedStyle(activeSlide).height;
  const sliderBodyHeight = getComputedStyle(sliderBody).height;
  if (parseInt(sliderBodyHeight) - parseInt(activeSlideHeight)) {
    sliderBody.style.height = activeSlideHeight;
  }
}

/*
  Произвести переключение слайда на активный
*/
function switchSlide(activetab) {
  const nextSlide = document.querySelector(`.slider-item.${activetab.dataset.slider}`);
  if (!nextSlide) {
    return;
  }

  const currentSlide = document.querySelector('.slider-item.visible');
  if (currentSlide) {
    currentSlide.classList.remove('visible');
  }

  // устанавливаем класс visible для нового слайда
  nextSlide.classList.add('visible');
}

function onClickTab(event) {
  const clickedTab = event.target.closest('.selector__item');
  highlightSelector(clickedTab);
  switchSlide(clickedTab);
  setSlideSize();
}
/*
  handler блок
*/
window.addEventListener('resize', () => {
  adaptive_header(window.outerWidth);
  setSlideSize();
});

window.addEventListener('load', () => {
  setSlideSize();
});

tabSelector.addEventListener('click', onClickTab);

adaptive_header(window.outerWidth);
