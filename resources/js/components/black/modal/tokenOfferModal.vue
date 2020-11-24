<template>
  <div class="modal"  @click="close">
    <div class="modal__container" @click.stop>
      <div class="modal__close">
        <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="close">
          <path fill="black" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
      <div class="modal__content">
        <div class="content">
          <div class="content__description">
            <h3 class="content__title">Buy tokens</h3>
            <p class="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet animi aspernatur consequatur consequuntur deleniti dolorem, enim esse ex exercitationem fugiat fugit labore maiores minima molestias natus officia omnis perspiciatis, possimus provident quam quidem quos sapiente soluta, veniam voluptatum. Cumque, dicta excepturi harum inventore laboriosam molestiae porro quam voluptatum.</p>
          </div>
          <div class="content__counter">
            <div class="counter">
              <label for="counter__input" class="counter__icon"></label>
              <input class="counter__input" id="counter__input" type="text" v-model="counterNumber">
              <div class="counter__select">
                <span class="counter__select--text">
                  {{`${counterCurrency === '' ? 'Currency' : counterCurrency.name}`}}
                </span>
                <img src="@/js/assets/SVG/arrow-down-sign-to-navigate.svg" alt="arrow">
                <div class="counter__select--list">
                  <ul class="list">
                    <li
                        class="list__item"
                        v-for="(item, index) in currency"
                        :key="index"
                        @click="countThePrice(item)"
                    >
                      {{item.name}}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="counter__result">
                = {{getTotalPrice}}
              </div>
            </div>
            <div class="content__action">
              <button class="action">buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tokenOfferModal",
  data(){
    return {
      currency: [
        {
          name: 'USD',
          symbol: '$',
          rate: 2
        },
        {
          name: 'EUR',
          symbol: '€',
          rate: 1.5
        },
        {
          name: 'UAH',
          symbol: '₴',
          rate: 60
        }
      ],
      counterNumber: 0,
      counterCurrency: '',
      counterResult: ''
    }
  },
  computed: {
    getTotalPrice(){
      if(this.counterNumber <= 0){
        return
      }
      if(this.counterCurrency) {
        return this.counterNumber * this.counterCurrency.rate
            + `${this.counterCurrency.symbol}`
      }
      return ''
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    countThePrice(item){
      this.counterCurrency = item
    }
  }
}
</script>


<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  &__container {
    width: 100%;
    max-width: 750px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  &__close {
    padding: 0 0 15px 0;
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    color: black;
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    padding: 15px 0;
    font-size: 44px;
    text-transform: uppercase;
  }
  &__text {
    padding: 15px 0;
  }
  &__counter {
    width: 100%;
    max-width: 550px;
    padding: 15px;
    margin: 0 15px;
    background-color: #EDEDED;
  }
  &__action {
    padding: 15px 0;

    .action {
      margin: 15px 0;
      width: 250px;
      padding: 15px;
      background-color: #35b135;
      font-size: 24px;
      border: none;
      border-radius: 10px;
      outline: none;
      color: white;
      text-transform: uppercase;
    }
  }
}
.counter {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  font-size: 18px;

  &__input {
    width: 100%;
    margin: 15px 0;
    padding: 15px;
    background-color: #fff;
    border: none;
    outline: none;


  }
  &__icon {
    position: relative;
    &:after {
      content: url("~@/js/assets/SVG/Nh.svg");
      position: absolute;
      top: 30px;
      right: -110px;
      z-index: 2;
    }
  }

  &__select {
    position: relative;
    margin: 15px 0;
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 20px;
    background-color: #fff;

    &--text {
      font-size: 18px;
      text-decoration: underline;
    }
    img {
      width: 12px;
      margin-left: 10px;
    }

    &--list {
      padding: 5px;
      display: none;
      position: absolute;
      bottom: -105px;
      left: 0;
      right: 0;
      background-color: #EDEDED;
    }
    &:hover .counter__select--list{
      cursor: pointer;
      display: block;
    }
  }
  &__result {
    width: 100%;
    font-size: 24px;
  }
  &__icon {
    img {
      margin: 0 10px 0 5px;
      width: 35px;
    }
  }
}
.list {
  background-color: #EDEDED;
  &__item {
    margin: 7px 0;
    list-style: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
@media only screen and (max-width: 770px) {
  .modal__container {
    width: 100%;
    max-width: 300px;
    min-height: 500px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &__title {
      font-size: 22px;
      padding: 5px 0;
    }
    &__text {
      margin: 0;
      padding: 5px 0;
      font-size: 12px;
    }

    &__counter {
      width: 100%;
      padding: 0 15px;
      margin: 0;
    }

    &__action {
      width: 100%;
      padding: 0;
      .action {
        width: 100%;
      }
    }
  }
  .counter {
    &__input {
      width: 100%;
      padding: 12px;
    }
    &__icon {
      &:after {
        top: 25px;
        right: -90px;
      }
    }
    &__select {
      margin: 0 5px;
      padding: 12px 15px;
      width: 100%;
      &--list {
        top: 45px;
      }
    }
    &__result {
      margin-top: 15px;
      font-size: 14px;
    }
  }
}
@media only screen and (max-width: 370px) {
  .modal__container {
    padding: 15px;
    min-height: 300px;
  }
}
</style>
