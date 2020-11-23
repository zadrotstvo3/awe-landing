<template>
  <div id="admin">
      <adminHeader/>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
import adminHeader from '@/js/components/admin/admin-header'

export default {
    components: {
        adminHeader
    },
  name: "AWEAdmin",
}
</script>

<style scoped lang="scss">
#admin {
  background-color: #fff;
  font-family: Gilroy, sans-serif;
}
</style>
