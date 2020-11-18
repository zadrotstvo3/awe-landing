<template>
  <div class="main__head">
    <section class="content">
      <mainHeader class="content__text" />
      <headerSlider class="content__slider" />
    </section>
    <section class="gallery">
      <gallery />
    </section>
    <section class="cards">
      <cards />
    </section>
    <section class="grid">
      <grid />
    </section>
    <section class="offers">
      <offers />
    </section>
    <section class="video">
      <videoComponent/>
    </section>
    <section class="info">
      <info />
    </section>
    <section class="covid">
      <covid/>
    </section>
  </div>
</template>

<script>
import mainHeader from '@/js/components/white/main_paiges/main-header.vue'
import headerSlider from '@/js/components/white/slider/header-slider.vue'
import gallery from '@/js/components/white/main_paiges/gallery.vue'
import cards from '@/js/components/white/main_paiges/cards.vue'
import grid from '@/js/components/white/main_paiges/grid.vue'
import offers from '@/js/components/white/main_paiges/offers.vue'
import videoComponent from '@/js/components/white/main_paiges/video.vue'
import info from '@/js/components/white/main_paiges/info.vue'
import covid from '@/js/components/white/main_paiges/covid.vue'

export default {
  name: 'Home',
  components: {
    mainHeader,
    headerSlider,
    gallery,
    cards,
    grid,
    offers,
    videoComponent,
    info,
    covid
  }
}
</script>
<style lang="scss">
.main {
  &__head {
    padding-top: 100px;
    overflow: hidden;
  }
}
.content {
  display: flex;
  justify-content: space-around;

  &__text{
    margin-left: 50px;
  }

  &__slider {
    overflow: hidden;
  }
}
 @media only screen and (max-width: 550px) {
   .main {
     &__head {
       padding-top: 50px;
     }
   }
   .content__text {
     margin-left: 10px;
   }
   .content__slider {}
 }
</style>
