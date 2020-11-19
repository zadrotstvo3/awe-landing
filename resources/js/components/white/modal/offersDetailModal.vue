<template>
<div class="modal"  @click="close">
  <div class="modal__container" @click.stop>
    <div class="modal__close">
      <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="close">
        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    </div>
    <div class="modal__content">
      <offersValueNames @triggreHover="showHover"/>
      <offersValueList :selected="hoverData"/>
    </div>
  </div>
</div>
</template>

<script>
import offersValueList from "@/js/components/white/modal/offersValueList";
import offersValueNames from "@/js/components/white/modal/offersValueNames";
export default {
name: "offersDetailModal",
  components: {
    offersValueNames,
    offersValueList
  },
  data(){
    return {
      hoverData: ''
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    showHover(index){
      this.hoverData = index
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
    max-width: 1350px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    background-color: #fff;
  }
  &__close {
    padding: 0 0 15px 0;
    display: flex;
    justify-content: flex-end;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

@media only screen and (max-width: 770px) {
  .modal__container {
    width: 100%;
    max-width: 450px;
  }
}
@media only screen and (max-width: 370px) {
  .modal__container {
    padding: 15px;
  }
}
</style>
