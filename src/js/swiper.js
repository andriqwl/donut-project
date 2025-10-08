import Swiper from 'swiper';
import 'swiper/swiper.css';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  slideToclickedSlide: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const pagination = document.querySelector('.custom-pagination');

const updatePagination = () => {
  const current = swiper.realIndex + 1;
  const total = swiper.slides.length;
  pagination.textContent = `${current}/${total}`;
};

updatePagination();

swiper.on('slideChange', updatePagination);
