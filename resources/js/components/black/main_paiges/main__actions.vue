<template>
  <div class="actions">
    <div
        class="actions__item actions__buy-profile"
        @click="showProfileModal = !showProfileModal"
    >
      <p class="action">Купить Профиль</p>
    </div>
    <div class="actions__item actions__image">
      <img src="@/js/assets/phone_black.png" alt="phone image">
    </div>
    <div
        class="actions__item actions__buy-token"
        @click="showTokenModal = !showTokenModal"
    >
      <p class="action">Купить Токен</p>
    </div>
    <transition name="fade" mode="in-out">
      <profileOfferModal
          v-if="showProfileModal"
          @close="toggleProfileModal"
      />
      <tokenOfferModal
          v-if="showTokenModal"
          @close="toggleTokenModal"
      />
    </transition>
  </div>
</template>

<script>
import profileOfferModal from "@/js/components/black/modal/profileOfferModal";
import tokenOfferModal from "@/js/components/black/modal/tokenOfferModal";
export default {
  name: "actions",
  components: {
    profileOfferModal,
    tokenOfferModal
  },
  data(){
    return {
      showProfileModal: false,
      showTokenModal: false
    }
  },
  methods: {
    toggleProfileModal(){
      this.showProfileModal = !this.showProfileModal
    },
    toggleTokenModal(){
      this.showTokenModal = !this.showTokenModal
    }
  }
}
</script>

<style scoped lang="scss">
.actions {
  position: relative;
  margin: -100px 0 -100px 0;
  padding: 0 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {
    width: 100%;
    max-width: 400px;
    padding: 37px 60px;
    display: flex;
    justify-content: flex-end;

    p {
      position: relative;
      text-transform: uppercase;
      &:after {
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        overflow: hidden;
        content: url("~@/js/assets/blackSVGs/green-line.svg");
      }
    }
  }
  &__image {
    padding: 0;
    pointer-events: none;
    max-width: 900px;
    img {
      width: 100%;
    }
  }
  &__buy-profile {
    background: rgb(8,8,8);
    background: linear-gradient(15deg, rgba(8,8,8, 0) 70%, rgba(142,142,142,0.3) 100%);
    border-radius: 0 30px 0 0;
    transition: .3s ease-in;

    &:hover {
      cursor: pointer;
      background: rgb(8,8,8);
      background: linear-gradient(15deg, rgba(8,8,8, 0) 70%, rgba(142,142,142,1) 100%);
    }
  }

  &__buy-token {
    justify-content: flex-start;
    border-radius: 30px 0 0 0;
    background: rgb(142,142,142);
    background: linear-gradient(165deg, rgba(142,142,142,0.3) 0%, rgba(8,8,8, 0) 40%);

    &:hover {
      cursor: pointer;
      background: rgb(142,142,142);
      background: linear-gradient(165deg, rgba(142,142,142,1) 0%, rgba(8,8,8, 0) 30%);
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 770px) {
  .actions {
    margin: -150px 0 100px 0;
    padding: 10px;
    flex-direction: column;

    &__item {
      width: 100%;
      order: 1;
    }
    &__image {
      max-width: 400px;
      img {
        width: 100%;
      }
    }
    &__buy-token, &__buy-profile {
      order: 2;
      border-radius: 0 0 0 0;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 330px){
  .actions {
    margin: -50px 0 100px 0;
  }
}
</style>
