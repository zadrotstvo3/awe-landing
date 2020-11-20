<template>
<header class="header">
  <ScaleDown
      @click="openSideBar = !openSideBar"
  >
    <router-link class="link" to="/home">
      <img src="@/js/assets/home.svg" alt="home icon">
      <span>Home</span>
    </router-link>
    <router-link class="link" to="/admin-panel/announcements">
      <img src="@/js/assets/writing.svg" alt="blog icon">
      <span>Announcements</span>
    </router-link>
    <router-link class="link" to="/admin-panel/our-team">
      <img src="@/js/assets/group.svg" alt="blog icon">
      <span>Out Team</span>
    </router-link>
  </ScaleDown>
  <button class="header__button" @click="closeAdminPanel()">
    Log Out
  </button>
</header>
</template>

<script>
import {mapActions} from 'vuex'
import { ScaleDown } from 'vue-burger-menu'
export default {
  name: "admin-header",
  components: {
    ScaleDown
  },
  data(){
    return {
      openSideBar: false
    }
  },
    methods: {
      ...mapActions(['logOut']),
        closeAdminPanel(){
          this.logOut()
            .then(()=>{
                this.$router.push('/admin')
            })
        }

    }
}
</script>

<style scoped lang="scss">
.router-link-active {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
}
.header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__button {
    padding: 15px;
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 15px;
    outline: none;
  }
}
.link {
  display: flex;
  align-items: baseline;
  img {
    width: 20px;
  }
}
</style>
