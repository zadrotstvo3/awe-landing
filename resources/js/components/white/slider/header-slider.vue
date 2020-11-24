<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="@/js/assets/slider_images/category.png" alt="slider image">
      </swiper-slide>
      <swiper-slide>
        <img src="@/js/assets/slider_images/sliderMap.png" alt="slider image">
      </swiper-slide>
      <swiper-slide>
        <img src="@/js/assets/slider_images/my_profile.png" alt="slider image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name: "header-slider",
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      swiperOption: {
        centeredSlides: true,
        notNextTick: true,
        loop: true,
        initialSlide: 2,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 500,
        grabCursor: true
      }
    }
  }
}
</script>
<style scoped lang="scss">
.swiper-container {
  margin-right: 150px;
  width: 450px;
  max-height: 900px;
  border: 3px solid black;
  border-radius: 30px;
  z-index: 0;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 1440px) {
  .swiper-container{
    width: 450px;
    max-height: 750px;
  }
}
@media only screen and (max-width: 990px) {
  .swiper-container{
    margin-left: 80px;
  }
}
@media only screen and (max-width: 570px) {
  .swiper-container{
    margin-left: 0;
    max-height: 618px;
  }
}

</style>
