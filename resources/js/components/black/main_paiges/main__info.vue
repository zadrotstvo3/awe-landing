<template>
  <div class="info">
    <div class="info__block" @click="$router.push('/for-investors')">
      <h3 class="info__title">Інвесторам</h3>
    </div>
    <div class="info__images">
      <img src="~@/js/assets/blackSVGs/GooglePlay-green.svg" alt="google button">
      <img src="~@/js/assets/blackSVGs/AppStore-green.svg" alt="apple button">
    </div>
    <div class="info__block">
      <h3 class="info__title">Користувачам</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "info"
}
</script>

<style scoped lang="scss">
.info {
  width: 100%;
  max-width: 1800px;
  margin: 100px auto 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;
  color: white;

  &__block {
    position: relative;
    width: 33.33%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid;
    border-top: 1px solid;
    border-image-source: linear-gradient(-140deg, rgba(95,95,95, 0.2), rgb(0,0,0));
    border-image-slice: 1;
    transition: .3s ease-in-out;

    &:last-child{
      border-right: none;
      border-left: 1px solid;
      border-image-source: linear-gradient(40deg, rgba(95,95,95, 0.2), rgb(0,0,0));
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: url("~@/js/assets/blackSVGs/coube-white.svg");
      }
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      content: url("~@/js/assets/blackSVGs/coube-white.svg");
    }
    &:hover {
      cursor: pointer;
      background: linear-gradient(40deg, rgba(95,95,95, 0.2), rgb(0,0,0));
    }
  }

  &__images {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: 0 5px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 770px){
  .info {
    padding-bottom: 20px;
    flex-direction: column;

    &__block {
      width: 100%;
      order: 2;
    }
    &__images {
      order: 1;
      width: 100%;
      margin: 10px 0;
      flex-direction: column;
      img {
        margin: 5px 0;
      }
    }
  }
}
</style>
