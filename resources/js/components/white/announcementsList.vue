<template>
<div class="announcements-list">
  <div class="announcements-list__title">
    <h2 class="title">{{$t('announcementsTitle')}}</h2>
  </div>
  <div class="announcements-list__list">
    <ul class="list"
        v-for="(article, articleIndex) in getArticlesList"
        :key="articleIndex"
        v-if="articleIndex === $i18n.locale"
    >
      <li class="list__item"
          v-for="(item, index) in article"
          :key="index"
          v-if="item.title"
      >
        <div class="list__step">
          <div class="list__dot">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5" fill="#F8F6F3" stroke="#DED8D0"/>
            </svg>
          </div>
          <div class="list__step--name">
            {{item.date}}
          </div>
        </div>
        <div class="list__announce">
          <div class="announce">
            <img :src="item.full_image_url" alt="image" class="announce__img">
            <div class="announce__text">
              <h3 class="announce__title">{{item.title}}</h3>
              <p class="announce__description">{{item.description}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "announcementsList",
    computed: {
        ...mapGetters(['getArticlesList'])
    },
    created() {
        this.getArticles()
    },
    methods: {
        ...mapActions(['getArticles'])
    }
}
</script>

<style scoped lang="scss">
.announcements-list {
  padding: 15px 0;

  &__title {
    width: 100%;
    max-width: 500px;
    margin-left: 20%;
    font-size: 120px;
    font-weight: 800;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 30px;
    color: white;
  }
  &__list {
    position: relative;
    padding: 15px;

  }
}
.list {
  width: 100%;
  max-width: 1300px;
  margin: -100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:nth-child(even){
      .announce {
        flex-direction: row-reverse;
      }
    }
  }
  &__step {
    width: 100%;
    max-width: 100px;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    border-left: 1px solid  #E4DFD8;

    &--name {
      margin-left: 10px;
        font-size: 14px;
    }
  }
  &__dot {
    margin-left: -15px;
  }
  &__announce {
    margin-top: -100px;
    padding: 100px 0;
      width: 100%;
  }
}

.announce {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__text {
    padding: 0 35px;
      align-self: flex-start;
  }
  &__title {
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 140%;
      flex-grow: 1;
  }
  &__description  {
    font-size: 20px;
    line-height: 140%;
    font-weight: 200;
  }
  &__img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 30px;
      flex-grow: 0;
  }
}
@media only screen and (max-width: 1770px) {
  .announcements-list {
    &__title {
      font-size: 80px;
    }
  }
}
@media only screen and (max-width: 1440px) {
  .announcements-list {
    &__title {
      margin-left: 30%;
      font-size: 50px;
    }
  }
  .list {
    margin: -50px auto 0 auto;
  }
  .announce {
    &__img {
      max-width: 450px;
    }
    &__title {
      font-size: 22px;
    }
    &__description {
      font-size: 16px;
    }
  }
}
@media only screen and (max-width: 990px) {
  .announcements-list {
    &__title {
      margin-left: 20%;
      font-size: 30px;
      text-align: left;
    }
  }
  .list {
    margin: 0 auto;
  }
  .announce {
    &__img {
      max-width: 250px;
    }
    &__title {
      font-size: 16px;
    }
    &__description {
      font-size: 12px;
    }
  }
}
@media only screen and (max-width: 690px) {
  .announcements-list {
    &__title {
      max-width: 100%;
      padding: 0 15px;
      margin-left: 0;
      font-size: 20px;
      text-align: center;
      letter-spacing: 0;
    }
  }
  .list {
    margin: 0 auto;
    &__item {
      &:nth-child(even){
        .announce {
          flex-direction: column;
        }
      }
    }
      &__step {
          width: 70px;
      }
    &__step--name {
      margin: 0 5px;
      font-size: 8px;
    }
    &__announce {
      padding: 20px 0;
      margin-top: -60px;
    }
  }
  .announce {
    padding: 15px 0;
    flex-direction: column;
    &__img {
      max-width: 100%;
      margin-bottom: 10px;
      height: 200px;
      object-fit: contain;
    }
    &__text {
      padding: 0;
    }
    &__title {
      font-size: 16px;
    }
    &__description {
      font-size: 12px;
    }
  }
}
</style>
