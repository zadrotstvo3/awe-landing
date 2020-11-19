<template>
  <div class="offers">
    <div class="offers__title text-decoration small">
      {{$t('offersTitleSmall')}}
    </div>
    <div class="offers__title text-decoration">
      {{$t('offersTitleBig')}}
    </div>
    <div class="offers__list">
      <ul class="list" v-if="windowWidth > 1170">
        <li class="list__item"
            v-for="(info, index) in $t('offersList')"
            :key="index"
        >
          <div class="item" :style="{backgroundImage: `url(${require(`@/js/assets/${info.backgroundImage}`)})`}">
            <div class="item__content">
              <ul class="content__list">
                <li class="content__text"
                    v-for="(value, index) in info.values"
                    :key="index"
                >
                  {{ value.text }}
                </li>
              </ul>
              <div class="content__price">
                <span>
                  {{info.price}}
                </span>
              </div>

              <div class="content__coins">
                {{info.coins}}
                <img v-if="info.coins" src="/resources/js/assets/SVG/Nh.svg" alt="coin">
              </div>
            </div>
          </div>
          <div class="item__plan">
            <h2>{{info.plan}}</h2>
          </div>
        </li>
      </ul>
      <div class="slider" v-else>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
              v-for="(info, index) in $t('offersList')"
              :key="index"
          >
            <div class="image">
              <div class="image__box">
                <img class="box"
                     :src="require(`@/js/assets/${info.bgSmall}`)"
                     alt="popcorn box"

                >
                <img
                    class="smile"
                    :class="[info.plan === 'ULTRA' ? 'ultra' : '']"
                    :src="require(`@/js/assets/${info.avatar}`)"
                    alt="">
              </div>
              <div class="content"
                   :class="[info.plan === 'ULTRA' ? 'ultra' : '']"
              >
                <ul class="content__list">
                  <li class="content__text"
                      v-for="(value, index) in info.values"
                      :key="index"
                  >
                    {{ value.text }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="info">
              <h2>{{info.plan}}</h2>
              <div class="info__price">
                  <span>
                    {{info.price}}
                  </span>
              </div>
              <div class="info__coins">
                {{info.coins}}
                <img class="info__coin"
                     v-if="info.coins" src="/resources/js/assets/SVG/Nh.svg" alt="coin">
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="offers__list--title">
        {{$t('offersProfiles')}}
      </div>
    </div>
    <div class="offers__button" @click="toggleModal">
      {{$t('offersButton')}}
    </div>
    <transition name="fade" mode="in-out">
      <offersDetailModal
          v-if="showModal"
          @close="toggleModal"
      />
    </transition>
  </div>
</template>

<script>
import offersDetailModal from "@/js/components/white/modal/offersDetailModal";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
name: "offers",
  components: {
    Swiper,
    SwiperSlide,
    offersDetailModal
  },
  data(){
  return {
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 60,
      centeredSlides: true,
      notNextTick: true,
      loop: true,
      initialSlide: 0,
      speed: 500,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    windowWidth: window.innerWidth,
    showModal: false
  }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
  }
}
</script>

<style scoped lang="scss">
  .offers{
    padding: 300px 0 60px 0;

    &__title {
      position: relative;
      margin-left: 80px;
      font-size: 300px;
      color: #F8F7F3;
    }
    &__list--title {
      color: white;
      font-size: 96px;
      font-weight: 900;
      text-transform: uppercase;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
    &__list {
      margin-top: -300px;
      display: flex;
    }
    &__button {
      width: 100%;
      max-width: 200px;
      padding: 20px;
      margin: 50px auto 0 auto;
      border-radius: 10px;
      text-transform: uppercase;
      text-align: center;
      font-size: 20px;
      color: black;
      background-color: white;
      transition: .2s;

      &:hover {
        transition: .2s;
        cursor: pointer;
        background-color: black;
        color: white;
      }
    }
  }
  .slider {
    width: 100%;
    max-width: 900px;
  }
  .swiper {
    .swiper-container {
      z-index: 0;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #000;
    }
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      vertical-align: baseline;

      .image {
        position: relative;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__box {
            position: relative;
            width: 300px;
            height: 100%;
          .box {
            width: 100%;
            height: auto;
            object-fit: contain;
            align-self: flex-end;
          }
          .smile {
            display: none;
            width: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .ultra {
            transform: translateX(-70%);
          }
        }
      }

      .content {
        min-height: 250px;
        display: flex;
        align-items: flex-end;
        &__list {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
        }

        &__text {
          margin: 5px 0;
          font-size: 18px;
          text-align: left;
        }
      }

      .info {
        margin-top: 50px;
        font-size: 30px;
      }
    }
  }

  .small {
    margin-bottom: -250px;
    margin-left: 70px;
    width: 160px;
    font-size: 80px;
    text-transform: uppercase;
    background-color: #F8F7F3;
    z-index: 1;
  }
  .text-decoration{
    font-weight: 700;
    text-shadow:
        -2px -2px 0 #E4DFD8,
        2px -2px 0 #E4DFD8,
        -2px 2px 0 #E4DFD8,
        2px 2px 0 #E4DFD8;
  }
  .item {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;

    &__content {
      height: 100%;
      width: 100%;
      max-width: 350px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    &__plan {
      margin-top: 20px;
      font-size: 36px;
      font-weight: 200;
    }
  }
.list {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &__item {
    width: 100%;
    max-width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:first-child {
      .item {
        &__content {
          margin-left: -20px;
          max-width: 300px;
        }
      }

    }

    &:last-child {
      .item {
        &__content {
          margin-left: -90px;
        }

        &__plan {
          margin-left: -50px;
        }
      }
      .content {
        &__list {
          margin-bottom: 50px;
        }
      }
    }
  }
}

.content {
  &__list {
    padding: 0 30px 0 10px;
    margin-bottom: 30px;
    transform: rotate(-5deg);
  }

  &__text {
    padding: 5px 0;
    font-size: 14px;
    transform: rotate(5deg);
  }

  &__price {
    margin: 5px 0;
    font-size: 24px;
  }
  &__cions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
@media only screen and (max-width: 1670px) {
  .item {
    &__content {
      margin-bottom: 100px;
      max-width: 270px;
    }
  }
  .content {
    &__list {
      padding: 0 25px;
      margin-bottom: 10px;
    }
    &__text {
      padding: 2px;
      font-size: 12px;
    }
    &__price {
      font-size: 20px;
    }
  }
}
@media only screen and (max-width: 1470px){
  .list {
    &__item {
      &:first-child {
        .item {
          &__content {
            max-width: 340px;
          }
        }
      }

      &:last-child {
        .item {
          &__content {
            margin-left: -100px;
          }
        }
      }
    }
  }
  .item {
    &__content {
      margin-bottom: 80px;
      max-width: 260px;
    }
  }
  .content {
    &__list {
      padding: 0 25px;
      margin-bottom: 10px;
    }
    &__text {
      padding: 2px 0;
      font-size: 10px;
    }
    &__price {
      font-size: 20px;
    }
  }

}
@media only screen and (max-width: 1190px) {
  .offers{
    padding: 60px 0;

    &__title {
      margin-top: 30px;
      font-size: 120px;
      .offers{
        padding: 0;
      }
    }
    &__list {
      margin-top: 0;
      &--title {
        width: 100%;
        max-width: 100px;
        margin-top: 20px;
        font-size: 66px;
      }
    }
  }
  .small {
    margin-bottom: -150px;
    margin-left: 10px;
    width: 100px;
    font-size: 50px;
  }
}
@media only screen and (max-width: 750px) {
  .offers{
    &__title {
      font-size: 120px;
      margin-left: 60px;
    }
    &__list {
      margin-top: 30px;
      display: flex;
      flex-direction: column-reverse;
    }
    &__list--title {
      max-width: 100%;
      margin-top: 0;
      font-size: 56px;
      writing-mode: horizontal-tb;
      text-orientation: unset;
      text-align: center;
      color: white;
    }
  }
  .small {
    margin-bottom: -150px;
    margin-left: 10px;
    width: 100px;
    font-size: 50px;
  }

  .swiper {
    margin-top: 40px;
    .swiper-slide{
      .image {
        .content {
          position: absolute;
          width: 250px;
          top: 0;
          &__text {
            font-size: 10px;
            margin: 0;
          }
        }
        .ultra {
          top: 50px;
        }
      }
    }
  }
}
@media only screen and (max-width: 550px) {
  .content__image {
    width: 100px;
  }
  .swiper {
    margin-top: 40px;
    .swiper-slide{
      .image {
        .content {
          width: 250px;
          &__text {
            font-size: 12px;
            margin: 0;
          }
        }
        .ultra {
          width: 220px;
          top: 80px;
        }
      }
    }
  }
}
  @media only screen and (max-width: 450px) {
    .swiper {
      .swiper-slide {
        .image {
          height: 250px;
          .content {
            width: 200px;
            padding: 0 20px;
            align-items: center;
            justify-content: center;
            top: 0;
            &__text {
              font-size: 8px;
              margin: 0;
            }
          }
          .ultra {
            top: 10px;
          }
          &__box {
            position: relative;
            width: 300px;
            height: 100%;
            .box {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .swiper {
      .swiper-slide {
        .image {
          .content {

          }
        }
      }
    }
  }
    @media only screen and (max-width: 330px) {
    .swiper {
      .swiper-slide {
        .image {
          .content {
          }
        }
      }
    }
  }
  @media only screen and (max-width: 330px){
    .swiper {
      .swiper-slide {
        .image {
          .content {
          }
        }
      }
    }
  }
</style>
