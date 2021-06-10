<template>
  <div class="hero">
      <client-only>
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="~/assets/images/IMG_4243.png" class="swiper-slide" />
            <div class="hero__title">Travel ToDo</div>
          </swiper-slide>
          <swiper-slide>
            <img src="~/assets/images/IMG_4090.png" class="swiper-slide" />
            <div class="hero__title">あなただけの旅行計画</div>
          </swiper-slide>
          <swiper-slide>
            <img src="~/assets/images/IMG_0735.png" class="swiper-slide" />
            <div class="hero__title">Enjoy Holiday</div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
</template>

<script>
export default {
    data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: "coverFlow",
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        grabCursor: true,
        breakpoints: {
          600: {
            slidesPerView: 2,
          },
        },
      },
    }
  }
}
</script>
