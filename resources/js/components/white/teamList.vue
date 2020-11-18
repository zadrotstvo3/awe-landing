<template>
<div class="team-list">
  <ul class="list">
    <li
        class="list__item"
        v-for="(item , index) in $t('teamList')"
        :key="index"
    >
      <div class="item" v-if="item.avatar">
        <img
            :src="require(`@/js/assets/team_list/${item.avatar}`)"
            class="list__image"
            alt="avatar">
        <p class="list__name">{{item.name}}</p>
        <p class="list__position">{{item.position}}</p>
      </div>
      <div class="item" v-else>
        <div class="item__video">
          <div class="item__play">
            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 19.268C36.3333 20.0378 36.3333 21.9623 35 22.7321L3.5 40.9186C2.16667 41.6884 0.500002 40.7261 0.500002 39.1865L0.500004 2.81347C0.500004 1.27387 2.16667 0.311614 3.5 1.08142L35 19.268Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
name: "teamList",
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
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  &__item {
    width: 100%;
    max-width: 300px;
    list-style: none;
    justify-self: center;
    &:first-child{
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2){
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3){
      grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(4){
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(5){
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(6){
      grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(7){
      grid-area: 3 / 1 / 4 / 2;
    }
    &:nth-child(8){
      grid-area: 3 / 2 / 4 / 3;
    }
    &:last-child{
      grid-area: 3 / 3 / 4 / 4;
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
  }
  &__position {
    margin-top: 10px;
  }
}
.item {
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
