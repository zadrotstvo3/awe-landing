<template>
  <div class="profiles">
    <ul class="profiles__list">
      <li class="profiles__item"
          v-for="(item, index) in 3"
          :key="index"
      >
        <h4 class="profiles__title">
          Basic
        </h4>
        <div class="item">
          <ul class="item__values"
          >
            <li class="item__value"
                v-for="(item, index) in 7"
                :key="index"
            >
              <p>Lorem ipsum dolor.</p>
            </li>
          </ul>
        </div>
        <button class="profiles__action">
          Buy now
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "profileOfferList"
}
</script>

<style scoped lang="scss">
.profiles {
  margin-top: 50px;
  width: 100%;
  padding: 15px;

  &__list {
    display: flex;
    //flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  &__item {
    margin: 5px;
    padding: 15px;
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    border: 1px  solid rgba(0,0,0, .1);
    transition: .3s ease-in-out;
    background-color: #fff;
    color: black;

    &:hover {
      cursor: pointer;
      border-color: transparent;
      transform: scale(1.1);
    }
  }
  &__title {
    font-size: 24px;
    text-align: center;
  }
  &__action {
    margin: 20px 0;
    width: 100%;
    max-width: 200px;
    padding: 15px;
    font-size: 20px;
    text-transform: uppercase;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #3aca3a;
    color: white;
  }
}
.item {
  margin-top: 20px;
  &__value {
    position: relative;
    margin: 25px 0;
    list-style: none;
    font-size: 18px;
    &:before {
      position: absolute;
      content: url("~@/js/assets/check-mark.svg");
      width: 25px;
      left: -50px;
      top: 0;
    }
  }
}
@media screen and (max-width: 570px) {
  .profiles {
    padding: 0;
    &__list {
      flex-direction: column;
    }
    &__item {
      margin: 15px 0;
      &:hover {
        cursor: pointer;
        border-color: transparent;
        transform: scale(1);
      }
    }
    &__action {
      margin: 5px 0;
    }
  }
  .item {
    margin-top: 0;
    &__value {
      margin: 15px 0;
      &:before {
        left: -30px;
        width: 15px;
      }
    }
  }
}
</style>
