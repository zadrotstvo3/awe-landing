<template>
  <div id="admin">
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
    name: "AWEAdmin",
}
</script>

<style scoped lang="scss">
#admin {
  background-color: #fff;
  font-family: Gilroy, sans-serif;
}
</style>
