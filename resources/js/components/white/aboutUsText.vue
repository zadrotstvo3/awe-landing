<template>
  <div class="content">
    <div class="content__image">
      <img src="/resources/js/assets/announceImg.png" alt="blank">
    </div>
    <div class="content__text">
      <div class="content__subtitle">
        <h2>{{$t('aboutUsTextBlock.title')}}</h2>
      </div>
      <div class="content__subtext--bold">
        <p>
          {{$t('aboutUsTextBlock.textBold')}}
        </p>
      </div>
      <div class="content__subtext">
        <p>
          {{$t('aboutUsTextBlock.textBlockOne')}}
        </p>
        <p>
          {{$t('aboutUsTextBlock.textBlockTwo')}}
        </p>
      </div>
    </div>
    <div class="content__image-text">
      <img src="/resources/js/assets/sideImgFull.png" alt="blank">
      <p class="content__image-description">
        {{$t('aboutUsImageBlock')}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "aboutUsText"
}
</script>

<style scoped lang="scss">
.content {
  margin-top: -50px;
  padding: 0 60px 60px 0;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;

  &__image {
    grid-area: 3 / 1 / 6 / 1;
    overflow: hidden;
    img {
      width: auto;
      height: 100%;
      object-fit: contain;
    }
  }
  &__text {
    margin: -100px 0 0 0;
    grid-area: 2 / 2 / 7 / 3;
  }
  &__image-text {
    grid-area: 1 / 3 / 8 / 4;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  &__image-description {
    margin-top: 30px;
    font-size: 32px;
    line-height: 140%;
  }
  &__subtitle {
    font-size: 120px;
    text-transform: uppercase;
    text-align: center;
    color: white;
  }
  &__subtext {
    padding: 0 130px;
    p {
      margin: 20px 0;
    }
    &--bold {
      position: relative;
      margin: -100px 0 30px 0;
      padding: 0 130px;
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
    }
  }
}
@media screen and (max-width: 1550px) {
  .content {
    &__subtitle {
      font-size: 90px;
    }

    &__subtext{
      padding: 0 60px;
      &--bold {
        margin: -50px 0 20px 0;
        padding: 0 60px;
        font-size: 20px;
        font-weight: 700;
      }
    }

    &__image-description {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 990px) {
  .content {
    &__subtitle {
      font-size: 50px;
    }
    &__subtext{
      padding: 0 30px;
      font-size: 14px;
      &--bold {
        margin: 0 0 20px 0;
        padding: 0 30px;
        font-size: 16px;
      }
    }
    &__image-description {
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 690px) {
  .content {
    padding: 30px 5px;
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__text {
      order: 0;
      margin: 0 0 0 0;
      padding: 0;
    }
    &__subtitle {
      font-size: 24px;
    }
    &__subtext {
      padding: 0;
      &--bold {
        padding: 0;
      }
    }
    &__image-text {
      order: 2;
      img {
        height: 300px;
      }
    }
    &__image-description {
      padding: 0;
    }
    &__image {
      order: 3;
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
