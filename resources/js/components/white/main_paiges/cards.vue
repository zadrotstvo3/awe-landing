<template>
  <div class="cards__block">
    <div class="card left">
      <div class="card__year text-decoration location-end">
        2020
      </div>
      <div class="card__image">
        <img class="image" src="@/js/assets/SVG/left.svg" alt="image">
      </div>
    </div>
    <div class="card right">
      <div class="card__text text-decoration">
        AWE
      </div>
      <div class="card__text text-decoration small">
        Evolution
      </div>
      <div class="card__image card__image--right">
        <img class="image" src="@/js/assets/SVG/advantages.svg" alt="image">
      </div>
      <div class="card__icon">
        <img src="@/js/assets/SVG/Cog.png" alt="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cards"
}
</script>

<style lang="scss">
.cards__block {
  margin-top: 20px;
  position: relative;
  display: flex;
}
.card {
    padding: 100px 20px;
  display: flex;
  flex-direction: column-reverse;
  &__year {
    position: relative;
    margin-left: -60px;
    font-size: 320px;
    color: white;
    align-self: flex-end;

    &:before{
        position: absolute;
        content: url("~@/js/assets/SVG/arrows.svg");
        width: 60px;
        height: 60px;
        top: 200px;
        left: 220px;
    }
  }
  &__text {
    margin-top: -40px;
    margin-left: 40px;
    font-size: 240px;
    color: #F8F7F3;
  }

  &__image {
    margin-bottom: -100px;
    position: relative;
    z-index: 1;
    .image {
      width: 100%;
      //height: 100%;
      margin-top: 30px;
      object-fit: contain;
    }
  }

  &__icon{
    margin-top: -200px;
    transform: translateY(70px);
    display: flex;
    justify-content: flex-end;
    z-index: 0;
  }
}
.location-end{
  align-self: flex-end;
}
.small {
  width: 100%;
  max-width: 500px;
  margin-top: -150px;
  margin-left: 220px;
  margin-bottom: -250px;
  font-size: 80px;
  text-transform: uppercase;
  background-color: #F8F7F3;
}
.text-decoration{
  font-weight: 700;
  text-shadow:
      -2px -2px 0 #E4DFD8,
      2px -2px 0 #E4DFD8,
      -2px 2px 0 #E4DFD8,
      2px 2px 0 #E4DFD8;
}
.left {
  width: 40%;
  padding: 20px;
  overflow: visible;
  background-color: #fff;
}
.right {
    width: 60%;
    display: flex;
    flex-direction: column;
    background: #F8F7F3;
}

@media only screen and (max-width: 1600px) {
  .cards__block {
    height: 100%;
  }
  .cards {
    position: static;
    &__item {
      width: 200px;
      height: 200px;
    }
  }
  .card__image {
    &--right {
      margin-top: 20px;
    }
  }
  .card__icon {
    margin-top: -200px;
    align-self: flex-end;
    img {
      width: 150px;
    }
  }
  .card__text {
    font-size: 160px;
  }
  .card__year {
    font-size: 190px;
  }
  .small{
    font-size: 60px;
    margin-top: -50px;
    margin-left: 100px;
  }
}
@media only screen and (max-width: 1400px) {
  .cards__block {
    margin-top: 70px;
  }
  .card {
    &__year {
      margin-left: -20px;
      font-size: 120px;

      &:before {
        display: none;
      }
    }
    &__text {
      margin-left: 20px;
      font-size: 90px;
    }

  }
  .small {
    font-size: 50px;
    margin-top: -30px;
    margin-left: 80px;
  }
  .card__image {
    margin-bottom: 0;
    &--right {
      margin-top: 70px;
    }
  }
}
@media only screen and (max-width: 990px){
  .cards__block{
    flex-direction: column;
  }
  .card__year {
    font-size: 170px;
  }
  .card__text {
    font-size: 190px;
  }
  .small {
    margin-top: -90px;
    font-size: 70px;
  }
  .left, .right  {
    width: 100%;
  }
  .card__image {
    margin-bottom: -40px;
    width: 100%;
    .image {
      margin-left: 20px;
    }
    &--right {
      margin-top: 20px;
    }
  }
}
@media only screen and (max-width: 770px) {
  .cards__block {
    height: auto;
  }
  .card {
    &__year {
      margin-left: -20px;
      font-size: 120px;
    }
    &__text {
      margin-left: 20px;
      font-size: 100px;
    }

    &__icon {
      margin-top: -150px;
      img {
        height: 150px;
        width: 150px;
        object-fit: contain;
      }
    }
  }
  .small {
    margin-top: -40px;
    margin-left: 50px;
    font-size: 56px;
  }
  .cards{
    &__item {
      width: 130px;
      height: 150px;
    }
  }
  .card__image {
    margin-bottom: -40px;
    width: 100%;
    .image {
      margin-left: 20px;
    }
    &--right {
      margin: 140px auto 0 auto;
    }
  }
}
@media only screen and (max-width: 550px) {
  .cards__block {
    margin: 0;
  }
  .card {
    &__year {
      font-size: 80px;
    }
    &__text {
      margin-top: 20px;
      margin-left: 20px;
      font-size: 90px;
    }
    &__image {
      margin-bottom: -10px;
      &--right {
        margin-left: 0;
      }
    }
    &__icon {
      display: none;
    }
  }
  .small {
    margin-top: -30px;
    margin-left: 40px;
    font-size: 36px;
  }
  .cards{
    &__item {
      width: 100px;
      height: 120px;
    }
  }
  .card__image--right {
    margin-top: 150px;
  }

}
</style>
