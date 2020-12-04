<template>
  <div class="info">
    <div class="info__box logo-box">
      <div class="logo-box__top">
        <img class="logo-box__rocket" src="@/js/assets/SVG/roket.svg" alt="rocket image">
        <div class="logo-box__counter">
          <div class="counter">
            <div class="counter__name">
              Basic
            </div>
            <div class="counter__interval-box">
              <div class="counter__interval">
                {{daysUntilBasic}}
              </div>
            </div>
            <div class="counter__end-date">
              днів до старту
            </div>
          </div>
          <div class="counter">
            <div class="counter__name">
              Pro
            </div>
            <div class="counter__interval-box">
              <div class="counter__interval">
                {{daysUntilPro}}
              </div>
            </div>
            <div class="counter__end-date">
              днів до старту
            </div>
          </div>
          <div class="counter">
            <div class="counter__name">
              Ultra
            </div>
            <div class="counter__interval-box">
              <div class="counter__interval">
                {{daysUntilUltra}}
              </div>
            </div>
            <div class="counter__end-date">
              днів до старту
            </div>
          </div>
        </div>
        <img class="logo-box__logo" src="@/js/assets/logo.svg" alt="logo">
      </div>
      <div class="logo-box__bottom">
        <img src="@/js/assets/SVG/GooglePlayWhite.svg" alt="Google Store logo">
        <img src="@/js/assets/SVG/AppStoreWhite.svg" alt="App Store logo">
      </div>
    </div>
    <div class="info__box info__bg">
      <div class="box">
        <div class="box__description">
          <span class="red">2020 </span> {{$t('blockText')}}
        </div>
      </div>
      <div class="box">
        <div class="box__description">
            <h3 class="box__title">{{$t('blockTextScoreTitle')}}</h3>
            <p class="box__description">
              {{$t('blockTextScoreText')}}
            </p>
        </div>
      </div>
      <div class="box">
       <h3 class="box__title">{{$t('blockTextAWETitle')}}</h3>
          <p class="box__description">
            {{$t('blockTextAWEText')}}
          </p>
      </div>
      <div class="box">
        <h3 class="box__title"></h3>
        <p class="box__description">
          {{$t('blockTextPriorities')}} <br>
          <span class="underline">{{$t('blockTextPrioritiesUnderlinedText')}} </span>   <br>
          {{$t('blockTextPrioritiesText')}}
        </p>
      </div>
      <div class="box">
        <h3 class="box__title quote">{{$t('blockEndText')}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data(){
    return  {
      daysUntilBasic: '',
      daysUntilPro: '',
      daysUntilUltra: ''
    }
  },
  created() {
    this.daysUntilBasic = this.getUntilBasicDate(2020, 11, 14)
    this.daysUntilPro = this.getUntilBasicDate(2021, 0, 14)
    this.daysUntilUltra = this.getUntilBasicDate(2021, 1, 4)
  },
  methods: {
    getUntilBasicDate(year, month, day){
      const date = new Date();
      const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const finalDate = new Date(year, month, day);
      const oneDay=1000*60*60*24;
      if(today < finalDate) {
        return `${Math.ceil((finalDate.getTime()-today.getTime())/(oneDay))}`
      } else {
        return "Started"
      }
    }
  }

}
</script>

<style scoped lang="scss">
.underline {
  text-decoration: underline;
}
  .info{
    padding: 150px 60px;
    display: flex;
    justify-content: space-between;

    &__box {
      width: 40%;
      padding: 0 20px;
      margin: 0 20px;
      flex-grow: 1;
      font-size: 32px;
      line-height: 140%;
    }

    &__bg {
      background-image: url("~@/js/assets/SVG/world.svg");
      background-position: top right;
      background-size: 50%;
      background-repeat: no-repeat;
    }
  }

  .logo-box {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 0;
    background-color: #fff;

    &__top {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__rocket, &__counter,
    &__logo {
      margin: 20px 0;
    }

    &__rocket {
      min-height: 260px;
    }

    &__bottom {
      img {
        width: 100%;
        max-width: 130px;
        margin: 0 10px;
        object-fit: contain;
      }
    }
  }

  .red {
    color: red;
  }
  .counter {
    width: 100%;
    max-width: 300px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    &__name {
      width: 33%;
    }
    &__interval-box{
      width: 100%;
      max-width: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    &__interval {
      padding: 0 10px;
      margin: 0 2px;
      text-align: center;
      border: 1px solid black;
      border-radius: 3px;
      background-color: black;
      color: white;
    }
    &__end-date {
      font-size: 12px;
    }
  }

  .box {
    &__title {
      padding: 20px 0;
      font-weight: 600;
      font-size: 24px;
    }

    &__description {
      font-size: 18px;
      line-height: 150%;
    }
  }
  .quote {
    text-align: right;
    font-style: italic;
  }
  @media only screen and (max-width: 1470px) {
    .info{
      padding: 75px 30px;

      &__box {
        font-size: 22px;
      }
    }
  }
@media only screen and (max-width: 1170px) {
  .info{
    padding: 75px 10px;
    flex-direction: column;

    &__box {
      width: auto;
      margin: 20px auto;
      font-size: 22px;
    }

    .logo-box {
      width: 100%;
      max-width: 520px;
    }
  }
}
@media only screen and (max-width: 770px) {
  .info {
    &__box {
      width: 100%;
      padding: 25px 10px;
    }

    &__bg {
      background-position: top right;
      background-size: 70%;
    }
  }
}
  @media only screen and (max-width: 550px) {
    .info{
      &__box {
        font-size: 12px;
      }
    }
    .logo-box {
      &__rocket {
       width: 70px;
        height: auto;
        min-height: auto;
        margin: 0 auto;
      }
      &__logo {
        width: 80px;
        margin: 0 auto 30px auto;
      }
      &__bottom {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: center;
        img {
          margin: 0 5px;
          width: 40%;
        }
      }
    }
  }
</style>
