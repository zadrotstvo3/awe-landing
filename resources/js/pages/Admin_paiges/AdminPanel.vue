<template>
  <div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "adminPanel",
    created(){
      this.getArticles()
    },
    mounted() {
        return window.Laravel.isLoggedin ?
            this.$router.push('/admin-announcements') :
            this.$router.push('/admin')
    },
    methods: {
        ...mapActions(['getArticles'])
    },
    beforeEnter(from, to, next){
        window.Laravel.isLoggedin
            ? next('/admin-panel/announcements')
            : next('/admin')
    }
}
</script>

<style scoped lang="scss">
    div {
        height: 100vh;
    }
</style>
