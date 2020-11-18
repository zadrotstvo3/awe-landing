<template>
  <div class="countries">
    <ul class="countries__list">
      <li
          class="countries__item"
          v-for="country in countryList"
          :key="country.name"
          @click="openActionModal(country)"
      >
        <div class="countries__info">
          <p class="countries__name">{{country.alpha2Code}}</p>
          <img :src="country.flag" alt="">
        </div>
        <div class="countries__percent">
          1%
        </div>
        <div class="countries__button">
          <button class="button">
            buy
          </button>
        </div>
      </li>
    </ul>
    <transition name="fade" mode="in-out">
      <investorsActionModal
          v-if="showActionModal"
          :data="currentCountry"
          @closeActionModal="toggleActionModal"
      />
    </transition>
  </div>
</template>

<script>
import investorsActionModal from "@/js/components/black/modal/investorsActionModal";

export default {
  name: "countryList",
  components: {
    investorsActionModal
  },
  data(){
    return {
      countryList: '',
      currentCountry: '',
      showActionModal: false
    }
  },
  async created() {
    const country = await fetch('https://restcountries.eu/rest/v2/all')
        .then((resp)=> resp.json())
        .catch(error => console.log(error))
    this.createCountyList(country)
  },
  methods: {
    close(){
      this.$emit('close')
    },
    createCountyList(list){
      const countries = [
        'United States of America',
        'United Kingdom of Great Britain and Northern Ireland',
        'Ukraine',
        'Turkey',
        'Spain',
        'Russian Federation',
        'Germany',
        'India',
        'China',
        'Italy'
      ]
      const sortedCountries = list.filter((item) => countries.includes( item.name ))
      this.countryList = [...sortedCountries]
    },
    openActionModal(item){
      this.currentCountry = item
      this.toggleActionModal()

    },
    toggleActionModal(){
      this.showActionModal = !this.showActionModal
    }
  }
}
</script>

<style scoped lang="scss">
.countries {
  width: 100%;
  &__list {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__item {
    margin: 15px;
    padding: 15px;
    width: 250px;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
    list-style: none;
    transition: .3s ease-in-out;
    background-color: #fff;
    img {
      width: 75px;
      object-fit: contain;
      border: 1px solid black;
    }
    &:hover {
      cursor: pointer;
      border-color: transparent;
      box-shadow: 0 0 15px 0 #fff;
    }
  }
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__name {
    margin-right: 15px;
    font-size: 38px;
    font-weight: 900;
    color: black;
  }
  &__percent {
    padding: 5px 0;
    font-size: 74px;
    text-align: center;
    color: black;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      width: 100%;
      max-width: 190px;
      padding: 15px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #fff;
      font-size: 24px;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
