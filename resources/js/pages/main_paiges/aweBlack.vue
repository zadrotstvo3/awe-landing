<template>
  <div class="main">
    <section class="head">
      <mainHead />
    </section>
    <section class="gallery">
      <mainGallery />
    </section>
    <section class="sandbox">
      <mainSandbox />
    </section>
    <section class="actions">
      <actions/>
    </section>
    <section class="info">
      <info />
    </section>
  </div>
</template>

<script>
import mainHead from '@/js/components/black/main_paiges/main__head'
import mainGallery from '@/js/components/black/main_paiges/main__gallery'
import mainSandbox from '@/js/components/black/main_paiges/main__sandbox'
import actions from '@/js/components/black/main_paiges/main__actions'
import info from '@/js/components/black/main_paiges/main__info'

export default {
  name: 'Home',
  components: {
    mainHead,
    mainGallery,
    mainSandbox,
    actions,
    info
  }
}
</script>
<style lang="scss">

</style>
