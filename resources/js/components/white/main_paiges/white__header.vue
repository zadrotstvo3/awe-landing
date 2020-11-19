<template>
  <header class="header" v-if="windowWidth > 600">
    <div class="header__logo" @click="goHome">
      <img class="logo" src="@/js/assets/logo.svg" alt="website-logo">
    </div>
    <div class="header__nav">
      <ul class="nav">
        <router-link
            v-for="(page, index) in $t('headerMenu')"
            :key="index"
            class="nav__item" :to="page.to"
            exact
        >
          {{page.title}}
        </router-link>
      </ul>
    </div>
    <div class="header__lang">
      <div class="active-lang" @click="toggleLangMenu = !toggleLangMenu">
        <p class="lang__active">{{activeLang.toUpperCase()}}</p>
        <img src="@/js/assets/SVG/arrow-down-sign-to-navigate.svg" alt="arrow">
      </div>
      <ul class="lang"
          :class="[toggleLangMenu ? 'lang-active' : 'lang-hidden']"
      >
        <li class="lang__item"
            v-for="(lang, index) in languages"
            :key="index"
            :class="[lang === $i18n.locale ? 'lang__active': '']"
            @click="changeLanguage(lang)"
        >{{ lang.toUpperCase() }}
        </li>
      </ul>
    </div>
  </header>
  <header class="mobile-header" v-else>
    <div class="mobile-header__button" @click="toggleMenu">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
    <div class="mobile-header__logo" @click="goHome">
      <img class="logo" src="@/js/assets/logo.svg" alt="website-logo">
    </div>
    <div class="mobile-header__menu" :class="[isMenuShown ? 'active' : 'hidden']">
      <div class="close"  @click.stop="toggleMenu">
        <svg class="close__icon" style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
      <div class="mobile-menu">
        <ul class="mobile-menu__nav">
          <li class="mobile-menu__item"
              v-for="(item, index) in $t('footerNavigation')"
              :key="index"
              @click="toggleMenu()"
          >
            <router-link :to="item.path">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mobile-lang">
        <ul class="lang">
          <li class="lang__item"
              v-for="(lang, index) in languages"
              :key="index"
              :class="[lang === $i18n.locale ? 'lang__active': '']"
              @click="changeLanguage(lang)"
          >{{ lang.toUpperCase() }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "whiteHeader",
  data() {
    return {
      windowWidth: window.innerWidth,
      isMenuShown: false,
      isPageActive: false,
      languages: [
        'en',
        'uk',
        'ru'
      ],
      activeLang: this.$i18n.locale,
      toggleLangMenu: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleMenu(){
      this.isMenuShown = !this.isMenuShown
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    goHome(){
      this.$router.push('/')
    },
    changeLanguage(lang){
      this.languages.map(item => {
        if(lang === item){
            this.$i18n.locale = item
            this.activeLang = item
        }
      })
      this.toggleLangMenu = false
    }
  }
}
</script>

<style scoped lang="scss">
.router-link-active {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }
}
.header {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  align-items: center;
  background-color: #F8F7F3;
  &__logo{
    grid-area: 1 / 1 / 2 / 2;
    img {
      width: 100%;
      max-width: 127px;
    }
  }

  &__nav{
    margin: 15px;
    grid-area: 1 / 2 / 2 / 5;
  }
  &__lang{
    margin: 0 15px;
    grid-area: 1 / 5 / 2 / 6;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__logIn{
    grid-area: 1 / 6 / 2 / 7;
    a {
      text-decoration: none;
      color: #2C2B30;
    }
  }
}

.mobile-header {
  padding: 15px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background-color: #F8F7F3;
  z-index: 6;

  &__menu {
    padding: 25px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 4;
    transition: .3s ease-in-out;
  }
  &__logo {
    img {
      width: 80px;
    }
  }
}
.hidden {
  transform: translateX(-100%);
  opacity: 0;
}
.active{
  transform: translateX(0);
  opacity: 1;
}
.close {
  align-self: flex-start;
  &__icon {
    width: 55px;
    height: 55px;
  }
}
.mobile-lang {
  .lang {
    width: auto;
    position: static;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
  }
}
.mobile-menu {
  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item {
    list-style: none;
    margin: 5px;
    padding: 15px;
    font-size: 18px;
    text-align: left;
    text-decoration: none;
    color: #2C2B30;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
}

.nav {
  display: flex;
  justify-content: center;

  &__item {
    margin: 0 5px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: #2C2B30;
  }
}

.lang {
  width: 50px;
  position: absolute;
  right: 0;
  bottom: -100px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid black;

  &__item {
    margin: 10px 0;
    padding: 0 5px;
    list-style: none;
    opacity: 0.4;
    cursor: pointer;
  }

  &__active {
    text-decoration: underline;
    opacity: 1;
  }
}
.lang-active {
  display: block;
  opacity: 1;
  visibility: visible;
}
.lang-hidden {
  display: none;
  opacity: 0;
  visibility: hidden;
}
.active-lang {
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 5px;
    width: 15px;
  }
}
</style>
