<template>
    <div class="error">
        <h1 class="error__title">
            404
        </h1>
        <p class="error__description">
            Page not found...
        </p>
    </div>
</template>

<script>
export default {
    name: "Error"
}
</script>

<style scoped lang="scss">
    .error {
        height: calc(100vh - 250px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;

        &__title {
            font-size: 200px;
        }
        &__description {
            color: #bfbfbf;
        }
    }
</style>
