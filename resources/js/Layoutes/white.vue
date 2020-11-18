<template>
  <div id="white">
    <whiteHeader/>
    <main>
      <router-view/>
    </main>
    <white__footer/>
  </div>
</template>

<script>
import whiteHeader from "@/js/components/white/main_paiges/white__header";
import white__footer from "@/js/components/white/main_paiges/white__footer";

export default {
  name: "white",
  components: {
    whiteHeader,
    white__footer
  }
}
</script>
<style scoped lang="scss">
#white {
  background-color: #F8F7F3;
  font-family: Gilroy, sans-serif;
}
</style>
