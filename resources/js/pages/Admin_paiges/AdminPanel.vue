<template>
  <div>
    <admin-header />
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import adminHeader from '@/js/components/admin/admin-header'
import {mapActions} from 'vuex'
export default {
    name: "adminPanel",
    components: {
        adminHeader
    },
    created(){
      this.getArticles()
    },
    mounted() {
        return window.Laravel.isLoggedin ?
            this.$router.push('/admin-panel/announcements') :
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
