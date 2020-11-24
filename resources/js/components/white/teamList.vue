<template>
<div class="team-list">
  <ul class="list">
    <li
        class="list__item"
        v-for="(item , index) in getMembersList"
        :key="index"
    >
      <div class="item" v-if="index !== 4">
        <img
            :src="item.full_avatar_url"
            class="list__image"
            alt="avatar">
        <p class="list__name">{{ `${item.first_name + ' ' +  item.last_name}`}}</p>
        <p class="list__position">{{item.position}}</p>
      </div>
      <div class="item" v-else>
        <div class="item__video" @click="openContent">
          <div class="item__play">
            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 19.268C36.3333 20.0378 36.3333 21.9623 35 22.7321L3.5 40.9186C2.16667 41.6884 0.500002 40.7261 0.500002 39.1865L0.500004 2.81347C0.500004 1.27387 2.16667 0.311614 3.5 1.08142L35 19.268Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </li>
  </ul>
    <modal
        v-if="modal"
        @close="closeModal"
        :content="modalContent"
    />
</div>
</template>

<script>
import modal from '@/js/components/white/modal/modal.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
name: "teamList",
    components: {
        modal
    },
    data(){
        return {
            modal: false
        }
    },
    mounted() {
        this.getTeamList()
    },
    computed: {
    ...mapGetters(['getMembersList', 'getVideo'])
    },
    methods: {
        ...mapActions(['getTeamList']),
        closeModal(){
            this.modalContent = ''
            this.modal = false
        },
        openContent(){
            this.modalContent = {
                type: 'video',
                contentPath: this.getVideo
            }
            this.modal = true
        },
    }
}
</script>

<style scoped lang="scss">
.team-list {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 15px;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  &__item {
    width: 100%;
    max-width: 300px;
    list-style: none;
    justify-self: center;
    &:first-child{
      grid-area: 1 / 1 / 2 / 2;
        img {
            border-radius: 80px 80px 0 80px;
        }
    }
    &:nth-child(2){
      grid-area: 1 / 2 / 2 / 3;
        img {
            border-radius: 80px 80px 0 0;
        }
    }
    &:nth-child(3){
      grid-area: 1 / 3 / 2 / 4;
        img {
            border-radius: 80px 80px 80px 0;
        }
    }
    &:nth-child(4){
      grid-area: 2 / 1 / 3 / 2;
        img {
            border-radius: 80px 0 0 80px;
        }
    }
    &:nth-child(5){
        transform: scale(1.3);
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(6){
      grid-area: 2 / 3 / 3 / 4;
        img {
            border-radius: 0 80px 80px 0;
        }
    }
    &:nth-child(7){
      grid-area: 3 / 1 / 4 / 2;
        img {
            border-radius: 80px 0 80px 80px;
        }
    }
    &:nth-child(8){
      grid-area: 3 / 2 / 4 / 3;
        img {
            border-radius: 0 0 80px 80px;
        }
    }
    &:last-child{
      grid-area: 3 / 3 / 4 / 4;
        img {
            border-radius: 0 80px 80px 80px;
        }
    }
  }
  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  &__name {
    margin-top: 15px;
    font-size: 24px;
    font-weight: 600;
      text-align: center;
  }
  &__position {
    margin-top: 10px;
  }
}
.item {
    width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__video {
    width: 100%;
    max-width: 420px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
    &__play {
        opacity: 0;
    }
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
    &:hover .item__play {
        opacity: 1;
        transition: .3s ease-in-out;
    }
}
@media only screen and (max-width: 1240px) {
  .item {
    &__video {
      height: auto;
    }
  }
}
@media only screen and (max-width: 660px) {
  .team-list {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px 5px;
  }
  .list {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    &__name {
      margin-top: 5px;
      font-size: 14px;
    }
    &__position {
      margin-top: 0;
      font-size: 10px;
    }
  }
}
</style>
