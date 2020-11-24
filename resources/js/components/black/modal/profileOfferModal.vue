<template>
  <div class="modal"  @click="close">
    <div class="modal__container" @click.stop>
      <div class="modal__close">
        <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="close">
          <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
      <div class="modal__content">
        <div class="content">
          <h3 class="content__title">Our offers</h3>
          <profileOfferList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileOfferList from "@/js/components/black/modal/profileOfferList";
export default {
  name: "profileOfferModal",
  components: {
    profileOfferList
  },
  data(){
    return {

    }
  },
  methods: {
    close(){
      this.$emit('close')
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
    height: 800px;
    max-width: 1350px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    background-color: rgba(1, 1, 1, 1);
    border: 1px solid white;
  }
  &__close {
    padding: 0 0 15px 0;
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    color: white;
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__title {
    margin-top: -50px;
    padding: 15px 0;
    font-size: 44px;
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 770px) {
  .modal__container {
    width: 100%;
    max-width: 450px;
    height: 600px;
    overflow-y: scroll;
  }
  .content {
    &__title {
      padding: 10px 0;
      font-size: 22px;
    }
  }
}
@media only screen and (max-width: 370px) {
  .modal__container {
    padding: 15px;
    max-width: 300px;
    height: 400px;
  }
}
</style>
