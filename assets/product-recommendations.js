document.addEventListener("DOMContentLoaded", () => {
  const swiperCollection = new Swiper(".collection__swiper", {
    slidesPerView: "auto",
    freeMode: true,
    loop: false,
    spaceBetween: 24,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
