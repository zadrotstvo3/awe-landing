<template>
<div class="about">
  <div class="about__title">
    <div class="title--small">
      {{$t('aboutUsSmall')}}
    </div>
    <div class="title text-decoration">
      {{$t('aboutUsBig')}}
    </div>
  </div>
  <div class="about__content">
    <about-us-text />
  </div>
</div>
</template>

<script>
import aboutUsText from "@/js/components/white/aboutUsText";
export default {
name: "aboutUsWhite",
  components: {
  aboutUsText
  }
}
</script>

<style scoped lang="scss">
.about {
  &__title {
    padding: 160px 160px 0 160px;
  }
}
.title {
  font-size: 200px;
  color: white;

  &--small {
    position: relative;
    margin-bottom: -160px;
    font-size: 40px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
  }
}

.text-decoration{
  font-weight: 700;
  text-shadow:
      -2px -2px 0 #E4DFD8,
      2px -2px 0 #E4DFD8,
      -2px 2px 0 #E4DFD8,
      2px 2px 0 #E4DFD8;
}
@media only screen and (max-width: 1440px) {
  .about {

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
  .about {

    &__title {
      padding: 40px 40px 0 40px;
    }
  }
  .title {
    font-size: 70px;

    &--small {
      margin-bottom: -60px;
      font-size: 20px;
    }
  }
}
</style>
