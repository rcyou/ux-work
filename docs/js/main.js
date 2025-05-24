document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true, // Loop through slides
    
    // If you want pagination (bullets)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // If you want a scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});