<template>
<div>
  <div class="video">
    <ul class="video__list">
      <li
        class="video__item"
        v-for="(item, index) in list"
        :key="index"
        @click="openContent(item)"
        :style="{backgroundColor: item.contentColor}"
        >
        <div class="video__hover">
          <img src="@/js/assets/SVG/play.svg" alt="play icon">
        </div>
      </li>
    </ul>
  </div>
  <transition name="fade" mode="in-out">
    <modal
     v-if="modal"
     @close="closeModal"
     :content="modalContent"
    />
  </transition>
</div>
</template>
<script>
import modal from '@/js/components/white/modal/modal.vue'

export default {
name: "videoComponent",
components: {
  modal
},
  data() {
    return {
      modal: false,
      modalContent: '',
      list: [
        {
          contentType: 'image',
          contentPath: '/gallery/1.jpg',
          contentColor: '#F3F0EC'
        },
        {
          contentType: 'image',
          contentPath: '/gallery/2.jpg',
          contentColor: '#E4DFD8'
        },
        {
          contentType: 'video',
          contentPath: 'https://www.youtube.com/embed/nvq_lvC1MRY',
          contentColor: '#F8F6F3'
        },
        {
          contentType: 'video',
          contentPath: 'https://www.youtube.com/embed/SMKPKGW083c',
          contentColor: '#E4DFD8'
        },
        {
          contentType: 'image',
          contentPath: '/gallery/3.jpg',
          contentColor: '#F3F0EC'
        },
        {
          contentType: 'image',
          contentPath: '/gallery/4.jpg',
          contentColor: '#F8F6F3'
        },
        {
          contentType: 'image',
          contentPath: '/gallery/5.jpg',
          contentColor: '#E4DFD8'
        },
        {
          contentType: 'video',
          contentPath: 'https://www.youtube.com/embed/TxbE79-1OSI',
          contentColor: ' #F3F0EC'
        },
        {
          contentType: 'image',
          contentPath: '/gallery/1.jpg',
          contentColor: '#E4DFD8'
        }
      ]
    }
  },
  methods: {
    openContent(item){
      this.modalContent = item
      this.modal = true
    },
    closeModal(){
      this.modalContent = ''
      this.modal = false
      }
  }
}
</script>
<style scoped lang="scss">
.video {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px 5px;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . .";
  }
  &__item {
    list-style: none;
    min-height: 250px;
    position: relative;
  }

  &__hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.7);
    z-index: -1;
    opacity: 0;
    transition: 0s;
  }

  .video__item:hover .video__hover {
    transition: 0s;
    z-index: 2;
    opacity: 1;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (max-width: 770px) {
  .video__item {
    min-height: 120px;
  }
}
</style>
