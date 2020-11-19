<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__social">
        <div class="social">
          <ul class="social__list">
            <li class="social__item">
              <img src="@/js/assets/blackSVGs/youtube-black.svg" alt="youtube logo">
            </li>
            <li class="social__item">
              <img src="@/js/assets/blackSVGs/faceboock-black.svg" alt="faceboock logo">
            </li>
            <li class="social__item">
              <img src="@/js/assets/blackSVGs/instagram-black.svg" alt="instagram logo">
            </li>
          </ul>
        </div>
        <div class="email">
          <a href="mailto:allworkexpress@gmail.com">
            allworkexpress@gmail.com
          </a>
        </div>
        <div class="copyright">
          <p>© 2020 AllWorkExpress</p>
        </div>
      </div>
      <div class="footer__menu">
        <ul class="menu">
          <li class="menu__item"
              v-for="(item, index) in $t('footerNavigation')"
              :key="index"
          >
            <router-link :to="item.path">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__market">
        <div class="footer__market-column">
          <div class="download">
            <img :src="require(`@/js/assets/blackSVGs/payment-black.svg`)" alt="banks logos">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "black__footer"
}
</script>

<style scoped lang="scss">

.footer {
  padding: 0 25px;

  &__content {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__market {
    width: 100%;
    max-width: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: flex-end;

    .download {
      margin: 0 10px;
      img {
        margin: 10px 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  &__market-column {
    display: flex;
  }
  &__menu {
    flex-grow: 1;
  }
  &__social {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.email {
  padding: 15px 0;
  a {
    text-decoration: none;
    color: white;
  }
}
.menu {
  padding: 0 50px;
  width: 100%;
  max-width: 550px;
  max-height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 200;

  &__item {
    padding: 7px 10px;
    list-style: none;
    color: white;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__list {
    display: flex;
    align-items: flex-start;
  }
  &__item {
    margin-right: 50px;
    list-style: none;
  }
}
.copyright {
  color: white;
}
@media only screen and (max-width: 820px) {
  .footer {
    &__content {
      flex-direction: column;
      align-items: center;
    }
    &__menu {
      display: none;
    }

    &__market {
      flex-direction: column;
      align-self: center;
    }
    &__market-column {
      align-items: center;
    }
    &__social {
      align-items: center;
    }
  }
  .social {
    &__list {
      display: flex;
      justify-content: space-between;
    }
    &__item {
      margin: 0 20px;
      list-style: none;
    }
  }
}
</style>
