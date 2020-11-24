<template>
  <div class="covid">
    <img class="covid__text" src="@/js/assets/SVG/lockdown.svg" alt="image">
  </div>
</template>

<script>
export default {
name: "covid"
}
</script>

<style lang="scss">
.covid {
  margin-top: -100px;
  padding-bottom: 10px;
  &__text {
    padding: 10px 0;
    width: 100%;
    object-fit: contain;
  }
}
@media only screen and (max-width: 1400px) {
  .covid {
    margin-top: -50px;
  }
}
@media only screen and (max-width: 770px) {
  .covid {
    margin-top: -100px;
  }
}
</style>
