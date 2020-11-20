<template>
<div class="panel">
sdvobsoidvbisuodbv
</div>
</template>

<script>
export default {
    name: "our-team"
}
</script>

<style scoped lang="scss">
.team-list {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 50px 15px;
}
.list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    &__item {
        width: 100%;
        max-width: 300px;
        list-style: none;
        justify-self: center;
        &:first-child{
            grid-area: 1 / 1 / 2 / 2;
        }
        &:nth-child(2){
            grid-area: 1 / 2 / 2 / 3;
        }
        &:nth-child(3){
            grid-area: 1 / 3 / 2 / 4;
        }
        &:nth-child(4){
            grid-area: 2 / 1 / 3 / 2;
        }
        &:nth-child(5){
            grid-area: 2 / 2 / 3 / 3;
        }
        &:nth-child(6){
            grid-area: 2 / 3 / 3 / 4;
        }
        &:nth-child(7){
            grid-area: 3 / 1 / 4 / 2;
        }
        &:nth-child(8){
            grid-area: 3 / 2 / 4 / 3;
        }
        &:last-child{
            grid-area: 3 / 3 / 4 / 4;
        }
    }
    &__image {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    &__name {
        margin-top: 15px;
        font-size: 24px;
        font-weight: 600;
    }
    &__position {
        margin-top: 10px;
    }
}
.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__video {
        width: 100%;
        max-width: 420px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
}
@media only screen and (max-width: 1240px) {
    .item {
        &__video {
            height: auto;
        }
    }
}
@media only screen and (max-width: 660px) {
    .team-list {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        padding: 20px 5px;
    }
    .list {
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        &__name {
            margin-top: 5px;
            font-size: 14px;
        }
        &__position {
            margin-top: 0;
            font-size: 10px;
        }
    }
}
</style>
