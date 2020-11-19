<template>
  <div class="values">
    <h3>Profiles functionality</h3>
    <ul class="values__list">
      <li class="values__item"
          v-for="(value, index) in $t('offersListConditions')"
          :key="index"
          @mouseenter="showHover(index)"
      >
        {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "offersValueNames",
  methods: {
    showHover(index){
      this.$emit('triggreHover', index)
    }
  }
}
</script>

<style scoped lang="scss">
.values {
  padding: 15px;
  flex-grow: 0;
  h3 {
    font-size: 34px;
  }
  &__list {
    margin-top: 70px;
  }
  &__item {
    height: 20px;
    margin-bottom: 10px;
    list-style: none;
    font-size: 16px;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid black;
    }
  }
}
@media only screen and (max-width: 1250px) {
  .values {
    h3 {
      font-size: 16px;
    }
    &__item {
      margin: 10px;
      height: auto;
      font-size: 10px;
    }
  }
}
@media only screen and (max-width: 770px) {
  .values {

  }
}
@media only screen and (max-width: 375px) {
  .values {
   padding: 5px;
    &__list {
      margin-top: 80px;
    }
    &__item {
      font-size: 8px;
      margin: 11.5px;
    }
  }
}
</style>