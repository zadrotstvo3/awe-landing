<template>
  <div class="gallery">
    <ul class="list">
      <li class="list__item"
          v-for="(option, index) in $t('blackGallery')"
          :key="index"
          :style="[ option.showList ?
          {backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ),
          url(${require(`@/js/assets/galleryBlack/${option.colorImage}`)})`} :
          {backgroundImage:`url(${require(`@/js/assets/galleryBlack/${option.colorImage}`)})`}
          ]"
      >
        <div class="item">
          <div class="item__head" @click="showItemList(option)">
            <span class="item__icon" >
              <svg style="width:24px;height:24px" viewBox="0 0 24 24" v-if="!option.showList">
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24" v-else>
                  <path d="M19,13H5V11H19V13Z" />
              </svg>
            </span>
            <span class="item__title">{{option.title}}</span>
          </div>
          <transition name="fade" mode="in-out">
            <div class="item__body" v-if="option.showList">
              <ul class="sublist">
                <li class="sublist__item" v-for="item in option.list" :key="item.text">
                  {{item.text}}
                </li>
              </ul>
            </div>
            <div class="item__outerText"
                 v-if="option.title === 'No' && !option.showList"
            >
              <span>как на етом</span>
              <span>заработать</span>
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainGallery",
  data(){
    return{}
  },
  methods: {
    showItemList(option){
      option.showList = !option.showList
    }
  }
}
</script>

<style scoped lang="scss">

.gallery{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: visible;
  &__item {
    position: relative;
    padding: 20px;
    flex: 0 1 20%;
    height: 100%;
    min-height: 290px;
    display: flex;
    list-style: none;
    background-size: cover;
    background-repeat: no-repeat;
    &:nth-child(4){
      flex: 0 1 20%;
      &:before {
        content: url("~@/js/assets/blackSVGs/dots-horisontal.svg");
        position: absolute;
        bottom: -10px;
      }
      &:after {
        content: url("~@/js/assets/blackSVGs/dots-vertical.svg");
        position: absolute;
        top: 10px;
        right: 0;
      }
    }
  }
}
.item {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  &__head {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
  }
  &__icon {
    margin-right: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      fill: white;
    }
    &:hover {
      cursor: pointer;
      background-color: rgba(255,255,255, 0.2);
    }
  }
  &__title {
    font-size: 25px;
    color: white;
  }
  &__body {
    padding: 20px;
  }
  &__outerText {
    margin-bottom: 50px;
    color: white;
    align-content: center;
    align-self:  center;
    text-align: center;
    text-transform: uppercase;
    transition: 0s;
    span {
      display: block;
      margin: 5px 0;
      font-size: 24px;
      &:last-child {
        font-size: 34px;
      }
    }
  }
}

.sublist {
  &__item {
    margin: 5px 0;
    font-size: 12px;
    color: white;
  }
}
.title {
  position: relative;
  margin: -40px 0;
  text-align: center;
  letter-spacing: 20px;
  font-size: 120px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.big-text {
  font-size: 80px;
}
@media only screen and (max-width: 1300px) {
  .list__item {
    flex: 0 1 33%;
    &:nth-child(4){
      flex: 0 1 66%;
    }
  }

  .title {
    margin: -20px 0;
    font-size: 70px;
  }
}
@media only screen and (max-width: 990px) {
  .list__item {
    flex: 0 1 50%;
    &:nth-child(4){
      flex: 0 1 50%;
    }
  }
}
@media only screen and (max-width: 670px) {
  .list__item {
    flex: 0 1 100%;
    min-height: 0;
    &:nth-child(4){
      flex: 0 1 100%;
    }
  }
  .list {
    order: 2;
  }
  .big-text {
    font-size: 34px;
  }
  .item__outerText {
    display: none;
  }
  .title {
    margin: 30px 0;
    padding: 15px;
    order: 1;
    font-size: 34px;
    letter-spacing: 5px;
    text-align: left;
  }
}
</style>
