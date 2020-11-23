<template>
  <div id="admin">
      <adminHeader v-if="showPanel"/>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
import adminHeader from '@/js/components/admin/admin-header'
import {mapGetters} from 'vuex'
export default {
    components: {
        adminHeader
    },
    name: "AWEAdmin",
    computed:{
        ...mapGetters(['getStatus']),
        showPanel(){
            return this.getStatus === 'Login successful'
        }
    },
    watch: {
        showPanel(oldVal, newVal){
            console.log(oldVal)
            console.log(newVal)
           return  oldVal = newVal
        }
    },
}
</script>

<style scoped lang="scss">
#admin {
  background-color: #fff;
  font-family: Gilroy, sans-serif;
}
</style>
