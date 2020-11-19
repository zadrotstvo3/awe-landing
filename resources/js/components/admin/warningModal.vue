<template>
  <div class="modal"  @click="close">
    <div class="modal__container" @click.stop>
      <div class="modal__close">
        <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="close">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
      <div class="modal__content">
        <h2 class="modal__title">
          Are you sure you want to delete this article?
        </h2>
        <div class="modal__buttons">
          <button @click="deleteItem">Yes</button>
          <button @click="close">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "warningModal",
  methods: {
    close(){
      this.$emit('close')
    },
    deleteItem(){
      this.$emit('deleteItem')
      this.close()
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
    max-width: 450px;
    background-color: #fff;
  }
  &__close {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
  }
  &__content {
    padding: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__buttons {
    width: 100%;
    margin-top: 30px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 100%;
      max-width: 150px;
      padding: 15px;
      font-size: 18px;
      background-color: #fff;
      border: 1px solid black;
      border-radius: 35px;
      transition: .3s ease-in-out;

      &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
      }
    }
  }
}
</style>