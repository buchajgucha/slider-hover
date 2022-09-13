const sliderItems = [...document.querySelectorAll(".hover-slider__item")];
const navItems = [...document.querySelectorAll(".hover__slide-nav__item")];

sliderItems.forEach(function (item, index) {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover-slider__item--active");
  }
});
navItems.forEach(function (item, index) {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover__slide-nav__item--active");
  }
});

const toggleActivity = function (index) {
  console.log(index);
  for (let i = 0; i < sliderItems.length; i++) {
    if (i === Number(index)) {
      sliderItems[i].classList.add("hover-slider__item--active");
      navItems[i].classList.add("hover__slide-nav__item--active");
    } else {
      sliderItems[i].classList.remove("hover-slider__item--active");
      navItems[i].classList.remove("hover__slide-nav__item--active");
    }
  }
};
document
  .querySelector(".hover__slide-nav")
  .addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("hover__slide-nav__item")) {
      toggleActivity(event.target.dataset.index);
    }
  });
