<template>
  <div class="sandBox">
    <canvasComponent class="sandBox__bg"/>
    <div class="sandBox__content">
      <div class="sandBox__title">
        <img src="@/js/assets/blackSVGs/evolution.svg" alt="title">
      </div>
      <div class="sandBox__clocks">
        <sand-box class="sandTime"/>
        <ul class="sandBox__list list">
          <li class="list__item"
              v-for="list in $t('blackValueList')"
              :key="list.title"
              :class="getClassName(list.title)"
          >
            <div class="list__title">
              <h3>
                {{list.title}}
              </h3>
            </div>
            <ul class="list__sublist">
              <li class="list__sublist-item"
                  v-for="(item, index) in list.sublist"
                  :key="index"
              >
                <div class="list__sublist-text">
                  {{item.text}}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import canvasComponent from '@/js/components/black/canvas'
import sandBox from '@/js/components/black/sandBox'
export default {
  name: "mainSandbox",
  components: {
    canvasComponent,
    sandBox
  },
  data(){
    return {
    }
  },
  methods: {
    getClassName(name){
      return `list__${name}`
    }
  }
}
</script>

<style scoped lang="scss">
.sandBox {
  position: relative;
  width: 100%;
  height: 1200px;
  color: white;

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  &__title {
    width: 70%;
    margin: -100px auto 0 auto;
    font-size: 150px;
    letter-spacing: 30px;
    color: white;
    opacity: 1;
    img {
      width: 100%;
      min-height: 200px;
      opacity: .3;
    }
  }

  &__clocks {
    position: relative;
    width: 100%;
    max-width: 790px;
    min-height: 790px;
    margin: -50px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dotted rgba(255,255,255, .5);
    border-radius: 100%;
    background-color: #000000;
  }
}

.sandTime {
  width: 300px !important;
  height: 400px !important;
  background-color:rgba(0, 0, 0, 1);
}
.list {
  &__item {
    flex: 0 0 50%;
    align-self: center;
  }

  &__title {
    margin-bottom: 20px;
  }
  &__sublist {
    width: 180px;
  }
  &__AI {
    position: absolute;
    top: 100px;
    left: -80px;
  }

  &__BLOCKCHAIN {
    position: absolute;
    top: 100px;
    right: -80px;
  }

  &__ML {
    position: absolute;
    bottom: 10px;
    left: -80px;
  }

  &__SMART {
    position: absolute;
    bottom: 10px;
    right: -80px;
  }

  &__AI, &__ML {
    transform: rotateY(180deg);
    text-align: right;

    .list__title, .list__sublist-text {
      transform: rotateY(180deg);
      text-align: right;

    }
  }
  &__title:hover {
    opacity: 1;
    cursor: pointer;
  }
}
@media screen and (max-width: 770px) {
  .sandBox {
    position: relative;
    height: 650px;
    margin: 0;
    &__title {
      margin-top: -50px;
      width: 65%;
      img {
        min-height: auto;
        opacity: 1;
      }
    }
    &__content {
      display: block;
    }
    &__clocks{
      margin: 0;
      max-width: 100%;
      min-height: auto;
      position: static;
      justify-content: center;
      align-items: flex-start;
      border: none;
      background-color: transparent;
      .sandTime {
        display: none;
      }
    }

    &__list {
      position: static;
      width: 100%;
      max-width: 500px;
      display: flex;
    }
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__item {
      margin: 22px 0;
    }
    &__AI, &__BLOCKCHAIN,
    &__ML, &__SMART {
      position: static;
    }
    &__AI, &__ML {
      transform: rotateY(0deg);
      text-align: left;

      .list__title, .list__sublist-text {
        transform: rotateY(0deg);
        text-align: left;

      }
    }
  }
}
@media screen and (max-width: 770px) {
  .sandBox {
    position: relative;
  }
  .list {
    padding: 15px;
    font-size: 12px;
    &__sublist {
      width: 130px;
    }
  }
}
</style>
