<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <component :is="layout">
                <router-view/>
            </component>
        </transition>
    </div>
</template>
<script>
import white from "@/js/Layoutes/white";
import black from "@/js/Layoutes/black";
import admin from "@/js/Layoutes/admin";

export default {
    components: {
        white,
        black,
        admin
    },
    data: () => ({}),
    computed: {
        layout(){
            return (this.$route.meta.layout || 'white')
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Codystar:wght@300&display=swap');
@font-face {
  font-family: 'Axiforma';
  src: url('~@/js/assets/fonts/Axiforma-Medium.woff') format("woff");
}
@font-face {
  font-family: 'Zekton';
  src: url("~@/js/assets/fonts/zekton/zekton-rg.woff") format("woff");
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    width: 100%;
    height: 100%;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
@media only screen and (max-width: 820px) {
    .header {
        &__logo {
            display: none;
        }
    }
}
</style>
