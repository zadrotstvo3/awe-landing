<template>
<div class="value-list">
  <div class="subscription"
       v-for="(subscription, index) in $t('offersListValues')"
       :key="index"
  >
    <h3 class="subscription__name">{{index}}</h3>
    <ul class="subscription__list">
      <li class="subscription__item"
          v-for="(name, nameIndex) in subscription"
          :key="nameIndex"
      >
        <h3 class="subscription__role-name">{{name.roleName.toUpperCase()}}</h3>
        <ul class="subscription__possibilities">
          <li class="possibilities"
              v-for="(possibility, possibilityIndex) in Object.values(name.roleValues)"
              :key="possibilityIndex"
              :class="[
                  possibility ? 'green' : 'red',
                  selected === possibilityIndex ? 'background' : ''
                  ]"
          >
            <p>{{possibility ? '+' : '-'}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
name: "offersValueList",
  props:['selected']
}
</script>

<style scoped lang="scss">
.value-list {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.subscription {
  width: 100%;
  max-width: 300px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background-color: #E4DFD8;
  &__name {
    padding: 10px 0;
    font-size: 34px;
    color: white;
  }

  &__list {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    border-radius: 30px;
    background-color: #fff;
  }

  &__item {
    list-style: none;
  }
  &__role-name {
    margin: 10px;
    font-size: 14px;
  }
  &__possibilities {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
}
.possibilities {
  width: 100%;
  height: 30px;
  list-style: none;
  text-align: center;
  border-bottom: 1px solid transparent;
}
.red {
  color: #ff3b3b;
}
.green {
  color: #6fd76f;
}
.background {
  border-bottom: 1px solid #E4DFD8;
}
@media only screen and (max-width: 1250px) {
  .value-list {
    width: 100%;
    max-width: 1000px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .subscription {
    &__role-name {
      font-size: 8px;
    }
  }
  .possibilities {
    height: 25px;
  }
}
@media only screen and (max-width: 770px) {
  .value-list {
    width: 500px;
    flex-grow: 0;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .subscription {
    margin: 0 20px;
  }
  .possibilities {
    height: 32px;
  }
}
@media only screen and (max-width: 375px) {
  .value-list {
    width: 400px;
  }
  .subscription {
    width: 150px;
  }
  .possibilities {
    height: 25px;
  }
}
</style>