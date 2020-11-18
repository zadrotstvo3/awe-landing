<template>
  <div id="black">
    <black__header />
    <main>
      <router-view/>
    </main>
    <black__footer/>
  </div>
</template>

<script>
import black__header from "@/js/components/black/main_paiges/black__header";
import black__footer from "@/js/components/black/main_paiges/black__footer";
export default {
  name: "black",
  components: {
    black__header,
    black__footer
  }
}
</script>

<style lang="scss">
#black {
    font-family: 'Zekton', sans-serif;
    background-color: black;
    color: white;
  }
</style>
