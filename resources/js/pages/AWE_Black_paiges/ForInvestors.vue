<template>
  <div class="investors">
    <div class="investors__title">
      <div class="title--small">
        For
      </div>
      <div class="title text-decoration">
        Investors
      </div>
    </div>
    <div class="investors__list">
      <div class="investors__countries">
        <investorsInfo />
        <countryList />
      </div>
    </div>
    </div>
</template>

<script>
import investorsInfo from '@/js/components/black/investorsInfo'
import countryList from '@/js/components/black/countryList'
export default {
name: "InvestorsBlack",
  components: {
    countryList,
    investorsInfo
  }
}
</script>

<style scoped lang="scss">
.investors {

  &__title {
    margin-top: -100px;
    padding: 160px 160px 0 160px;
  }
}
.title {
  font-size: 200px;
  color: black;

  &--small {
    position: relative;
    margin-bottom: -160px;
    font-size: 40px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
  }
}

.text-decoration{
  font-weight: 700;
  text-shadow:
      -2px -2px 0 white,
      2px -2px 0 white,
      -2px 2px 0 white,
      2px 2px 0 white;
}
@media only screen and (max-width: 1440px) {
  .investors {
    margin-top: 50px;
    &__title {
      padding: 100px 60px 0 60px;
    }
  }
  .title {
    font-size: 120px;

    &--small {
      margin-bottom: -100px;
      font-size: 20px;
    }
  }
}
@media only screen and (max-width: 690px) {
  .investors {
    margin-top: 100px;
    &__title {
      padding: 50px 60px 0 60px;
    }
  }
  .title {
    font-size: 40px;

    &--small {
      margin-bottom: -40px;
      margin-left: -45px;
      font-size: 14px;
    }
  }
}
</style>
