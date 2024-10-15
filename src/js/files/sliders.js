/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
//import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці

  //====Ongoing_slider
  if (document.querySelector(".ongoing__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    const swiper = new Swiper(".ongoing__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination, Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      pagination: {
        el: ".card-item-ongoing__swiper-pagination",
        clickable: true,
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return current + " of " + total;
        },
      },

      // Скроллбар
      scrollbar: {
        el: ".ongoing__swiper-scrollbar",
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".ongoing__button-prev",
        nextEl: ".ongoing__button-next",
      },

      // Брейкпоінти
      breakpoints: {
        480: {
          slidesPerView: 1.6,
          spaceBetween: 15,
          autoHeight: true,
        },
        640: {
          slidesPerView: 1.7,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        // 992: {
        // 	slidesPerView: 3,
        // 	spaceBetween: 20,
        // },
        // 1268: {
        // 	slidesPerView: 4,
        // 	spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
    // Додаємо кастомну пагінацію на кожен слайд
    const slides = document.querySelectorAll(".ongoing__slide");
    slides.forEach((slide, index) => {
      const pagination = slide.querySelector(".swiper-pagination");
      pagination.textContent = `${index + 1} of ${slides.length}`;
    });
  }

  //====Reviews_slider
  if (document.querySelector(".middle-partners__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    const swiper = new Swiper(".middle-partners__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      // pagination: {
      //   el: "",
      //   clickable: true,
      //   type: "custom",
      //   renderCustom: function (swiper, current, total) {
      //     return current + " of " + total;
      //   },
      // },

      // Скроллбар
      // scrollbar: {
      //   el: "",
      //   draggable: true,
      // },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".middle-partners__button-prev",
        nextEl: ".middle-partners__button-next",
      },

      // Брейкпоінти
      /*breakpoints: {
        480: {
          slidesPerView: 1.6,
          spaceBetween: 15,
          autoHeight: true,
        },
        640: {
          slidesPerView: 1.7,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
      },*/

      // Події
      on: {},
    });
    // Додаємо кастомну пагінацію на кожен слайд
    const slides = document.querySelectorAll(".ongoing__slide");
    slides.forEach((slide, index) => {
      const pagination = slide.querySelector(".swiper-pagination");
      pagination.textContent = `${index + 1} of ${slides.length}`;
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
