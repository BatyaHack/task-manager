var burger = document.querySelector('.navigation__burger');
var dropMenu = document.querySelector('.navigation__list--mobile');
var tobBar = document.querySelector('.top-bar');
var contentBlock = document.querySelector('.content-block__container');

var headerHeight = tobBar.clientHeight;
var startedPadding = parseInt(getComputedStyle(contentBlock).paddingTop);


burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  dropMenu.classList.toggle('navigation__list--open');
});

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > headerHeight) {
    tobBar.classList.add('top-bar--fixed');
    contentBlock.style.paddingTop = headerHeight + startedPadding + 'px';
  } else {
    tobBar.classList.remove('top-bar--fixed');
    contentBlock.style.paddingTop = startedPadding + 'px';
  }

};