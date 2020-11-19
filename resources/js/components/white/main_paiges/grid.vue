<template>
  <div class="grid-container">
    <div class="guaranties">
      <div class="guaranties__name">{{ $t('guarantiesName') }}</div>
        <h2 class="guaranties__title">
          {{ $t('guarantiesName') }}
        </h2>
        <div class="guaranties__list">
          <ul class="list">
            <li class="list__item" v-for="(item, index) in $t('guaranties')" :key="index">
              {{item.text}}
            </li>
          </ul>
      </div>
    </div>
    <div class="values">
      <div class="values__name">{{ $t('valuesName') }}</div>
        <h2 class="values__title">
          {{ $t('valuesName') }}
        </h2>
        <div class="values__list">
          <ul class="list row">
            <li class="list__item" v-for="(item, index) in $t('values')" :key="index">
              {{item.text}}
            </li>
          </ul>
      </div>
    </div>
    <div class="comfort">
      <div class="comfort__name">{{ $t('comfortName') }} </div>
        <h2 class="comfort__title">
          {{ $t('comfortName') }}
        </h2>
        <div class="comfort__list">
          <ul class="list row">
            <li class="list__item" v-for="(item, index) in $t('comfort')" :key="index">
              {{item.text}}
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "grid",
}
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "guaranties guaranties values values values"
    "guaranties guaranties values values values"
    "comfort comfort comfort comfort comfort";
}
.guaranties {
  padding: 50px;
  grid-area: guaranties;
  display: flex;
  align-items: center;

  &__name {
    font-size: 50px;
    font-weight: 900;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-transform: uppercase;
    color: white;
  }

  &__title {
    margin-left: 10px;
    font-size: 30px;
    font-weight: 900;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-transform: uppercase;
  }
  &__list{
    flex-grow: 1;
  }
}
.values {
  margin-top: 100px;
  padding: 50px;
  grid-area: values;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;

  &__name {
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 90px;
    text-transform: uppercase;
    color: #F8F7F3;
  }
  &__title{
    margin-top: -70px;
    margin-bottom: 100px;
    width: 100%;
    padding: 20px 0;
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
  }
  &__list{
    width: 100%;
    flex-grow: 1;
  }
}
.comfort {
  padding: 50px;
  grid-area: comfort;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F3F0EC;

  &__name {
    font-size: 150px;
    font-weight: 700;
    letter-spacing: 90px;
    text-transform: uppercase;
    color: #F8F7F3;
  }

  &__title{
    margin-top: -100px;
    padding: 50px 0;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
  }
  &__list{
    padding: 50px 0;
    width: 100%;
  }
}
.list {
  padding: 0 50px;
  display: flex;
  flex-direction: column;

  &__item {
    margin: 20px 0;
    line-height: 30px;
  }
}
.row {
  flex-direction: row;
  justify-content: space-around;
  .list__item {
    width: 100%;
    max-width: 360px;
    margin: 0 25px;
  }
}
@media only screen and (max-width: 1670px){
  .values, .comfort{
    &__name {
      font-size: 50px;
      letter-spacing: 40px;
    }
  }
  .guaranties, .values, .comfort{
    .list {
      padding: 0 0 0 20px;

      &__item {
        margin: 10px;
      }
    }
  }
}

@media only screen and (max-width: 1070px) {
  .grid-container{
    grid-template-areas:
    "values values values values values"
    "guaranties guaranties guaranties guaranties guaranties"
    "comfort comfort comfort comfort comfort";
  }
  .guaranties {
    flex-direction: column;
    &__name {
      writing-mode: horizontal-tb;
      text-orientation: unset;
      letter-spacing: 25px;
    }
    &__title {
      margin-top: -30px;
      writing-mode: horizontal-tb;
      text-orientation: unset;
    }
  }
}
@media only screen and (max-width: 770px) {
  .row {
    flex-direction: column;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 550px) {
  .guaranties, .values, .comfort{
    padding: 10px;
    &__name {
      font-size: 34px;
      letter-spacing: 20px;
    }
    &__name {
      text-align: center;
      width: 100%;
      font-size: 24px;
    }
    &__title{
      text-align: center;
      margin-top: -25px;
      margin-bottom: 0;
      padding: 10px 0;
    }
    &__list{
      padding: 15px;
    }
  }
  .list {
    margin: 0 auto;
    padding: 0 10px;

    &__item {
      margin: 20px 0;
    }
  }
  .row {
    flex-direction: column;
  }
}
</style>