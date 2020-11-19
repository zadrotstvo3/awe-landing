<template>
<div class="investors-info">
  <h2 class="investors-info__title">Lorem ipsum dolor.</h2>
  <p class="investors-info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, cumque dolorem eaque earum error facere neque officia omnis rem sunt. Accusamus cupiditate eum maxime officia tempora temporibus, ullam velit voluptatem</p>
  <p class="investors-info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, animi culpa deleniti dicta dolorem dolorum, enim et facere fugiat illum ipsam itaque minima modi, nostrum possimus sed tempore vero?</p>
  <p class="investors-info__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam assumenda commodi cupiditate delectus deleniti ea error fugit, illo ipsum itaque magnam natus, non odit quibusdam, quo sapiente unde voluptates.</p>
</div>
</template>

<script>
export default {
name: "investorsInfo"
}
</script>

<style scoped lang="scss">
.investors-info {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  &__title {
    font-size: 94px;
  }
  &__text {
    margin: 15px 0;
    font-size: 24px;
  }
}
@media only screen and (max-width: 770px) {
  .investors-info {
    &__title {
      font-size: 34px;
    }
    &__text {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}
</style>