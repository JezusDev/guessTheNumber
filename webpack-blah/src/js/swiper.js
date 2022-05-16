import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Pagination, Navigation]);

const slides = document.querySelectorAll(".swiper-slide");
console.log(slides);

const productSwiper = new Swiper(".product-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (i, className) {
      return `<div class="${className} swiper__img"> ${slides[i].innerHTML} </div>`;
    },
  },
});

const likeSwiper = new Swiper(".like-swiper", {
  slidesPerView: 5,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
