function tobBar() {
  var burger = document.querySelector('.navigation__burger');
  var dropMenu = document.querySelector('.navigation__list--mobile');
  var tobBar = document.querySelector('.top-bar');
  var contentBlock = document.querySelector('.content-block__container');
  var mobileLink = document.querySelector('.navigation__list--mobile');

  var headerHeight = tobBar.clientHeight;
  var startedPadding = parseInt(getComputedStyle(contentBlock).paddingTop);


  mobileLink.addEventListener('click', function (evt) {
    // сделаем делегирование события сразу, а то вдруг меню будет выглядеть как то по другому
    if(evt.target.classList.contains('navigation__link')) {
      dropMenu.classList.toggle('navigation__list--open');
    }
  });

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
}

export default tobBar;

