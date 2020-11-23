<template>
<div class="panel">
    <div class="team-list" id="page-wrap">
        <ul class="list">
            <li
                class="list__item"
                v-for="(item , index) in teamList"
                :key="index"
            >
                <div class="item" v-if="index !== 4">
                    <div class="item__preview" v-if="!item.showEdit">
                        <img
                            :src="item.full_image_url"
                            class="item__preview--image"
                            alt="avatar">
                        <p class="list__name">{{ `${item.firstName + ' ' +  item.lastName}`}}</p>
                        <p class="list__position">{{item.position}}</p>
                        <div class="item__hover">
                            <img src="@/js/assets/edit.svg" alt="edit icon" @click="item.showEdit = !item.showEdit">
                            <img src="@/js/assets/x-mark.svg" alt="delete icon" @click="toggleModal(item)">
                        </div>
                    </div>
                    <div v-else>
                        <div class="item__image" >
                            <label class="item__image--label" for="image" v-if="!item.full_image_url">
                                <img
                                    src="@/js/assets/plus.svg"
                                    class="item__icon"
                                    alt="avatar">
                            </label>
                            <div class="item__close" v-else>
                                <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24" @click="item.full_image_url = ''">
                                    <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                                </svg>
                                <img  class="preview" :src="uploadedImage" alt="image">
                            </div>
                            <input type="file" id="image" @change="changeImage($event, index)">
                        </div>
                        <div class="item__text">

                        </div>
                        <div class="item__input">
                            <input type="text" placeholder="First name" v-model="item.firstName">
                            <input type="text" placeholder="Last name" v-model="item.lastName">
                            <input type="text" placeholder="Position" v-model="item.position">
                            <input type="submit" value="Save" @click="item.showEdit = !item.showEdit">
                        </div>
                    </div>
                </div>
                <div class="item" v-else>
                    <div class="item__video">
                        <div class="item__play">
                            <svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 19.268C36.3333 20.0378 36.3333 21.9623 35 22.7321L3.5 40.9186C2.16667 41.6884 0.500002 40.7261 0.500002 39.1865L0.500004 2.81347C0.500004 1.27387 2.16667 0.311614 3.5 1.08142L35 19.268Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <warningModal
        v-if="modal"
        @close="toggleModal"
        @deleteItem="deleteTeamMate(currentItem)"
    />
</div>
</template>

<script>
import warningModal from "@/js/components/admin/warningModal";
import {mapActions} from 'vuex'
export default {
    name: "our-team",
    components: {
        warningModal
    },
    data(){
        return {
            teamList: [],
            modal: false,
            currentItem: '',
            uploadedImage: ''
        }
    },
    created(){
        const list = [
            {
                firstName: "John ",
                lastName: "Doe",
                position: "manager",
                full_image_url: "1-person.png"
            },
            {
                firstName: "John ",
                lastName: "Doe",
                position: "manager",
                full_image_url: "1-person.png"
            },
            {
                firstName: "John ",
                lastName: "Doe",
                position: "manager",
                full_image_url: "1-person.png"
            }
        ]
        const array = new Array(8)
        .fill()
        .map((item, index)=> {
            if(index < list.length){
                list[index].showEdit = false
                return list[index]
            }
            else {
                return {
                    first_name: "",
                    last_name: "",
                    position: "",
                    avatar: "",
                    full_image_url: '',
                    social_medias: [],
                    showEdit: true
                }
            }
        })
        return this.teamList = [...array]
    },
    methods: {
        ...mapActions(['uploadImage']),
        toggleModal(item){
            this.currentItem = item
            this.modal = !this.modal
        },
        deleteTeamMate(item){
            console.log(item)
        },
        changeImage(event, index){
            const files = event.target.files || event.dataTransfer.files
            if(!files.length){
                return
            }
            this.createImage(files[0], index)
        },
        createImage(file, index){
            const reader = new FileReader()
            reader.onload = (event) => {
                this.uploadedImage = event.target.result
                const data = {
                    image: this.uploadedImage
                }
                this.uploadImage(data)
                    .then((resp) => {
                        console.log(resp)
                        this.teamList[index].avatar = resp.url
                        this.teamList[index].full_image_url = resp.full_url
                    })
            }
            reader.readAsDataURL(file)
        },
    }
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
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 50px 50px 0 50px;
                    img {
                        border-radius: 50px 50px 0 50px;
                    }
                }
            }
        }
        &:nth-child(2){
            grid-area: 1 / 2 / 2 / 3;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 50px 50px 0 0;
                    img {
                        border-radius: 50px 50px 0 0;
                    }
                }
            }
        }
        &:nth-child(3){
            grid-area: 1 / 3 / 2 / 4;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 50px 50px 50px 0;
                    img {
                        border-radius: 50px 50px 50px 0;
                    }
                }
            }
        }
        &:nth-child(4){
            grid-area: 2 / 1 / 3 / 2;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 50px 0 0 50px;
                    img {
                        border-radius: 50px 0 0 50px;
                    }
                }
            }
        }
        &:nth-child(5){
            grid-area: 2 / 2 / 3 / 3;
        }
        &:nth-child(6){
            grid-area: 2 / 3 / 3 / 4;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 0 50px 50px 0;
                    img {
                        border-radius: 0 50px 50px 0;
                    }
                }
            }
        }
        &:nth-child(7){
            grid-area: 3 / 1 / 4 / 2;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 50px 0 50px 50px;
                    img {
                        border-radius: 50px 0 50px 50px;
                    }
                }
            }
        }
        &:nth-child(8){
            grid-area: 3 / 2 / 4 / 3;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 0 0 50px 50px;
                    img {
                        border-radius: 0 0 50px 50px;
                    }
                }
            }
        }
        &:last-child{
            grid-area: 3 / 3 / 4 / 4;
            .item {
                width: 100%;
                height: 100%;
                &__image, &__preview--image {
                    width: 300px;
                    height: 300px;
                    background-color: #e3e3e3;
                    border-radius: 0 50px 50px 50px;
                    img {
                        border-radius: 0 50px 50px 50px;
                    }
                }
            }
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
    position: relative;
    &__preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__image {
        display: flex;
        justify-content: center;
        align-items: center;
        &--label {
            img {
                width: 100px;
            }
        }
        input {
            display: none;
        }
        .preview {
            width: 300px;
            height: 300px;
            object-fit: cover;
        }
    }
    &__input,  &__links {
        padding: 10px 0;
        input {
            width: 100%;
            margin: 5px;
            padding: 10px;
            outline: none;
        }
    }
    &__close {
        position: relative;
        .icon {
            position: absolute;
            top: 20px;
            right: 20px;
        }
    }
    &__video {
        width: 100%;
        max-width: 420px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
    &__hover {
        padding: 15px 35px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255, .7);
        opacity: 0;
        visibility: hidden;
        z-index: -2;

        img {
            margin: 0 10px;
            width: 35px;
            cursor: pointer;
        }
    }
    &:hover .item__hover {
        opacity: 1;
        visibility: visible;
        z-index: 2;
        transition: .3s ease-in-out;
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
