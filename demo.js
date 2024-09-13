let lastScrollTop = 0;
const elementToShowHide = document.querySelector('.element-to-show-hide');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 向下滚动，隐藏元素
    elementToShowHide.style.opacity = 0;
  } else {
    // 向上滚动，显示元素
    elementToShowHide.style.opacity = 1;
  }

  lastScrollTop = scrollTop;
});