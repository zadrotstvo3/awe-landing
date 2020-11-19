<template>
  <div id="admin">
    <div class="main">
      <router-view/>
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