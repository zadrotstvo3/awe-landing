<template>
    <div class="modal"  @click="close">
        <div class="modal__container">
            <div class="modal__content">
                <img
                v-if="content.contentType === 'image'"
                :src="require(`@/js/assets${content.contentPath}`)"
                alt="image">
                <iframe
                v-else
                class="video__content"
                :src="content.contentPath"
                ></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    props: {
      content: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped lang="scss">
    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.8);

        &__container {
            width: 100%;
            max-width: 750px;
            background-color: #fff;
        }

        &__content {

            img, .video__content {
                min-height: 500px;
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 770px) {
      .modal__container {
        width: 100%;
        max-width: 300px;
        background-color: #fff;

        img, .video__content {
          min-height: 250px;
          width: 100%;
        }
      }
    }
</style>
