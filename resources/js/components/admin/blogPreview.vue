<template>
  <div class="preview">
    <div class="preview__item">
      <div class="preview__step">
        <div class="preview__dot">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="#F8F6F3" stroke="#DED8D0"/>
          </svg>
        </div>
        <div class="preview__step--name">
          {{ item.date}}
        </div>
      </div>
      <div class="preview__announce">
        <div class="announce">
          <img :src="item.image" alt="" class="announce__img">
          <div class="announce__text">
            <h3 class="announce__title">{{item.title}}</h3>
            <p class="announce__description">{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPreview",
  props: {
    item: {
      type: Object,
      default: ()=>{}
    }
  }
}
</script>

<style scoped lang="scss">
.preview {
  width: 100%;
  margin: 50px 10px;
  &__item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  &__step {
    width: 100%;
    max-width: 100px;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    border-left: 1px solid  #E4DFD8;

    &--name {
      margin-left: 10px;
    }
  }
  &__dot {
    margin-left: -15px;
  }
}

.announce {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__text {
    padding: 0 35px;
  }
  &__title {
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 140%;
  }
  &__description  {
    font-size: 20px;
    line-height: 140%;
    font-weight: 200;
  }
  &__img {
    width: 100%;
    max-width: 560px;
    height: auto;
    border-radius: 30px;
    align-self: flex-start;
  }
}

@media only screen and (max-width: 770px) {
  .announce {
    padding: 15px 0;
    flex-direction: column;
    &__img {
      max-width: 100%;
      margin-bottom: 10px;
      height: 200px;
    }
    &__text {
      padding: 0;
    }
    &__title {
      font-size: 16px;
    }
    &__description {
      font-size: 12px;
    }
  }
}
</style>
