<template>
  <div class="head">
    <div class="head__top">
      <div class="top">
        <div class="top__text">
          <span class="top__small-text">{{$t('blackMainHeaderTextOne')}}</span>
          <span class="top__big-text">{{$t('blackMainHeaderTextOneNumber')}}</span>
          <img src="@/js/assets/blackSVGs/help-circle.svg" alt="help" class="top__image">
          <div class="top__help">Help</div>
        </div>
        <div class="top__banner">
          <Title :loop="true"/>
        </div>
        <div class="top__text">
          <span class="top__small-text">{{$t('blackMainHeaderTextTwo')}}</span>
          <span class="top__big-text">{{$t('blackMainHeaderTextTwoNumber')}}</span>
          <img src="@/js/assets/blackSVGs/help-circle.svg" alt="help" class="top__image">
          <div class="top__help">Help.</div>
        </div>
        <div class="top__test-mode">
          {{$t('blackMainHeaderTextThree')}}
          <span>{{$t('blackMainHeaderTextThreeTime')}}</span>
        </div>
      </div>
    </div>
    <div class="head__bottom">
      <div class="bottom">
        <div class="bottom__values">
          <ul class="values">
            <li class="values__item"
            v-for="amount in $t('blackMainHeaderList')"
                :key="amount.plan"
            >
              <div class="values__name">
                {{amount.title}}
               <span>
                 {{amount.plan}}
               </span>
              </div>
              <div
                  class="values__amount"
                  :class="{'values__under-text' : amount.reserved}"
              >
                {{amount.value}}
                <img
                    v-if="amount.value === 'Free'"
                    src="@/js/assets/blackSVGs/infinity.svg"
                    alt="infinity icon"
                >
                <p class="values__reserved" v-if="amount.reserved">
                  {{$t('blackMainHeaderListReserved')}}
                </p>
              </div>
              <div class="values__icon border--small" v-if="amount.closeIcon">
                <img src="@/js/assets/blackSVGs/close.svg" alt="close icon">
              </div>
              <div class="values__icon border--small" v-else>
                <img src="@/js/assets/blackSVGs/complete.svg" alt="complete icon">
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'mainHead',
  data(){
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.head {
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background-image: url("~@/js/assets/map_fon.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &__top {
    width: 100%;
    padding: 20px;
  }
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__banner {
    position: relative;
  }

  &__text {
    position: relative;
    padding: 10px 0;
    display: flex;
    vertical-align: baseline;
    align-items: center;
    font-size: 32px;
  }
  &__image {
    margin: -20px 0 0 5px;
  }
  &__image:hover + &__help {
    opacity: 1;
    visibility: visible;
  }
  &__help {
    position: absolute;
    width: 100px;
    padding: 15px;
    opacity: 0;
    visibility: hidden;
    top: -40px;
    right: -70px;
    font-size: 16px;
    color: black;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 38% 88%, 26% 100%, 28% 88%, 0 88%);
  }

  &__small-text {
    margin-right: 30px;
    font-size: 16px;
    font-weight: lighter;
  }

  &__test-mode {
    margin-top: 30px;
    padding: 15px;
    text-transform: uppercase;
    color: black;
    background-color: #fff;

    span {
      margin-left: 30px;
    }
  }
}

.bottom {
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: flex-start;
}

.values {
  &__item {
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    list-style: none;
  }

  &__name {
    position: relative;
    width: 320px;
    padding: 15px 10px;
    font-size: 16px;
    font-weight: 200;
    border: 1px solid rgba(255,255,255, 0.2);
    border-left: none;

    span {
      margin-left: 10px;
      font-weight: 700;
    }

    &:after {
      position: absolute;
      content: url("~@/js/assets/blackSVGs/coube-white.svg");
      top: -2px;
      right: -1px;
    }
    &:before {
      position: absolute;
      content: url("~@/js/assets/blackSVGs/coube-white.svg");
      bottom: 0;
      right: -1px;
    }
  }

  &__amount {
    position: relative;
    width: 100px;
    padding: 15px 10px;
    margin-left: 10px;
    display: flex;
    font-size: 16px;
    border: 1px solid rgba(255,255,255, 0.2);
    border-right: none;
    img {
      margin-left: 10px;
    }
    &:after {
      position: absolute;
      content: url("~@/js/assets/blackSVGs/coube-white.svg");
      top: -2px;
      left: -1px;
    }
    &:before {
      position: absolute;
      content: url("~@/js/assets/blackSVGs/coube-white.svg");
      bottom: 0;
      left: -1px;
    }
  }
  &__reserved {
    position: absolute;
    top: 3.3rem;
    font-size: 12px;
    color: rgba(255,255,255, 0.5);
  }

  &__icon {
    width: 25px;
    height: 25px;
    margin-left: 5px;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 15px;
      height: 15px;
      object-fit: contain;
    }
  }
}

.border {
  &--small {
    padding: 1px;
    border: 1px solid rgba(255,255,255, 0.3);
  }
}

.lock {
  width: 100%;
  height: 100%;
  margin-right: 150px;

  &__item {
    position: relative;

    &:hover .lock__active{
      cursor: pointer;
      opacity: 2;
      z-index: 2;
      transition: 0.3s ease-in-out;
    }
  }

  &__active, &__static {
    position: absolute;
    opacity: 0;
    z-index: 0;
    transition: 0.3s ease-in-out;
  }
  &__static {
    opacity: 1;
    z-index: 1;
  }
}

@media screen and (max-width: 770px){
  .head{
    height: 100vh;
    background-size: cover;
  }
  .top {
    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__image {
      position: absolute;
      right: 0;
    }
    &__test-mode{
      font-size: 14px;
      span {
        margin-left: 10px;
      }
    }
    &__big-text,
    &__small-text {
      padding: 5px;
      display: block;
      text-align: center;
    }
    &__big-text{
      font-size: 18px;
    }
    &__small-text {
      margin-right: 0;
    }

  }
  .bottom {
    padding: 0;
    &__values {
      width: 100%;
    }
  }
  .values {
    width: 100%;
    &__item {
      width: 320px;
      margin: 10px auto;
    }

    &__name, &__amount {
      font-size: 11px;
      img {
        width: 20px;
      }
    }
    &__name {
      &:before {
        bottom: -2px;
      }
      &:after {
        top: -10px;
      }
    }
    &__amount{
      &:before {
        bottom: -2px;
      }
      &:after {
        top: -10px;
      }
    }
    &__reserved {
      top: 45px;
      left: 0;
      font-size: 9px;
    }
  }
}
@media screen and (max-width: 590px) {
  .top__banner {
    display: none;
  }
}
</style>
