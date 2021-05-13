'use strict';
var sliderTop = new Swiper('.projects__slider-container', {
  navigation: {
    nextEl: '.projects__slider-btn--next',
    prevEl: '.projects__slider-btn--prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

var sliderText = new Swiper('.work-principles__slider', {
  navigation: {
    nextEl: '.work-principles__btn--next',
    prevEl: '.work-principles__btn--prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  autoHeight: true
});

var sliderOffers = new Swiper('.offers__slider-container', {
  navigation: {
    nextEl: '.offers__slider-btn--next',
    prevEl: '.offers__slider-btn--prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
