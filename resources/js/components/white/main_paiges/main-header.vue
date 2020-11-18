<template>
  <div class="information">
    <div class="information__title">
      <div class="parent">
        All work
        <br>
        <span>
          express
        </span>
          <div class="parent__key">
            <img src="@/js/assets/key.png" alt="key image" class="key">
          </div>
      </div>
    </div>
    <div class="information__box">
      <div class="information__subtitle">
        <p class="subtitle"
           v-for="(subText, index) in $t('headerSubtitleText')"
           :key="index"
        >
          {{subText.text}}
        </p>
      </div>
      <div class="information__action">
        <div class="lock" @click="goToBlack">
          <div class="lock__item">
            <img class="lock__static" src="@/js/assets/unicorn1.png" alt="unicorn image">
            <img class="lock__active" src="@/js/assets/unicorn2.png" alt="unicorn image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-header',
  methods: {
    goToBlack(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss">
 .information{
   display: flex;
   flex-direction: column;
   overflow: visible;
   &__title {
     font-family: 'Axiforma', sans-serif;
     .parent{
       position: relative;
       font-size: 220px;
       font-weight: 200;
       line-height: 135px;
       z-index: 2;
     }
   }

   &__box {
     margin-top: 150px;
     width: 90%;
     display: flex;
   }
   &__action {
     height: 200px;
     width: 200px;
     margin-left: 20px;
   }

   &__subtitle{
     margin-top: -50px;
     font-size: 20px;
     line-height: 35px;
     font-weight: 200;

     .subtitle {
       margin: 15px 0;
       width: 100%;
       max-width: 700px;
     }
   }
 }

 .lock {
    width: 100%;
    height: 100%;
    margin-left: -10px;

    &__item {
      position: relative;

      &:hover .lock__active{
        cursor: pointer;
        opacity: 2;
        z-index: 2;
        transition: 0.3s ease-in-out;
      }
    }

   &__active, &__static {
    position: absolute;
     opacity: 0;
     z-index: 0;
     transition: 0.3s ease-in-out;
   }
   &__static {
     opacity: 1;
     z-index: 1;
   }
 }
 .parent{
   position: relative;
   width: 100%;
   max-width: 960px;

   &__key {
     position: absolute;
     right: 15%;
     bottom: -50%;

     &::before {
       content: '';
       position: absolute;
       top: -50px;
       right: 5px;
       height: 60px;
       width: 25px;
       z-index: -1;
       border-left: 2px solid #DED8D0;
       border-radius: 50%;
     }
     &::after {
       content: '';
       position: absolute;
       top: -50px;
       right: 5px;
       height: 60px;
       width: 25px;
       z-index: 3;
       border-right: 1px solid #DED8D0;
       border-radius: 50%;
     }
   }
 }
@media only screen and (max-width: 1460px) {
  .information {
     &__title {
     .parent{
       font-size: 140px;
       line-height: 100px;

       span {
         margin-left: 120px;
       }
     }
   }

    &__subtitle {
      margin-top: -100px;
      font-size: 18px;
      line-height: 25px;
    }

    &__box {
      flex-direction: row;
    }

    &__action {
      margin-left:20px;
    }
  }
  .parent {
    width: 550px;
     &__key {
       top: 205px;
       right: -90px;
     &::after,  &::before {
       content: '';
       right: 20%;
     }
   }
  }
 }
 @media only screen and (max-width: 990px) {
   .information__title {
     .parent {
       font-size: 120px;
       &__key {
         right: 0;
       }
     }
   }
   .information__subtitle {
     margin-top: -50px;
   }
   .information__action{
     margin-left: 20px;
     height: 120px;
     img {
       height: 120px;
     }
   }
   .information__box {
     width: 100%;
     margin-top: 100px;
   }
   .information__action {
     margin: 50px -60px 0 0;
   }
   .lock {
     margin: 0;
   }
 }
   @media only screen and (max-width: 700px) {
   .information {
     padding: 15px;
     &__title {
      .parent{
        font-size: 100px;
        line-height: 70px;
        span {
          margin-left: 35px;
        }
      }
    }
    &__box {
    }

     &__action {
       margin-left: 0;
     }
  }
  .parent {
    width: 400px;
     &__key {
       top: 145px;
       right: -35px;
     &::after,  &::before {
       content: '';
       right: 20%;
     }
   }
  }
 }
 @media only screen and (max-width: 550px) {
   .information {
     padding: 10px;
     &__title {
      .parent{
        font-size: 70px;
        line-height: 50px;
      }
    }
     &__action {
       margin-left: 0;
       margin-right: 0;
     }
     &__subtitle {
       .subtitle {
         font-size: 12px;
         line-height: 20px;
       }
     }
  }
  .parent {
    width: 300px;
     &__key {
       top: 120px;
   }
  }
}
</style>
