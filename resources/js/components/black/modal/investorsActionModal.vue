<template>
  <div class="modal"  @click.stop="close">
    <div class="modal__container" @click.stop>
      <div class="modal__close">
        <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="close">
          <path fill="black" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
      <div class="modal__content">
        <div class="content">
          <h3 class="content__title">Title</h3>
          <div class="content__billing-form">
            <formComponent />
            <div class="billing-content">
              <p class="billing-content__text"><strong>Value 1% = 10000$</strong> </p>
              <p class="billing-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio explicabo id, iusto nemo</p>
              <p class="billing-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis deserunt dolore doloribus nobis quisquam!</p>
              <div class="billing-content__region">
                <div class="region">
                  <p>Country name: {{data.name}}</p>
                  <p>Country region: {{data.subregion}}</p>
                  <img :src="data.flag" alt="flag">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formComponent from "@/js/components/black/modal/form";
export default {
  name: "investorsActionModal",
  components: {
    formComponent
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    close(){
      this.$emit('closeActionModal')
    },
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
  background: rgba(0, 0, 0, .9);

  &__container {
    width: 100%;
    max-width: 750px;
    height: 700px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__title {
    padding: 15px 0;
    font-size: 44px;
    text-transform: uppercase;
  }
  &__text {
    margin-left: 0;
    .text {
      padding: 5px 0;
    }
  }
  &__billing-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.billing-form, .billing-content {
  width: 50%;
  margin: 10px;
  &__text {
    padding: 10px 0;
    &:first-child {
      font-size: 24px;
    }
  }
}
.billing-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.region {
  p {
    margin: 5px 0;
  }
  img {
    margin: 5px 0;
    width: 100%;
    border: 1px solid black;
  }
}
@media only screen and (max-width: 770px) {
  .modal__container {
    width: 100%;
    max-width: 450px;
    overflow-y: scroll;
  }

  .content__billing-form {
    flex-direction: column-reverse;
    .billing-form, .billing-content {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 370px) {
  .modal__container {
    padding: 15px;
  }
}
</style>
